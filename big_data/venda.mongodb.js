db.venda_estoque.find()
db.venda_representante.find()
db.venda_pedido.find()
db.venda_pedido.find().count() // 4821
db.venda_apriori.find()

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
db.venda_pedido.find({"representante_id": 3}).sort({id: -1})
