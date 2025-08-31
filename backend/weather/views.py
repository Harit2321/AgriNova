import requests
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_weather(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            city = data.get('city')
        except:
            return JsonResponse({'error': 'Invalid data'}, status=400)
        
        if not city:
            return JsonResponse({'error': 'City required'}, status=400)
            
        api_key = '7c6f9435eddc2f9063fe9233bb6a273a'
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
        
        try:
            response = requests.get(url)
            weather_data = response.json()
            
            if response.status_code != 200:
                return JsonResponse({'error': 'City not found'}, status=404)
            
            return JsonResponse({
                'city': weather_data['name'],
                'temperature': weather_data['main']['temp'],
                'humidity': weather_data['main']['humidity'],
                'description': weather_data['weather'][0]['description'],
                'icon': weather_data['weather'][0]['icon'],
            })
        except:
            return JsonResponse({'error': 'Weather service error'}, status=500)
            
    return JsonResponse({'error': 'POST required'}, status=405)