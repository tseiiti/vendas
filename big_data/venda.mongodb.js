db.venda_representante.find()
db.venda_pedido.find()
db.venda_rastreio.find()

// db.venda_rastreio.deleteMany({})
// db.venda_rastreio.drop()

db.venda_representante.find().limit(1)
db.venda_pedido.find().limit(1)

db.venda_estoque.find().toArray()
db.venda_representante.find().toArray()
db.venda_pedido.find().toArray()
db.venda_apriori.find().toArray()

db.venda_pedido.find().count() // 4821

db.venda_apriori.find({item_a: /p01.*p02/i})
db.venda_apriori.find({item_a: /p01/i}).toArray()
db.venda_apriori.find({item_a: 
  {$in: 
    ['P15,P17,P18,P19', 'P15,P17,P18', 'P15,P17', 'P15', 'P17,P18,P19', 'P17,P18', 'P17', 'P15,P18,P19', 'P18,P19', 'P18', 'P15,P17,P19', 'P15,P19', 'P19', '']
  }
}).toArray()

db.__schema__.find()
db.auth_group.find()
db.auth_group_permissions.find()
db.auth_permission.find()
db.auth_user.find()
db.auth_user_groups.find()
db.auth_user_user_permissions.find()
db.django_admin_log.find()
db.django_content_type.find()
db.django_migrations.find()
db.django_session.find()

db.django_content_type.find().toArray()
db.getCollection('__schema__').find().toArray()
db.getCollection('__schema__').find({"name": "venda_pedido"})

db.venda_pedido.find().sort({id: -1})


db.venda_pedido.find({"representante_id": 3}).count()

db.venda_pedido.find({"representante_id": 11}).sort({id: -1})

db.venda_pedido.find().forEach(e => {
  print(e.itens_pedido)
})









// criando um representante para um usuário
db.auth_user.find({is_superuser: true})
db.venda_representante.insertOne({
  "id": 11,
  "nome": "Admin",
  "cpf": "123.456.789-00",
  "nivel": "confirmado",
  "user_id": 11,
  "clientes": [
    {
      'id': 1,
      'nome': 'RODRIGUES LTDA.',
      'cnpj': '32.684.509/0001-97',
      'contato': 'Vitor Hugo Pires',
      'telefone': '+55 04 9 5124 0736',
      'email': 'brenoramos@example.org',
      'endereco': {
        'logradouro': 'Esplanada Elisa Aragão, 4',
        'bairro': 'Grajaú',
        'cidade': 'Mendes',
        'estado': 'PB',
        'cep': '35799-956'
      }
    }, {
      'id': 2,
      'nome': 'ALVES E FILHOS',
      'cnpj': '68.234.079/0001-59',
      'contato': 'Laís Costa',
      'telefone': '+55 68 99047 4255',
      'email': 'yuri89@example.org',
      'endereco': {
        'logradouro': 'Morro Silveira, 2',
        'bairro': 'Vila Ipiranga',
        'cidade': 'Gonçalves de Ribeiro',
        'estado': 'SP',
        'cep': '68610004'
      }
    }, {
      'id': 3,
      'nome': 'SANTOS S.A.',
      'cnpj': '42.195.830/0001-61',
      'contato': 'Manuela Cardoso',
      'telefone': '+55 (99) 9 2211-7707',
      'email': 'caldeiramaite@example.net',
      'endereco': {
        'logradouro': 'Condomínio da Luz',
        'bairro': 'Vila Santa Monica 1ª Seção',
        'cidade': 'Souza de Goiás',
        'estado': 'AL',
        'cep': '05304907'
      }
    }
  ]
})

db.venda_representante.find({user_id: 11})

// alterando um representante - adicionando novos clientes
db.venda_representante.updateOne({user_id: 11}, {
  $push: {clientes: {$each: [
    {
      'id': 4,
      'nome': 'NOGUEIRA E FILHOS S/A',
      'cnpj': '75.341.890/0001-02',
      'contato': 'João Nogueira',
      'telefone': '+55 77 95359-3845',
      'email': 'fariaseduardo@example.net',
      'endereco': {
        'logradouro': 'Viela Barros, 71',
        'bairro': 'Ouro Minas',
        'cidade': 'Oliveira de Viana',
        'estado': 'RN',
        'cep': '09298-052'
      }
    }, {
      'id': 5,
      'nome': 'ALMEIDA S/A E FILHOS',
      'cnpj': '07.946.158/0001-06',
      'contato': 'Emanuel da Costa',
      'telefone': '+55 (069) 96744 7429',
      'email': 'pcardoso@example.org',
      'endereco': {
        'logradouro': 'Loteamento Moraes, 7',
        'bairro': 'São João Batista',
        'cidade': 'Aragão do Oeste',
        'estado': 'BA',
        'cep': '77368899'
      }
    }
  ]}}
})
