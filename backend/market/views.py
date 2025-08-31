import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .scraper import scrape_agmarknet, STATE_MAP, DISTRICT_MAP, COMMODITY_MAP, get_live_market_data
from datetime import datetime

@csrf_exempt
def market_prices(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            state = data.get('state')
            district = data.get('district') 
            commodity = data.get('commodity')
            
            if not all([state, district, commodity]):
                return JsonResponse({'error': 'All fields are required'}, status=400)
            
            # Get dynamic market prices
            prices = scrape_agmarknet(state, district, commodity)
            
            # Add live market trends
            live_data = get_live_market_data()
            
            response_data = {
                'prices': prices,
                'live_trends': live_data,
                'search_params': {
                    'state': state,
                    'district': district,
                    'commodity': commodity
                },
                'timestamp': datetime.now().isoformat(),
                'total_markets': len(prices)
            }
            
            return JsonResponse(response_data)
            
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
        except Exception as e:
            return JsonResponse({'error': f'Server error: {str(e)}'}, status=500)
    
    # GET request - return available options
    return JsonResponse({
        'states': list(STATE_MAP.keys()),
        'districts': list(DISTRICT_MAP.keys()),
        'commodities': list(COMMODITY_MAP.keys()),
        'message': 'Select state, district and commodity to get market prices',
        'last_updated': datetime.now().isoformat()
    })