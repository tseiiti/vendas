from django.contrib import admin
from .models import Estoque, Representante

# admin.site.register(Estoque)
# admin.site.register(Representante)

@admin.register(Estoque)
class EstoqueAdmin(admin.ModelAdmin):
  list_display = ('produto', 'quantidade', 'preco_venda')
  list_editable = ('quantidade', 'preco_venda')
  search_fields = ('produto', )
  ordering = ['produto']

@admin.register(Representante)
class RepresentanteAdmin(admin.ModelAdmin):
  list_display = ("nome", "cpf", )
  search_fields = ("nome", "cpf", )
  ordering = ["nome"]