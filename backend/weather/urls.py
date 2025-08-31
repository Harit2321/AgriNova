from django.urls import path
from . import views

urlpatterns = [
    path('weather-forecast/', views.get_weather, name='get_weather'),
]