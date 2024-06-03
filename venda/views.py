from django.contrib.auth.decorators import permission_required
from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import HttpResponse

from datetime import timedelta
from json import dumps
import random

from .utils import Paginator, get_etapas
from .models import Representante, Estoque, Pedido, Apriori, Rastreio

size_page = 15

@permission_required("venda.can_list")
def list(request):
  representante = Representante.objects.filter(user = request.user).first()
  pedidos = Pedido.objects.filter(representante = representante)
  can_confirm = request.user.has_perm('venda.can_confirm')
  if can_confirm:
    pedidos = pedidos | Pedido.objects.filter(etapa = Pedido.etapas.enviado)
  pedidos = pedidos.order_by("-horario", "-id")

  pag = Paginator(pedidos, size_page)
  pag.set_page(request.GET.get("p"))
  
  message = request.GET.get("message")
  context = {
    "title": "Listar Pedidos",
    "representante": representante,
    "pedidos": pag.page_objects(),
    "pages": pag.pages(),
    "message": message,
    "alert_color": "alert-success" if message and "sucesso" in message else "alert-danger",
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
  context = get_context(request, f"Alterar Pedido - {id}", id)
  if request.method == "GET":
    return render(request, "update.html", context)
  else:
    save_pedido(request, context["pedido"])
    return redirect("venda:list")

@permission_required("venda.can_detail")
def detail(request, id):
  context = get_context(request, f"Visualizar Pedido - {id}", id)
  return render(request, "detail.html", context)

@permission_required("venda.can_track")
def track(request, id):
  pedido = Pedido.objects.filter(id = id).first()
  etapas = get_etapas(pedido)
  
  rastreio = Rastreio.objects.filter(pedido = pedido).first()
  if not rastreio:
    rastreio = Rastreio()
    rastreio.pedido = pedido
    rastreio.previsao = pedido.horario + timedelta(days = random.randrange(4, 7))
    rastreio.etapa_atual = etapas[1]["titulo"]
    rastreio.etapas_rastreio = [etapas[1]]
    rastreio.save()

  if request.method == "POST":
    id = int(request.POST.get("select-nova-etapa"))
    rastreio.etapa_atual = etapas[id]["titulo"]
    rastreio.etapas_rastreio.append(etapas[id])
    rastreio.save()
    
  for etapa in rastreio.etapas_rastreio:
    if etapa["id"] < rastreio.etapas_rastreio[-1]["id"]:
      etapa["icon_color"] = "status-delivered"
    else:
      etapa["icon_color"] = "status-outfordelivery"

  can_add_track = request.user.has_perm('venda.can_add_track')
  context = {
    "title": f"Rastrear Pedido - {id}",
    "etapas": etapas[rastreio.etapas_rastreio[-1]["id"] + 1:],
    "pedido": pedido,
    "rastreio": rastreio,
    "can_add_track": can_add_track,
  }
  return render(request, "track.html", context)



#################
# api 
#################

@permission_required("venda.can_send")
def send(request, id):
  representante = Representante.objects.filter(user = request.user).first()
  pedido = Pedido.objects.filter(
    id = id,
    representante = representante,
    etapa = Pedido.etapas.criado).first()
  message = "Pedido não encontrado"
  if pedido:
    pedido.etapa = Pedido.etapas.enviado
    pedido.horario = timezone.now()
    pedido.save()
    add_etapa(pedido, request.user)
    message = "Pedido enviado com sucesso!"
    if representante.user.has_perm('venda.can_confirm') \
      or (representante.nivel == Representante.niveis.confirmado) \
      or (representante.nivel == Representante.niveis.senior and pedido.total < 15000) \
      or (representante.nivel == Representante.niveis.pleno and pedido.total < 5000) \
      or (representante.nivel == Representante.niveis.junior and pedido.total < 500):
      message = confirmar(pedido, request.user)
  return redirect(f"/venda/list?message={message}")

@permission_required("venda.can_confirm")
def confirm(request, id):
  pedido = Pedido.objects.filter(id = id).first()
  message = "Pedido não encontrado"
  if pedido: message = confirmar(pedido, request.user)
  return redirect(f"/venda/list?message={message}")

def apriori(request):
  item_a = request.GET.get("item_a")
  if not item_a: item_a = ""

  # identifica as possiveis combinações
  itens = []
  ids = item_a.split(",")
  a = b = len(ids)
  itens.append(",".join(sorted(ids)))
  for i in range(a):
    for j in range(1, b):
      x = []
      for k in range(b - j):
        l = i + k
        if l >= a: l -= a
        x.append(ids[l])
      itens.append(",".join(sorted(x)))
  itens.append("")

  # adiciona elementos no array
  pks = set()
  data = []
  apri = Apriori.objects.filter(item_a__in=itens).order_by("-lift")
  ids = [int(i.replace("P", "")) for i in ids]
  for a in apri:
    for i in a.item_b.split(","):
      pk = int(i.replace("P", ""))
      if not pk in pks and not pk in ids:
        pks.add(pk)
        e = Estoque.objects.get(pk=pk, quantidade__gt = 0)
        data.append({
          "id": e.id,
          "descricao": e.descricao,
          "marca": e.marca,
          "preco_venda": e.preco_venda,
          "suporte": a.suporte,
          "confianca": a.confianca,
          "lift": a.lift,
        })
      if len(data) == 5: break
    if len(data) == 5: break
  return HttpResponse(dumps(data), content_type = "application/json")





#################
# private 
#################

def get_context(request, title, id = None):
  pedido = Pedido.objects.filter(id = id).first()
  if pedido and pedido.representante_id:
    representante = pedido.representante
  else:
    representante = Representante.objects.filter(user = request.user).first()

  # "obtendo do sistema de estoque"
  estoques = Estoque.objects.filter(quantidade__gt = 0)

  return {
    "representante": representante,
    "estoques": estoques,
    "pedido": pedido,
    "title": title,
  }

def confirmar(pedido, user):
  # envio de saída para o sistema de estoque
  for item in pedido.itens_pedido:
    estoque = Estoque.objects.filter(id = item["id"]).first()
    if estoque.quantidade - item["quantidade"] < 0:
      pedido.etapa = Pedido.etapas.rejeitado
      add_etapa(pedido, user)
      return f"Pedido rejeitado por falta do produto {estoque.descricao}"

  for item in pedido.itens_pedido:
    estoque = Estoque.objects.filter(id = item["id"]).first()
    estoque.quantidade -= item["quantidade"]
    estoque.save()

  # envio para sistema financeiro

  # envio para sistema transportadora

  pedido.etapa = Pedido.etapas.confirmado
  pedido.horario = timezone.now()
  pedido.save()
  add_etapa(pedido, user)
  return "Pedido confirmado com sucesso!"

def save_pedido(request, pedido):
  # criar ou alterar o pedido somente na etapa de "criado"
  if pedido.etapa != Pedido.etapas.criado: return

  # criar ou alterar o pedido somente pelo mesmo representante
  post = request.POST
  representante = Representante.objects.filter(id = post.get("input-representante-id")).first()
  if representante.user != request.user: return

  # atributos básicos
  pedido.representante = representante
  pedido.cliente = next(
    item for item in representante.clientes 
      if item["id"] == int(post.get("select-cliente")))
  pedido.horario = timezone.now()
  pedido.total = post.get("input-total").replace(",", ".")

  # produtos selecionados
  itens_pedido = []
  for k in dict(post).keys():
    if "hidden-pedidos" in k:
      estoque_id = k.replace("hidden-pedidos[", "").replace("]", "")
      est = Estoque.objects.get(id = estoque_id)
      qtd = int(post.get(k))
      itens_pedido.append({
        "id": estoque_id,
        "produto": {
          "marca": est.marca,
          "categoria": est.categoria,
          "descricao": est.descricao,
        },
        "preco_compra": est.preco_compra,
        "preco_venda": est.preco_venda,
        "quantidade": qtd,
        "total": qtd * est.preco_venda,
      })
  pedido.itens_pedido = itens_pedido
  pedido.save()

  # adicionar etapa no histórico
  add_etapa(pedido, request.user)

def add_etapa(pedido, user):
  etapas_pedido = pedido.etapas_pedido
  if not etapas_pedido: etapas_pedido = []
  etapas_pedido.append({
    "id": len(etapas_pedido) + 1,
    "etapa": pedido.etapa,
    "horario": timezone.now(),
    "user_id": user.id,
  })
  pedido.etapas_pedido = etapas_pedido
  pedido.save()
