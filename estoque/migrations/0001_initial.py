# Generated by Django 3.1.12 on 2024-04-23 14:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=255, verbose_name='título')),
            ],
        ),
        migrations.CreateModel(
            name='Marca',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=255, verbose_name='descrição')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='estoque.categoria')),
                ('marca', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='estoque.marca')),
            ],
        ),
        migrations.CreateModel(
            name='Estoque',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantidade', models.IntegerField()),
                ('preco_compra', models.FloatField(verbose_name='preço de compra R$')),
                ('produto', models.OneToOneField(on_delete=django.db.models.deletion.RESTRICT, to='estoque.produto')),
            ],
        ),
    ]
