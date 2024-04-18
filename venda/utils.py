from django.forms.models import model_to_dict

def to_d(obj):
  # {field.name: getattr(my_object, field.name) for field in my_object._meta.fields}
  return model_to_dict(obj, fields = [field.name for field in obj._meta.fields])