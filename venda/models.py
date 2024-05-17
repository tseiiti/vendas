from djongo import models
from django.contrib.auth.models import User

class Estoque(models.Model):
  marca = models.CharField(max_length = 255)
  categoria = models.CharField("título", max_length = 255)
  descricao = models.CharField("descrição", max_length = 255)
  quantidade = models.IntegerField()
  preco_compra = models.FloatField("preço de compra R$")
  preco_venda = models.FloatField("preço de venda R$")
  def __str__(self): return self.descricao



class Endereco(models.Model):
  logradouro = models.CharField(max_length = 255)
  bairro = models.CharField(max_length = 255)
  cidade = models.CharField(max_length = 255)
  estado = models.CharField(max_length = 2)
  cep = models.CharField(max_length = 10)
  class Meta: abstract = True

class Cliente(models.Model):
  id = models.IntegerField()
  nome = models.CharField(max_length = 255)
  cnpj = models.CharField("CNPJ", max_length = 20)
  contato = models.CharField(max_length = 255)
  telefone = models.CharField(max_length = 20)
  email = models.CharField("e-mail", max_length = 255)
  endereco = models.EmbeddedField(model_container = Endereco)
  def __str__(self): return self.nome
  class Meta: 
    abstract = True
    permissions = [ ("can_get_all", "Pode acessar todos os clientes"), ]

class Representante(models.Model):
  clientes = models.ArrayField(model_container = Cliente)
  nome = models.CharField(max_length = 255)
  cpf = models.CharField("CPF", max_length = 14)
  niveis = models.TextChoices("nivel", "enviado junior pleno senior confirmado")
  nivel = models.CharField(max_length = 20, choices = niveis.choices)
  user = models.OneToOneField(User, on_delete = models.RESTRICT)
  ordering = ["nome"]
  def __str__(self): return self.nome



class Produto(models.Model):
  marca = models.CharField(max_length = 255)
  categoria = models.CharField("título", max_length = 255)
  descricao = models.CharField("descrição", max_length = 255)
  def __str__(self): return self.descricao
  class Meta: abstract = True

class ItemPedido(models.Model):
  id = models.IntegerField()
  produto = models.EmbeddedField(model_container = Produto)
  preco_compra = models.FloatField("preço de compra R$")
  preco_venda = models.FloatField("preço de venda R$")
  quantidade = models.IntegerField()
  total = models.FloatField()
  class Meta: abstract = True

class EtapaPedido(models.Model):
  id = models.IntegerField()
  etapa = models.CharField(max_length = 20)
  horario = models.DateTimeField("horário")
  user_id = models.IntegerField()
  class Meta: abstract = True

class Pedido(models.Model):
  etapas = models.TextChoices("etapa", "criado enviado confirmado faturado cancelado rejeitado")
  etapa = models.CharField(max_length = 20, choices = etapas.choices, default = etapas.criado)
  etapas_pedido = models.ArrayField(model_container = EtapaPedido)
  representante = models.ForeignKey(Representante, on_delete = models.RESTRICT)
  cliente = models.EmbeddedField(model_container = Cliente)
  horario = models.DateTimeField("horário")
  itens_pedido = models.ArrayField(model_container = ItemPedido)
  total = models.FloatField()
  class Meta:
    permissions = [
      ("can_list", "Pode listar os pedidos"),
      ("can_create", "Pode criar um novo pedido"),
      ("can_update", "Pode atualizar um pedido existente"),
      ("can_detail", "Pode visualizar os detalhes de um pedido"),
      ("can_send", "Pode enviar o pedido"),
      ("can_confirm", "Pode confirmar o envio de um pedido"),
    ]

class Apriori(models.Model):
  index = models.IntegerField()
  item_a = models.CharField(max_length = 255)
  item_b = models.CharField(max_length = 255)
  suporte = models.FloatField()
  confianca = models.FloatField()
  lift = models.FloatField()
  ordering = ["-lift"]
  def __str__(self): return self.item_a + " > " + self.item_b
  