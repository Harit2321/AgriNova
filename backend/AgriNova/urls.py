from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dashboard.urls')),
    path('crop/', include('crop.urls')),
    path('disease/', include('disease.urls')),
    path('weather/', include('weather.urls')),
    path('market/', include('market.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)