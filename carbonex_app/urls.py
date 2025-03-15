#carbonex_app/urls.py
from django.urls import path
from . import views
from .views import register_user, login_view, get_my_projects, get_projects, get_project_details, record_trade, get_user

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_view, name = 'login'),
    path('protected/', views.protected_view, name = 'protected'),
    path('projets/', get_projects, name= 'get-projects'), 
    path('projects/<uuid:project_id>/', get_project_details, name='get-project-details'),
    path('projects/<uuid:project_id>/record_trade/', record_trade,name = 'record_trade' ), 
    path('user/', get_user, name='get_user'),
    path('my-projects/', get_my_projects, name = 'get_my_projects'), 
]
