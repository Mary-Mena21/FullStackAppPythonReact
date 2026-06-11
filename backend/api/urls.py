from django.contrib import admin
from django.urls import path
from rest_framework import routers
from api import views
# from .views import *

router = routers.DefaultRouter()
router.register('country', views.CountryViewSet, basename='country')
router.register('league', views.LeagueViewSet, basename='league')
router.register('characteristic', views.CharacteristicViewSet, basename='characteristic')
# router.register('footballclub', views.FootballclubViewSet, basename='footballclub')

urlpatterns = router.urls
