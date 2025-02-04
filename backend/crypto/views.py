from django.shortcuts import render
import requests 
from rest_framework.response import Response #Convierte los datos en JSON para que el front los entienda
from rest_framework.decorators import api_view #Define la vista como API REST y permite hacer get, post, etc

@api_view(['GET'])
def get_crypto_prices(request):
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        "vs_currency": "usd", #Precios en dólares
        "order": "market_cap_desc", #Se ordena por capitalización de mercado
        "per_page": 10, #Número de criptos a obtener
        "page": 1, #Página de resultados
        "sparkline": "false" #Se pone en false porque no se necesitan gráficos en miniatura
    }
    
    response = requests.get(url, params=params) #Hace solicitud get y se guarda en response
    if response.status_code == 200:
        return Response(response.json()) #Si response bien, devuelve los datos en json
    else:
        return Response({"error": "No se pudieron obtener los datos"}, status=500) #Si hay un error, response con eror 500, es decir, error de servidor

