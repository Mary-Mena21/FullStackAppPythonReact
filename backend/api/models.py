from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class League(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Characteristic(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
class Footballclub(models.Model):
    name = models.CharField(unique=True,max_length=100)
    description = models.CharField(max_length=1000)
    image = models.CharField(max_length=1000)
    attendance = models.IntegerField(null=True, blank=True)
    city = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    league = models.ForeignKey(League, on_delete=models.CASCADE)
    characteristics = models.ManyToManyField(Characteristic)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name