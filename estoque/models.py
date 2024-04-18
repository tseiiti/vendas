from django.db import models

class Marca(models.Model):
  nome = models.CharField(max_length = 255)
  def __str__(self): return self.nome

class Categoria(models.Model):
  titulo = models.CharField("título", max_length = 255)
  def __str__(self): return self.titulo

class Produto(models.Model):
  marca = models.ForeignKey(Marca, on_delete = models.RESTRICT)
  categoria = models.ForeignKey(Categoria, on_delete = models.RESTRICT)
  descricao = models.CharField("descrição", max_length = 255)
  def __str__(self): return self.descricao

class Estoque(models.Model):
  produto = models.OneToOneField(Produto, on_delete = models.RESTRICT)
  quantidade = models.IntegerField()
  preco_compra = models.FloatField("preço de compra R$")
  def __str__(self): return self.produto.descricao
