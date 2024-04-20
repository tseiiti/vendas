from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from urllib.request import urlopen
from datetime import datetime
import json

from .models import Representante, Cliente, Pedido

def home(request):
  return render(request, "home.html", { "title": "Home", })

@login_required(login_url = '/admin/login/')
def list(request):
  representante = Representante.objects.filter(user = request.user).first()
  context = {
    "title": "Listar Pedidos", 
    "representante": representante,
    "pedidos": Pedido.objects.all()
  }
  return render(request, "list.html", context)

@login_required(login_url = "/admin/login/")
def create(request):
  representante = Representante.objects.filter(user = request.user).first()
  clientes = Cliente.objects.filter(representante = representante)

  url = "http://localhost:8000/estoque/consulta"
  response = urlopen(url)
  produtos = json.loads(response.read())

  if request.method == "GET":
    context = {
      "title": "Cadastrar Pedidos", 
      "representante": representante,
      "clientes": clientes,
      "produtos": produtos,
    }
    return render(request, "create.html", context)
  else:
    post = request.POST
    
    pedido = Pedido()

    pedido.horario = datetime.now()
    pedido.representante = representante
    pedido.cliente = Cliente.objects.get(id = post.get("select-cliente"))
    pedido.total = post.get("input-total")
    itens_pedido = []
    for k in dict(post).keys():
      if "hidden-pedidos" in k:
        id = int(k.replace("hidden-pedidos[", "").replace("]", ""))
        qtd = post.get(k)
        prd = next(item for item in produtos if item["id"] == id)
        item = {
          "id": prd["id"],
          "descricao": prd["descricao"],
          "categoria": prd["categoria"],
          "marca": prd["marca"],
          "quantidade": qtd,
          "preco_compra": prd["preco_compra"],
        }
        itens_pedido.append(item)
    pedido.itens_pedido = itens_pedido
    pedido.save()
    return redirect("venda:list")

@login_required(login_url = "/admin/login/")
def update(request, id):
  representante = Representante.objects.filter(user = request.user).first()
  clientes = Cliente.objects.filter(representante = representante)
  pedido = Pedido.objects.filter(id = id).first()

  url = "http://localhost:8000/estoque/consulta"
  response = urlopen(url)
  produtos = json.loads(response.read())

  if request.method == "GET":
    context = {
      "title": "Atualizar Pedidos", 
      "representante": representante,
      "clientes": clientes,
      "produtos": produtos,
      "pedido": pedido,
    }
    return render(request, "update.html", context)
  else:
    post = request.POST

    pedido = Pedido.objects.get(id = id)

    pedido.horario = datetime.now()
    pedido.representante = representante
    pedido.cliente = Cliente.objects.get(id = post.get("select-cliente"))
    pedido.total = post.get("input-total")
    print(post.get("input-total"))
    print(post.get("select-cliente"))
    itens_pedido = []
    for k in dict(post).keys():
      if "hidden-pedidos" in k:
        id = int(k.replace("hidden-pedidos[", "").replace("]", ""))
        qtd = post.get(k)
        prd = next(item for item in produtos if item["id"] == id)
        item = {
          "id": prd["id"],
          "descricao": prd["descricao"],
          "categoria": prd["categoria"],
          "marca": prd["marca"],
          "quantidade": qtd,
          "preco_compra": prd["preco_compra"],
        }
        itens_pedido.append(item)
    pedido.itens_pedido = itens_pedido
    pedido.save()
    return redirect("venda:list")

def detail(request, id):
  return HttpResponse("detail")
