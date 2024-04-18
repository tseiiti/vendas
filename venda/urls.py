from django.urls import path
from .views import index, create, result, update

app_name = "venda"
urlpatterns = [
  path('index', index, name = 'index'),
  path('create', create, name = 'create'),
  path('<int:id>', result, name = 'result'),
  path('<int:id>/update', update, name = 'update'),
]
