from django.urls import path
from . import views

urlpatterns = [
    path('location/', views.crop_location, name='crop_location'),
    path('recommend/', views.crop_recommend, name='crop_recommend'),
]