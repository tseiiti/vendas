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
    "pedidos": pedidos.order_by("-etapa", "-horario")[:50],
    "message": request.GET.get("message"),
    "can_confirm": can_confirm,
  }
  return render(request, "list.html", context)
  
@permission_required("venda.can_create")
def create(request):
  if request.method == "GET":
    context = get_context(request)
    context["title"] = "Cadastrar Pedido"
    return render(request, "create.html", context)
  else:
    pedido = Pedido()
    save_pedido(request, pedido)
    return redirect("venda:list")

@permission_required("venda.can_update")
def update(request, id):
  context = get_context(request, id)
  if request.method == "GET":
    context["title"] = "Alterar Pedido"
    return render(request, "update.html", context)
  else:
    save_pedido(request, context["pedido"])
    return redirect("venda:list")

@permission_required("venda.can_detail")
def detail(request, id):
  context = get_context(request, id)
  context["title"] = "Visualizar Pedido"
  return render(request, "detail.html", context)

@permission_required("venda.can_send")
def send(request, id):
  representante = Representante.objects.filter(user = request.user).first()
  pedido = Pedido.objects.filter(id = id, representante = representante, etapa = Pedido.etapas.criado).first()

  if pedido:
    if (representante.nivel == Representante.niveis.confirmado) \
      or (representante.nivel == Representante.niveis.senior and pedido.total < 100000) \
      or (representante.nivel == Representante.niveis.pleno and pedido.total < 10000) \
      or (representante.nivel == Representante.niveis.junior and pedido.total < 1000):
      pedido.etapa = Pedido.etapas.confirmado
    else:
      pedido.etapa = Pedido.etapas.enviado
    pedido.horario = datetime.now()
    pedido.save()
    return redirect(f"/venda/list?message=Pedido {pedido.etapa} com sucesso!")
  return redirect("venda:list")

@permission_required("venda.can_confirm")
def confirm(request, id):
  pedido = Pedido.objects.filter(id = id, etapa = Pedido.etapas.enviado).first()
  if pedido:
    pedido.etapa = Pedido.etapas.confirmado
    pedido.horario = datetime.now()
    pedido.save()
    return redirect(f"/venda/list?message=Pedido confirmado com sucesso!")
  return redirect("venda:list")

@permission_required("venda.can_preco_venda")
def preco_venda(request):
  url = "http://localhost:8000/estoque/consulta"
  response = urlopen(url)
  estoque = json.loads(response.read())
  for e in estoque:
    prod = Produto.objects.filter(id = e['id']).first()
    if not prod:
      prod = Produto(**e)
      prod.preco_venda = prod.preco_compra * 2
      prod.save()
  return redirect("/admin/venda/produto/")



#################
# private 
#################
def get_context(request, id = None):
  representante = Representante.objects.filter(user = request.user).first()
  pedido = Pedido.objects.filter(id = id, representante = representante).first()
  clientes = Cliente.objects.filter(representante = representante)
  produtos = Produto.objects.all()
  context = {
    "representante": representante,
    "clientes": clientes,
    "produtos": produtos,
    "pedido": pedido,
  }
  return context

def save_pedido(request, pedido):
  if pedido.etapa != Pedido.etapas.criado: return
  post = request.POST

  if request.user.has_perm('venda.can_confirm'):
    pedido.etapa = Pedido.etapas.confirmado
  else:
    pedido.etapa = Pedido.etapas.criado
  
  pedido.horario = datetime.now()
  pedido.representante = Representante.objects.get(user = request.user)
  pedido.cliente = Cliente.objects.get(id = post.get("select-cliente"))
  pedido.total = post.get("input-total").replace(",", ".")
  itens_pedido = []
  for k in dict(post).keys():
    if "hidden-pedidos" in k:
      id = k.replace("hidden-pedidos[", "").replace("]", "")
      qtd = int(post.get(k))
      prd = Produto.objects.get(id = id)
      item = {
        "id": prd.id,
        "descricao": prd.descricao,
        "categoria": prd.categoria,
        "marca": prd.marca,
        "quantidade": qtd,
        "total": qtd * prd.preco_venda,
      }
      itens_pedido.append(item)
  pedido.itens_pedido = itens_pedido
  pedido.save()