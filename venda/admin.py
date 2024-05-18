from django.contrib import admin
from .models import Estoque, Apriori, Representante

# admin.site.register(Pedido)

@admin.register(Estoque)
class EstoqueAdmin(admin.ModelAdmin):
  list_display = ("descricao", "quantidade", "preco_venda")
  list_filter = ("categoria", "marca", )
  list_editable = ("quantidade", "preco_venda")
  search_fields = ("descricao", )
  ordering = ["descricao"]

@admin.register(Apriori)
class AprioriAdmin(admin.ModelAdmin):
  list_display = ("__str__", "suporte", "confianca", "lift")
  search_fields = ("__str__", )
  ordering = ["-lift", "-suporte", "-confianca"]

@admin.register(Representante)
class RepresentanteAdmin(admin.ModelAdmin):
  list_display = ("nome", "cpf", "nivel", "login", )
  search_fields = ("nome", "login", )
  ordering = ["nome"]
