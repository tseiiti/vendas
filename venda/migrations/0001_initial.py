# Generated by Django 3.1.12 on 2024-04-20 20:51

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
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('cnpj', models.CharField(max_length=20, verbose_name='CNPJ')),
                ('endereco', models.CharField(max_length=255)),
                ('bairro', models.CharField(max_length=255)),
                ('cidade', models.CharField(max_length=255)),
                ('estado', models.CharField(max_length=2)),
                ('cep', models.CharField(max_length=10)),
                ('contato', models.CharField(max_length=255)),
                ('telefone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=255, verbose_name='e-mail')),
            ],
        ),
        migrations.CreateModel(
            name='Representante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('cpf', models.CharField(max_length=14, verbose_name='CPF')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.RESTRICT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itens_pedido', djongo.models.fields.ArrayField(model_container=venda.models.ItemPedido)),
                ('horario', models.DateTimeField(verbose_name='horário')),
                ('total', models.FloatField()),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='venda.cliente')),
                ('representante', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='venda.representante')),
            ],
            options={
                'permissions': [('change_task_status', 'Can change the status of tasks'), ('close_task', 'Can remove a task by setting its status as closed')],
            },
        ),
        migrations.AddField(
            model_name='cliente',
            name='representante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='venda.representante'),
        ),
    ]
