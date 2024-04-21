from django.contrib import admin
from .models import Representante, Cliente, Produto

@admin.register(Representante)
class RepresentanteAdmin(admin.ModelAdmin):
  list_display = ('nome', 'cpf', )
  search_fields = ('nome', 'cpf', )
  ordering = ['nome']

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
  list_display = ('nome', 'cnpj', )
  search_fields = ('nome', 'cnpj', )
  list_filter = ('representante', )
  ordering = ['nome']

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
  list_display = ('descricao', 'preco_compra', 'preco_venda', )
  list_editable = ('preco_venda', )
  list_filter = ('categoria', 'marca', )
  search_fields = ('descricao', 'categoria', 'marca', )
  ordering = ['descricao']
