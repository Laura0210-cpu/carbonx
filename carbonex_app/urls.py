#carbonex_app/urls.py
from django.urls import path
from . import views
from .views import register_user, login_view, protected_view

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_view, name = 'login'),
    path('protected/', views.protected_view, name = 'protected'),
]