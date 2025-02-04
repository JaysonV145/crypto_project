from django.urls import path
from .views import get_crypto_prices #Se importas función desde views.py

urlpatterns = [
    path('prices/', get_crypto_prices, name="get_crypto_prices"), #Se define la ruta api/prices/, que se llamará a la función cuando se acceda a la URL
    
]

