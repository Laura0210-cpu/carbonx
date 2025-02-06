#carbonex_app/urls.py
from django.urls import path
from . import views
from .views import register_user, login_view, protected_view, get_projects, get_project_details

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_view, name = 'login'),
    path('protected/', views.protected_view, name = 'protected'),
    path('projets/', get_projects, name= 'get-projects'), 
    path('projects/<uuid:project_id>/', get_project_details, name='get-project-details'),
]
