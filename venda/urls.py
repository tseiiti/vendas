from django.urls import path
from .views import list, create, detail, update, send, confirm, preco_venda

app_name = "venda"
urlpatterns = [
  path('list', list, name = 'list'),
  path('create', create, name = 'create'),
  path('<int:id>', detail, name = 'detail'),
  path('<int:id>/update', update, name = 'update'),
  path('<int:id>/send', send, name = 'send'),
  path('<int:id>/confirm', confirm, name = 'confirm'),
  path('preco_venda', preco_venda, name = 'preco_venda'),
]
