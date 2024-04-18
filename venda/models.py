from djongo import models
from django.contrib.auth.models import User

class Representante(models.Model):
  nome = models.CharField(max_length = 255)
  cpf = models.CharField("CPF", max_length = 14)
  user = models.OneToOneField(User, on_delete = models.RESTRICT)
  ordering = ['nome']
  def __str__(self): return self.nome

class Cliente(models.Model):
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

class ItemPedido(models.Model):
  descricao = models.CharField(max_length = 255)
  categoria = models.CharField(max_length = 255)
  marca = models.CharField(max_length = 255)
  quantidade = models.IntegerField()
  preco_compra = models.FloatField()
  def __str__(self): return self.nome
  class Meta: abstract = True

class Pedido(models.Model):
  representante = models.ForeignKey(Representante, on_delete=models.RESTRICT)
  cliente = models.ForeignKey(Cliente, on_delete=models.RESTRICT)
  itens_pedido = models.ArrayField(
    model_container = ItemPedido
  )