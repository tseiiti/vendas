
### Versão Python 3.10.12

### Executar instalação das bibliotecas
pip install -r requirements.txt

### Executar migração
python manage.py migrate

### Criar usuário root
python manage.py createsuperuser

### Criar usuários representantes
python manage.py shell
  from django.contrib.auth.models import User
  User.objects.create_user(username='kamilly.martins', email='kamilly.martins@example.com', password='123', is_staff=True, first_name='Kamilly', last_name='Martins', )
  User.objects.create_user(username='isabelly.duarte', email='isabelly.duarte@example.com', password='123', is_staff=True, first_name='Isabelly', last_name='Duarte', )
  User.objects.create_user(username='luiz.paz', email='luiz.paz@example.com', password='123', is_staff=True, first_name='Luiz Otávio', last_name='da Paz', )
  User.objects.create_user(username='ana.vieira', email='ana.vieira@example.com', password='123', is_staff=True, first_name='Ana Lívia', last_name='Vieira', )
  User.objects.create_user(username='esther.ferreira', email='esther.ferreira@example.com', password='123', is_staff=True, first_name='Esther', last_name='Ferreira', )
  User.objects.create_user(username='catarina.pires', email='catarina.pires@example.com', password='123', is_staff=True, first_name='Catarina', last_name='Pires', )
  User.objects.create_user(username='breno.souza', email='breno.souza@example.com', password='123', is_staff=True, first_name='Breno', last_name='Souza', )
  User.objects.create_user(username='bruna.santos', email='bruna.santos@example.com', password='123', is_staff=True, first_name='Bruna', last_name='Santos', )
  User.objects.create_user(username='joao.ferreira', email='joao.ferreira@example.com', password='123', is_staff=True, first_name='João Vitor', last_name='Ferreira', )
  User.objects.create_user(username='guilherme.rodrigues', email='guilherme.rodrigues@example.com', password='123', is_staff=True, first_name='Guilherme', last_name='Rodrigues', )

### Executar cargas iniciais
carga_representantes.ipynb
carga_pedidos.ipynb
carga_apriori.ipynb

### Criar grupos Gerentes e Representantes
