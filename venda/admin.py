from django.contrib import admin
from .models import Representante, Cliente

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
