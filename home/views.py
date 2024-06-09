from django.shortcuts import render
from django.contrib.auth.models import User

def index(request):
  users = User.objects.all().order_by("username")
  return render(request, "index.html", { "title": "Home", "users": users })
