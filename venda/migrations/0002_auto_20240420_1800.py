# Generated by Django 3.1.12 on 2024-04-20 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('venda', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pedido',
            options={'permissions': [('can_list', 'Pode listar os pedidos'), ('can_create', 'Pode criar um novo pedido'), ('can_update', 'Pode atualizar um pedido existente'), ('can_detail', 'Pode visualizar os detalhes de um pedido')]},
        ),
    ]
