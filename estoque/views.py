from django.http import HttpResponse
from django.shortcuts import render
import json
from .models import Estoque

def consulta(request):
  data = []
  for e in Estoque.objects.all():
    if e.quantidade > 0:
      data.append({
        "id": e.id,
        "produto_id": e.produto.id,
        "descricao": e.produto.descricao,
        "marca": e.produto.marca.nome,
        "categoria": e.produto.categoria.titulo,
        "quantidade": e.quantidade,
        "preco_compra": e.preco_compra,
      })
  return HttpResponse(json.dumps(data), content_type = "application/json")

def saida(request):
  id = request.GET.get("id")
  if not id:
    return HttpResponse(json.dumps({"erro": "id inválido"}), content_type = "application/json")
  
  estoque = Estoque.objects.get(id = id)
  if not estoque:
    return HttpResponse(json.dumps({"erro": "produto não encontrado"}), content_type = "application/json")
  
  quantidade = int(request.GET.get("quantidade"))
  if not quantidade or estoque.quantidade - quantidade < 0:
    return HttpResponse(json.dumps({"erro": "quantidade inválida"}), content_type = "application/json")
  
  estoque.quantidade -= quantidade
  estoque.save()
  return HttpResponse(json.dumps({"sucesso": "saída registrada com sucesso"}), content_type = "application/json")
