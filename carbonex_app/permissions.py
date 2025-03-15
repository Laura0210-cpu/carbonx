from rest_framework import permissions


class IsBuyer(permissions.BasePermission): 
    """
    Custom permission to grant access only to buyers -> we can then remove the is_authenticated
    """
    def has_permission(self, request, view): 
        return request.user.is_authenticated and request.user.role in ['buyer', 'both']
    
class IsSeller(permissions.BasePermission): 
    """"
    Customer permission to grant access only to sellers
    """

    def has_permission(self, request, view): 
        return request.user.is_authenticated and request.user.role in ['seller', 'both']
