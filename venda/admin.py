from django.contrib import admin
from .models import Estoque, Apriori

# admin.site.register(Representante)

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
