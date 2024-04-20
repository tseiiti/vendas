from django.urls import path
from .views import index, create, detail, update

app_name = "venda"
urlpatterns = [
  path('index', index, name = 'index'),
  path('create', create, name = 'create'),
  path('<int:id>', detail, name = 'detail'),
  path('<int:id>/update', update, name = 'update'),
]
