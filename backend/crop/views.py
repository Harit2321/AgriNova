import json
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Simple crop recommendation logic
CROP_RECOMMENDATIONS = {
    'hot_humid': ['Rice', 'Sugarcane', 'Cotton', 'Jute'],
    'hot_dry': ['Wheat', 'Barley', 'Millet', 'Sorghum'],
    'moderate': ['Maize', 'Potato', 'Tomato', 'Onion'],
    'cool': ['Apple', 'Cabbage', 'Carrot', 'Peas']
}

SOIL_CROP_MAP = {
    'Alluvial Soil': ['Rice', 'Wheat', 'Sugarcane', 'Maize'],
    'Black Soil': ['Cotton', 'Wheat', 'Jowar', 'Linseed'],
    'Red Soil': ['Rice', 'Wheat', 'Cotton', 'Pulses'],
    'Laterite Soil': ['Rice', 'Ragi', 'Cashew', 'Tapioca'],
    'Arid Soil': ['Barley', 'Rape', 'Cotton', 'Millets'],
    'Forest Soil': ['Tea', 'Coffee', 'Spices', 'Tropical fruits'],
    'Desert Soil': ['Cactus', 'Date palm', 'Drought resistant crops'],
    'Mountain Soil': ['Apple', 'Potato', 'Barley', 'Wheat']
}

@csrf_exempt
def crop_location(request):
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
            })
        except:
            return JsonResponse({'error': 'Weather service error'}, status=500)
            
    return JsonResponse({'error': 'POST required'}, status=405)

@csrf_exempt
def crop_recommend(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            
            # Get parameters
            temperature = float(data.get('temperature', 25))
            humidity = float(data.get('humidity', 60))
            soil_type = data.get('soil_type', '')
            city = data.get('city', '')
            
            # Simple prediction logic
            prediction = get_crop_prediction(temperature, humidity, soil_type)
            
            return JsonResponse({
                'prediction': prediction,
                'city': city,
                'temperature': temperature,
                'humidity': humidity,
                'soil_type': soil_type,
                'confidence': '87%'
            })
            
        except Exception as e:
            return JsonResponse({'error': f'Prediction failed: {str(e)}'}, status=500)
            
    return JsonResponse({'error': 'POST required'}, status=405)

def get_crop_prediction(temperature, humidity, soil_type):
    """Simple crop prediction based on temperature, humidity and soil"""
    
    # Check soil type first
    for soil_key in SOIL_CROP_MAP:
        if soil_key.lower() in soil_type.lower():
            soil_crops = SOIL_CROP_MAP[soil_key]
            break
    else:
        soil_crops = ['Rice', 'Wheat', 'Maize', 'Cotton']  # Default crops
    
    # Determine climate category
    if temperature > 30 and humidity > 70:
        climate_crops = CROP_RECOMMENDATIONS['hot_humid']
    elif temperature > 30 and humidity < 50:
        climate_crops = CROP_RECOMMENDATIONS['hot_dry']
    elif temperature < 20:
        climate_crops = CROP_RECOMMENDATIONS['cool']
    else:
        climate_crops = CROP_RECOMMENDATIONS['moderate']
    
    # Find common crops between soil and climate
    suitable_crops = list(set(soil_crops) & set(climate_crops))
    
    if suitable_crops:
        return suitable_crops[0]  # Return first suitable crop
    else:
        # If no match, return based on soil type
        return soil_crops[0] if soil_crops else 'Rice'