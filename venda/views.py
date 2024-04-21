from django.contrib.auth.decorators import permission_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from urllib.request import urlopen
from datetime import datetime
import json

from .models import Representante, Cliente, Produto, Pedido

def home(request):
  return render(request, "home.html", { "title": "Home", })

@permission_required("venda.can_list")
def list(request):
  representante = Representante.objects.filter(user = request.user).first()
  context = {
    "title": "Listar Pedidos", 
    "representante": representante,
    "pedidos": Pedido.objects.order_by("-horario")[:50], 
  }
  return render(request, "list.html", context)
  
@permission_required("venda.can_create")
def create(request):
  if request.method == "GET":
    context = get_context(request)
    return render(request, "create.html", context)
  else:
    pedido = Pedido()
    save_pedido(request, pedido)
    return redirect("venda:list")

@permission_required("venda.can_update")
def update(request, id):
  pedido = Pedido.objects.filter(id = id).first()
  if request.method == "GET":
    context = get_context(request)
    context["pedido"] = pedido
    return render(request, "update.html", context)
  else:
    save_pedido(request, pedido)
    return redirect("venda:list")

@permission_required("venda.can_detail")
def detail(request, id):
  pedido = Pedido.objects.filter(id = id).first()
  context = get_context(request)
  context["pedido"] = pedido
  return render(request, "detail.html", context)

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
def get_context(request):
  representante = Representante.objects.filter(user = request.user).first()
  clientes = Cliente.objects.filter(representante = representante)
  produtos = Produto.objects.all()
  context = {
    "title": "Cadastrar Pedidos", 
    "representante": representante,
    "clientes": clientes,
    "produtos": produtos,
  }
  return context

def save_pedido(request, pedido):
  post = request.POST
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