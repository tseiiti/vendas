// Consultas e Extração de Dados

// amostras
db.venda_estoque.findOne()
db.venda_representante.findOne()
db.venda_pedido.findOne()
db.venda_rastreio.findOne()
db.venda_apriori.findOne()


// Quantidade total de pedidos
db.venda_pedido.find().count()

// Quantidade de pedidos por ano
db.venda_pedido.aggregate([
  {$group: {
    _id: {$year: "$horario"},
    quantidade: {$count: {}},
  }},
  {$sort: {"_id": -1}},
])

// Quantidade de produto pedidos ("vendido") agrupado por marca
db.venda_pedido.aggregate([
  {$unwind: "$itens_pedido"},
  {$group: {
    _id: "$itens_pedido.produto.marca",
    quantidade:  {$sum: "$itens_pedido.quantidade"},
  }},
])

// Faturamento agrupado por categoria por ano ordenado por ano decrescente e categoria crescente
db.venda_pedido.aggregate([
  {$unwind: "$itens_pedido"},
  {$group: {
    _id: {categoria: "$itens_pedido.produto.categoria", ano: {$year: "$horario"}},
    total: {$sum: "$itens_pedido.total"},
  }},
  {$sort: {"_id.ano": -1, "_id.categoria": 1}},
])

// Representantes que mais venderam
db.venda_pedido.aggregate([
  {$lookup: {
    from: "venda_representante",
    localField: "representante_id",
    foreignField: "id",
    as: "representante"}},
  {$group: {
    _id: "$representante.nome",
    quantidade: {$count: {}},
    total: {$sum: "$total"},
  }},
  {$sort: {"total": -1}},
])

// Qual(is) o(s) produto(s) recomendado(s) para o usuário que compra "Secador de Parede 2000W Profissional" e "Dispenser Automático"
// versão sem o nome dos produtos
let item_b = []
db.venda_apriori.find({item_a: /.*17.*23.*/i}).forEach(e => {
  e.item_b.split(',').forEach(b => {
    item_b.push(parseInt(b.substring(1, 3)))
  })
})
db.venda_estoque.find({id: {$in: item_b}})

// versão com o nome dos produtos
let item_a = '.*'
item_b = []
db.venda_estoque.find(
  {descricao: {$in: ["Secador de Parede 2000W Profissional", "Dispenser Automático"]}}
).forEach(e => {
  item_a += e.id.toString().padStart(2, '0') + '.*'
})
db.venda_apriori.find({item_a: {"$regex": item_a}}).forEach(e => {
  e.item_b.split(',').forEach(b => {
    item_b.push(parseInt(b.substring(1, 3)))
  })
})
db.venda_estoque.find({id: {$in: item_b}})

// média do tempo gasto com entrega
db.venda_rastreio.aggregate([
  {$project: {
    "pedido_id": 1,
    "etapa": {"$arrayElemAt": ["$etapas_rastreio", 2]},
    "inicio": {"$min": "$etapas_rastreio.horario"},
    "termino": {"$max": "$etapas_rastreio.horario"},
  }},
  {$project: {
    "pedido_id": 1,
    "transportadora": 
      {$replaceAll: {
        input: {$replaceAll: {
          input: "$etapa.descricao",
          find: "O pedido está sendo encaminhado à transportadora \"",
          replacement: ""}},
        find: "\" que irá realizar a entrega.",
        replacement: ""}},
    "tempo_gasto": {
      $dateDiff: {
        startDate: "$inicio",
        endDate: "$termino",
        unit: "hour"}},
  }},
  {$group: {
    _id: "$transportadora",
    quantidade: {$count: {}},
    media: {$avg: "$tempo_gasto"},
  }},
])





// Transformar um usuário em um representante
db.auth_user.find({is_superuser: true}).forEach(user => {
  let representante = db.venda_representante.findOne({id: user.id})
  print(user)
  print(representante)

  // criando um representante para o Admin
  if (!representante) {
    db.venda_representante.insertOne({
      "id": user.id,
      "nome": "Admin",
      "cpf": "123.456.789-00",
      "nivel": "confirmado",
      "user_id": user.id,
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
  }

  // alterando um representante - adicionando novos clientes
  let cli_len = representante.clientes.length
  if (cli_len < 5) {
    db.venda_representante.updateOne({user_id: user.id}, {
      $push: {clientes: {$each: [
        {
          'id': cli_len + 1,
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
          'id': cli_len + 2,
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
  }
})
