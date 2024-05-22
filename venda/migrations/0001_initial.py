# Generated by Django 3.1.12 on 2024-05-22 10:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields
import venda.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Apriori',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_a', models.CharField(max_length=255)),
                ('item_b', models.CharField(max_length=255)),
                ('suporte', models.FloatField()),
                ('confianca', models.FloatField()),
                ('lift', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Estoque',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marca', models.CharField(max_length=255)),
                ('categoria', models.CharField(max_length=255, verbose_name='título')),
                ('descricao', models.CharField(max_length=255, verbose_name='descrição')),
                ('quantidade', models.IntegerField()),
                ('preco_compra', models.FloatField(verbose_name='preço de compra R$')),
                ('preco_venda', models.FloatField(verbose_name='preço de venda R$')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('etapa', models.CharField(choices=[('criado', 'Criado'), ('enviado', 'Enviado'), ('confirmado', 'Confirmado'), ('faturado', 'Faturado'), ('cancelado', 'Cancelado'), ('rejeitado', 'Rejeitado')], default='criado', max_length=20)),
                ('etapas_pedido', djongo.models.fields.ArrayField(model_container=venda.models.EtapaPedido)),
                ('cliente', djongo.models.fields.EmbeddedField(model_container=venda.models.Cliente)),
                ('horario', models.DateTimeField(verbose_name='horário')),
                ('itens_pedido', djongo.models.fields.ArrayField(model_container=venda.models.ItemPedido)),
                ('total', models.FloatField()),
            ],
            options={
                'permissions': [('can_list', 'Pode listar os pedidos'), ('can_create', 'Pode criar um novo pedido'), ('can_update', 'Pode atualizar um pedido existente'), ('can_detail', 'Pode visualizar os detalhes de um pedido'), ('can_send', 'Pode enviar o pedido'), ('can_confirm', 'Pode confirmar o envio de um pedido')],
            },
        ),
        migrations.CreateModel(
            name='Representante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clientes', djongo.models.fields.ArrayField(model_container=venda.models.Cliente)),
                ('nome', models.CharField(max_length=255)),
                ('cpf', models.CharField(max_length=14, verbose_name='CPF')),
                ('nivel', models.CharField(choices=[('enviado', 'Enviado'), ('junior', 'Junior'), ('pleno', 'Pleno'), ('senior', 'Senior'), ('confirmado', 'Confirmado')], max_length=20)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.RESTRICT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Rastreio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('previsao', models.DateTimeField(verbose_name='previsão da entrega')),
                ('etapa_atual', models.CharField(default='Separando os Produtos', max_length=255)),
                ('etapas_rastreio', djongo.models.fields.ArrayField(model_container=venda.models.EtapaRastreio)),
                ('pedido', models.OneToOneField(on_delete=django.db.models.deletion.RESTRICT, to='venda.pedido')),
            ],
            options={
                'permissions': [('can_track', 'Pode rastrear um pedido'), ('can_add_track', 'Pode atualizar status do rastreamento')],
            },
        ),
        migrations.AddField(
            model_name='pedido',
            name='representante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='venda.representante'),
        ),
    ]
