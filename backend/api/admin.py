from django.contrib import admin
from .models import *
# from .models import Country, League, Footballclub, Characteristic   

# Register your models here.
admin.site.register(Country)
admin.site.register(League)
admin.site.register(Footballclub)
admin.site.register(Characteristic)