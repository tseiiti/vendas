from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render, redirect
from urllib.request import urlopen
from datetime import datetime
import json

from .models import Representante, Cliente, Pedido

def home(request):
  return render(request, "home.html")

@login_required(login_url = '/admin/login/')
def index(request):
  representante = Representante.objects.filter(user = request.user).first()
  context = {
    'representante': representante,
    'pedidos': Pedido.objects.all()
  }
  return render(request, "index.html", context)

@login_required(login_url = '/admin/login/')
def create(request):
  representante = Representante.objects.filter(user = request.user).first()

  url = 'http://localhost:8000/estoque/consulta'
  response = urlopen(url)
  produtos = json.loads(response.read())

  if request.method == "GET":
    context = {
      'representante': representante,
      'clientes': Cliente.objects.filter(representante = representante),
      'produtos': produtos,
    }
    return render(request, "create.html", context)
  else:
    post = request.POST
    cliente_id = post.get("select-cliente")

    pedido = Pedido()
    pedido.horario = datetime.now()
    pedido.representante = representante
    pedido.cliente = Cliente.objects.get(id = cliente_id)
    itens_pedido = []
    total = 0
    for k in dict(post).keys():
      if "hidden-pedidos" in k:
        id = int(k.replace("hidden-pedidos[", "").replace("]", ""))
        qtd = post.get(k)
        prd = next(item for item in produtos if item["id"] == id)
        item = {
          "id": prd['id'],
          "descricao": prd['descricao'],
          "categoria": prd['categoria'],
          "marca": prd['marca'],
          "quantidade": qtd,
          "preco_compra": prd['preco_compra'],
        }
        itens_pedido.append(item)
        total += int(qtd) * prd['preco_compra']
    pedido.itens_pedido = itens_pedido
    pedido.total = total
    pedido.save()
    return redirect("venda:index")

def detail(request, id):
  return HttpResponse('detail')

@login_required(login_url = '/admin/login/')
def update(request, id):
  representante = Representante.objects.filter(user = request.user).first()

  url = 'http://localhost:8000/estoque/consulta'
  response = urlopen(url)
  produtos = json.loads(response.read())

  if request.method == "GET":
    context = {
      'representante': representante,
      'clientes': Cliente.objects.filter(representante = representante),
      'produtos': produtos,
    }
    return render(request, "update.html", context)
  return HttpResponse('update')
