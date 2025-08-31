from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.disease_predict, name='disease_predict'),
]