from djongo import models
from django.contrib.auth.models import User

class Representante(models.Model):
  nome = models.CharField(max_length = 255)
  cpf = models.CharField("CPF", max_length = 14)
  niveis = models.TextChoices("nivel", "enviado junior pleno senior confirmado")
  nivel = models.CharField(max_length = 20, choices = niveis.choices)
  user = models.OneToOneField(User, on_delete = models.RESTRICT)
  ordering = ['nome']
  def __str__(self): return self.nome

class Cliente(models.Model):
  class Meta: permissions = [ ("can_get_all", "Pode acessar todos os clientes"), ]
  nome = models.CharField(max_length = 255)
  cnpj = models.CharField("CNPJ", max_length = 20)
  endereco = models.CharField(max_length = 255)
  bairro = models.CharField(max_length = 255)
  cidade = models.CharField(max_length = 255)
  estado = models.CharField(max_length = 2)
  cep = models.CharField(max_length = 10)
  contato = models.CharField(max_length = 255)
  telefone = models.CharField(max_length = 20)
  email = models.CharField("e-mail", max_length = 255)
  representante = models.ForeignKey(Representante, on_delete = models.RESTRICT)
  ordering = ['nome']
  def __str__(self): return self.nome

class Produto(models.Model):
  class Meta: permissions = [ ("can_preco_venda", "Pode alterar o preço de venda"), ]
  produto_id = models.IntegerField()
  descricao = models.CharField("descrição", max_length = 255)
  marca = models.CharField(max_length = 255)
  categoria = models.CharField(max_length = 255)
  quantidade = models.IntegerField()
  preco_compra = models.FloatField("preço de compra R$")
  preco_venda = models.FloatField("preço de venda R$")
  def __str__(self): return self.descricao

class ItemPedido(models.Model):
  class Meta: abstract = True
  id = models.IntegerField()
  descricao = models.CharField(max_length = 255)
  categoria = models.CharField(max_length = 255)
  marca = models.CharField(max_length = 255)
  quantidade = models.IntegerField()
  total = models.FloatField()

class EtapaPedido(models.Model):
  class Meta: abstract = True
  etapa = models.CharField(max_length = 20)
  horario = models.DateTimeField("horário")
  user_id = models.IntegerField()

class Pedido(models.Model):
  class Meta:
    permissions = [
      ("can_list", "Pode listar os pedidos"),
      ("can_create", "Pode criar um novo pedido"),
      ("can_update", "Pode atualizar um pedido existente"),
      ("can_detail", "Pode visualizar os detalhes de um pedido"),
      ("can_send", "Pode enviar o pedido"),
      ("can_confirm", "Pode confirmar o envio de um pedido"),
    ]
  itens_pedido = models.ArrayField(model_container = ItemPedido)
  etapas_pedido = models.ArrayField(model_container = EtapaPedido)
  representante = models.ForeignKey(Representante, on_delete = models.RESTRICT)
  cliente = models.ForeignKey(Cliente, on_delete = models.RESTRICT)
  horario = models.DateTimeField("horário")
  total = models.FloatField()
  etapas = models.TextChoices("etapa", "criado enviado confirmado faturado cancelado")
  etapa = models.CharField(max_length = 20, choices = etapas.choices, default = etapas.criado)
