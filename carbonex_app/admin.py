from django.contrib import admin
from .models import Project, CustomUser
from django.contrib.auth.admin import UserAdmin



admin.site.register(Project)  # Register the Project model

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Blockchain Info', {
            'fields': ('wallet_address',)
        }),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions', 'role')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'wallet_address')}
        ),
    )
    list_display = ('email','wallet_address', 'is_staff', 'is_active', 'role')
    search_fields = ('email','wallet_address')
    ordering = ('email',)