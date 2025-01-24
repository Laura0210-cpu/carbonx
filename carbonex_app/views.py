from django.contrib.auth import authenticate, get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
import json

CustomUser = get_user_model()

@csrf_exempt
def register_user(request):
    """Register a new user using their email as the username."""
    if request.method == 'OPTIONS':
        return JsonResponse({'message': 'Preflight check passed'}, status=200)
    
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Check if the email already exists
            if CustomUser.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already in use'}, status=400)

            # Create the user. We set 'username=email' since our USERNAME_FIELD = 'email'
            user = CustomUser.objects.create_user(
                username=email,  
                email=email,
                password=password
            )
            return JsonResponse({'message': 'User created successfully'}, status=201)
        except KeyError:
            return JsonResponse({'error': 'Invalid data'}, status=400)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        # Use Django's built-in authentication
        user = CustomUser.objects.get(email=email)
        user = authenticate(request, username=user.email, password=password)
  
    

    # Here 'username=email' works because our custom backend matches email to username.
    user = authenticate(request, email=email, password=password)
    
    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid email or password'},
                        status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    """
    A simple protected endpoint that requires a valid 'Authorization: Token <key>'
    header to access.
    """
    return Response({"message": "Welcome! You have access to the protected page."})
