from django.contrib import admin
from .models import Project, CustomUser
from django.contrib.auth.admin import UserAdmin



admin.site.register(Project)  # Register the Project model

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    # Because you removed the username field, you need to adjust the field sets
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
        ),
    )
    list_display = ('email', 'is_staff', 'is_active')
    search_fields = ('email',)
    ordering = ('email',)