from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from pathlib import Path

urlpatterns = [
    path('admin/', admin.site.urls),
    # Serve the frontend index at the root URL. Templates are served from templates/index.html
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('api/', include('store.urls')),
    path('api/auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # Serve the top-level images directory at /images/ during development
    IMAGES_DIR = Path(__file__).resolve().parent.parent / 'images'
    urlpatterns += static('/images/', document_root=str(IMAGES_DIR))
