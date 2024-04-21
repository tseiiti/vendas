from django.contrib import admin
from .models import Representante, Cliente, Produto

@admin.register(Representante)
class RepresentanteAdmin(admin.ModelAdmin):
  list_display = ("nome", "cpf", )
  search_fields = ("nome", "cpf", )
  ordering = ["nome"]

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
  list_display = ("nome", "cnpj", )
  search_fields = ("nome", "cnpj", )
  ordering = ["nome"]

  def save_model(self, request, obj, form, change):
    if not request.user.is_superuser and not request.user.has_perm('venda.can_get_all'):
      obj.representante = Representante.objects.filter(user = request.user).first()
    super().save_model(request, obj, form, change)

  def get_search_results(self, request, queryset, search_term):
    queryset, may_have_duplicates = super().get_search_results(
        request,
        queryset,
        search_term,
    )
    if not request.user.is_superuser and not request.user.has_perm('venda.can_get_all'):
      representante = Representante.objects.filter(user = request.user).first()
      queryset = self.model.objects.filter(representante = representante).order_by("nome")
    return queryset, may_have_duplicates

@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
  list_display = ("descricao", "preco_compra", "preco_venda", )
  list_editable = ("preco_venda", )
  list_filter = ("categoria", "marca", )
  search_fields = ("descricao", "categoria", "marca", )
  ordering = ["descricao"]
