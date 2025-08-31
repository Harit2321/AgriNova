from django.http import JsonResponse

def home(request):
    return JsonResponse({'message': 'AgriNova API Home'})

def dashboard(request):
    return JsonResponse({'message': 'Dashboard'})

def about(request):
    return JsonResponse({'message': 'About'})

def contact(request):
    return JsonResponse({'message': 'Contact'})