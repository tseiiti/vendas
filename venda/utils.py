from datetime import datetime
from faker import Faker
fake = Faker('pt_BR')

class Paginator():
  def __init__(self, objects, size_page):
    self.objects = objects
    self.size_page = size_page
    self.length = objects.count()
    self.length = int(self.length / size_page) + (self.length % size_page > 0)

  def set_page(self, page):
    self.page = page
    if not self.page: self.page = "1"
    self.page = int(self.page)

  def pages(self):
    return {
      '1': 1 if self.page > 1 else None,
      '2': self.page - 3 if self.page - 3 > 0 else None,
      '3': self.page - 2 if self.page - 2 > 0 else None,
      '4': self.page - 1 if self.page - 1 > 0 else None,
      '5': self.page,
      '6': self.page + 1 if self.page + 1 <= self.length else None,
      '7': self.page + 2 if self.page + 2 <= self.length else None,
      '8': self.page + 3 if self.page + 3 <= self.length else None,
      '9': self.length if self.page < self.length else None,
    }
  
  def page_objects(self):
    return self.objects[(self.page - 1) * self.size_page:(self.page - 1) * self.size_page + self.size_page]
  
def get_etapas(pedido):
  return [{}, {
    "id": 1,
    "titulo": "Recebemos o seu pedido",
    "descricao": f"Pedido gerado por {pedido.representante.nome}.",
    "horario": pedido.horario,
    "icon": "fa-receipt"
  }, {
    "id": 2,
    "titulo": "Separando e embalando os produtos",
    "descricao": f"Olá, {fake.name()} está quase terminando de embalar.",
    "horario": datetime.now(),
    "icon": "fa-box-open"
  }, {
    "id": 3,
    "titulo": "Enviando para a transportadora",
    "descricao": f"O pedido está sendo encaminhado para \"{fake.company()}\" que irá realizar a entrega.",
    "horario": datetime.now(),
    "icon": "fa-truck-ramp-box"
  }, {
    "id": 4,
    "titulo": "Saindo para entrega",
    "descricao": f"Seu pedido já saiu e será entregue por {fake.name()}.",
    "horario": datetime.now(),
    "icon": "fa-truck-arrow-right"
  }, {
    "id": 5,
    "titulo": "Chegando no endereço de destino",
    "descricao": "Estou próximo ao destino e pedimos a presença do responsável para receber o pedido.",
    "horario": datetime.now(),
    "icon": "fa-truck-fast"
  }, {
    "id": 6,
    "titulo": "Pedido entregue!",
    "descricao": "Seu pedido foi entregue para",
    "horario": datetime.now(),
    "icon": "fa-list-check"
  }]