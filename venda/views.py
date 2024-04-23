from django.contrib.auth.decorators import permission_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from urllib.request import urlopen
from datetime import datetime
import json

from .models import Representante, Cliente, Produto, Pedido

def home(request):
  return render(request, "home.html", { "title": "Home", })

@permission_required("venda.can_list")
def list(request):
  representante = Representante.objects.filter(user = request.user).first()
  pedidos = Pedido.objects.filter(representante = representante)

  can_confirm = request.user.has_perm('venda.can_confirm')
  if can_confirm:
    pedidos = pedidos | Pedido.objects.filter(etapa = Pedido.etapas.enviado)
    
  context = {
    "title": "Listar Pedidos",
    "representante": representante,
    "pedidos": pedidos.order_by("-horario")[:50],
    "message": request.GET.get("message"),
    "can_confirm": can_confirm,
  }
  return render(request, "list.html", context)
  
@permission_required("venda.can_create")
def create(request):
  if request.method == "GET":
    context = get_context(request, "Cadastrar Pedido")
    return render(request, "create.html", context)
  else:
    save_pedido(request, Pedido())
    return redirect("venda:list")

@permission_required("venda.can_update")
def update(request, id):
  context = get_context(request, "Alterar Pedido", id)
  if request.method == "GET":
    return render(request, "update.html", context)
  else:
    save_pedido(request, context["pedido"])
    return redirect("venda:list")

@permission_required("venda.can_detail")
def detail(request, id):
  context = get_context(request, "Visualizar Pedido", id)
  return render(request, "detail.html", context)

@permission_required("venda.can_send")
def send(request, id):
  representante = Representante.objects.filter(user = request.user).first()
  pedido = Pedido.objects.filter(id = id, representante = representante, etapa = Pedido.etapas.criado).first()

  if pedido:
    pedido.etapa = Pedido.etapas.enviado
    pedido.horario = datetime.now()
    pedido.save()
    add_etapa(pedido, request.user)
    if (representante.nivel == Representante.niveis.confirmado) \
      or (representante.nivel == Representante.niveis.senior and pedido.total < 100000) \
      or (representante.nivel == Representante.niveis.pleno and pedido.total < 10000) \
      or (representante.nivel == Representante.niveis.junior and pedido.total < 1000):
      confirmar(pedido, request.user)
    return redirect(f"/venda/list?message=Pedido {pedido.etapa} com sucesso!")
  
  return redirect("venda:list")

@permission_required("venda.can_confirm")
def confirm(request, id):
  pedido = Pedido.objects.filter(id = id, etapa = Pedido.etapas.enviado).first()
  if pedido:
    confirmar(pedido, request.user)
    return redirect(f"/venda/list?message=Pedido confirmado com sucesso!")
  return redirect("venda:list")

@permission_required("venda.can_preco_venda")
def preco_venda(request):
  estoque = consultar_estoque()
  for e in estoque:
    prod = Produto.objects.filter(id = e['id']).first()
    if not prod:
      prod = Produto()
      prod.id = e.id
      prod.produto_id = e.produto_id
      prod.descricao = e.descricao
      prod.marca = e.marca
      prod.categoria = e.categoria
      prod.quantidade = e.quantidade
      prod.preco_compra = e.preco_compra
      # prod.preco_venda = prod.preco_compra * 2
      prod.preco_venda = 999999999
      prod.save()
  return redirect("/admin/venda/produto/")



#################
# private 
#################
def add_etapa(pedido, user):
  etapas_pedido = pedido.etapas_pedido
  if not etapas_pedido: etapas_pedido = []
  etapas_pedido.append({
    "etapa": pedido.etapa,
    "horario": datetime.now(),
    "user_id": user.id,
  })
  pedido.etapas_pedido = etapas_pedido
  pedido.save()

def confirmar(pedido, user):
  # envio para sistema de estoque
  for item in pedido.itens_pedido:
    id = item["id"]
    quantidade = item["quantidade"]
    url = "http://localhost:8000/estoque/saida"
    url += f"?id={id}"
    url += f"&quantidade={quantidade}"
    response = urlopen(url)
    saida = json.loads(response.read())
    if "erro" in saida.keys():
      print(saida["erro"])
      return

  # envio para sistema financeiro

  # envio para sistema transportadora

  pedido.etapa = Pedido.etapas.confirmado
  pedido.horario = datetime.now()
  pedido.save()
  add_etapa(pedido, user)

def consultar_estoque():
  url = "http://localhost:8000/estoque/consulta"
  response = urlopen(url)
  return json.loads(response.read())

def get_context(request, title, id = None):
  # não será validado o estoque novamente!

  produtos = consultar_estoque()
  for produto in produtos:
    produto["preco_venda"] = Produto.objects.get(id = produto["id"]).preco_venda

  pedido = Pedido.objects.filter(id = id).first()
  if pedido: 
    representante = pedido.representante
  else:
    representante = Representante.objects.filter(user = request.user).first()
  clientes = Cliente.objects.filter(representante = representante)
  context = {
    "representante": representante,
    "clientes": clientes,
    "produtos": produtos,
    "pedido": pedido,
    "title": title,
  }
  return context

def save_pedido(request, pedido):
  if pedido.etapa != Pedido.etapas.criado: return

  post = request.POST
  representante = Representante.objects.filter(id = post.get("input-representante-id")).first()
  if representante.user != request.user: return

  pedido.horario = datetime.now()
  pedido.representante = representante
  pedido.cliente = Cliente.objects.get(id = post.get("select-cliente"))
  pedido.total = post.get("input-total").replace(",", ".")
  pedido.etapa = Pedido.etapas.criado
  itens_pedido = []
  for k in dict(post).keys():
    if "hidden-pedidos" in k:
      id = k.replace("hidden-pedidos[", "").replace("]", "")
      qtd = int(post.get(k))
      prd = Produto.objects.get(id = id)
      itens_pedido.append({
        "id": prd.id,
        "produto_id": prd.produto_id,
        "descricao": prd.descricao,
        "marca": prd.marca,
        "categoria": prd.categoria,
        "quantidade": qtd,
        "preco_venda": prd.preco_venda,
        "total": qtd * prd.preco_venda,
      })
  pedido.itens_pedido = itens_pedido
  pedido.save()
  add_etapa(pedido, request.user)
