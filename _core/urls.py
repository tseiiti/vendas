from django.contrib import admin
from django.urls import path, include
from venda.views import home

urlpatterns = [
  path("", home),
  path("estoque/", include("estoque.urls")),
  path("venda/", include("venda.urls")),
  path("admin/", admin.site.urls),
]
