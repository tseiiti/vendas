from django.contrib import admin
from django.urls import path, include
from home.views import index

urlpatterns = [
  path('', index, name = 'index'),
  path('venda/', include('venda.urls')),
  path('admin/', admin.site.urls),
]
