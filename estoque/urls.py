from django.urls import path
from .views import consulta, saida

app_name = "estoque"
urlpatterns = [
  path('consulta', consulta, name = 'consulta'),
  path("saida", saida, name="saida"),
]
