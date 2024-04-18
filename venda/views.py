from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render
from urllib.request import urlopen
import json
import pymongo

from .models import Representante, Cliente, Pedido
from .utils import to_d

def home(request):
  return render(request, "home.html")

def index(request):
  return render(request, "index.html")

@login_required(login_url = '/admin/login/')
def create(request):
  user = request.user
  representante = Representante.objects.filter(user = user).first()

  url = 'http://localhost:8000/estoque/consulta'
  response = urlopen(url)
  produtos = json.loads(response.read()) 

  if request.method == "GET":
    context = {
      'user': user,
      'representante': representante,
      'clientes': Cliente.objects.filter(representante = representante),
      'produtos': produtos,
    }
    return render(request, "create.html", context)
  else:
    post = request.POST
    cliente_id = post.get("select-cliente")

    pedido = Pedido()
    pedido.cliente = Cliente.objects.get(id = cliente_id)
    itens_pedido = []
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
    pedido.itens_pedido = itens_pedido
    pedido.representante = representante
    pedido.save()
    return HttpResponse('asdf')

def result(request, id):
  return HttpResponse('result')

def update(request, id):
  return HttpResponse('update')
