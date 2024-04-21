from django.contrib import admin
from .models import Marca, Categoria, Produto, Estoque

@admin.register(Marca)
class MarcaAdmin(admin.ModelAdmin):
  ordering = ['nome']

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
  ordering = ['titulo']

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
  list_display = ('descricao', 'categoria', 'marca', )
  list_filter = ('categoria', 'marca', )
  search_fields = ('descricao', 'categoria', 'marca', )
  ordering = ['descricao']

@admin.register(Estoque)
class EstoqueAdmin(admin.ModelAdmin):
  list_display = ('produto', 'quantidade', 'preco_compra')
  list_editable = ('quantidade', 'preco_compra')
  search_fields = ('produto', )
  ordering = ['produto']