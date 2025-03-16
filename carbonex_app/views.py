import os
import json
from django.contrib.auth import authenticate, get_user_model
from .models import Project, Trade
from .serializers import ProjectSerializer
from .permissions import IsBuyer, IsSeller
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
import json

from web3 import Web3
from django.conf import settings


CustomUser = get_user_model()

@csrf_exempt
def register_user(request):
    """Register a new user using their email as the username."""
    if request.method == 'OPTIONS':
        return JsonResponse({'message': 'Preflight check passed'}, status=200)
    
    if request.method == 'POST':
        try:
           
            email =request.data.get('email')
            password = request.data.get('password')

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
    print("DEBUG: request.data =", request.data)
    try:
        #data = json.loads(request.body)
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=email, password=password)  # ✅ Only authenticate once!

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)

            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

    except json.JSONDecodeError:
        return Response({'error': 'Invalid request body'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user(request):
    return JsonResponse({
        "email": request.user.email,
        "role": request.user.role  # Make sure your `CustomUser` model has a `role` field
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    """
    A simple protected endpoint that requires a valid 'Authorization: Token <key>'
    header to access.
    """
    return Response({"message": "Welcome! You have access to the protected page."})


@api_view(['GET'])
@permission_classes([IsAuthenticated, IsBuyer])
def get_projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_project_details(request, project_id):
    """
    API View to return details of a single project by UUID.
    """
    project = get_object_or_404(Project, id=project_id)  # Fetch the project by UUID
    serializer = ProjectSerializer(project)
    return Response(serializer.data)

import os
import json
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from web3 import Web3
from django.conf import settings
from django.contrib.auth import get_user_model

from .models import Project, Trade

@api_view(['POST'])
@permission_classes([AllowAny])  # Adjust as needed (you might later require authentication)
def record_trade(request, project_id):
    """
    Receives a transaction hash (from MetaMask) from the React frontend,
    verifies the transaction on-chain, parses the Transfer event, 
    and updates the DB (creates a Trade record).
    """
    print("DEBUG request.data:", request.data)
    tx_hash = request.data.get('tx_hash')
    if not tx_hash:
        return Response({"error": "No transaction hash provided."}, status=400)

    # 1. Connect to your Ethereum provider.
    # Make sure that WEB3_PROVIDER_URL (e.g. an Infura endpoint or your local node)
    # matches the network your MetaMask is connected to.
    w3 = Web3(Web3.HTTPProvider(settings.WEB3_PROVIDER_URL))
    
    # 2. Load your contract ABI.
    # Build an absolute path using BASE_DIR so that Django can locate the file.
    abi_path = os.path.join(settings.BASE_DIR, 'carbonex_app', 'abi', 'CarbonCreditABI.json')
    with open(abi_path, 'r') as f:
        artifact = json.load(f)
    abi = artifact["abi"]

    # 3. Instantiate your deployed contract using the ABI and address from settings.
    contract_address = settings.CARBON_CREDIT_CONTRACT_ADDRESS
    contract = w3.eth.contract(address=contract_address, abi=abi)

    # 4. Fetch the transaction receipt from the blockchain.
    try:
        receipt = w3.eth.get_transaction_receipt(tx_hash)
    except Exception as e:
        return Response({"error": f"Could not fetch transaction receipt: {str(e)}"}, status=400)

    if receipt is None:
        return Response({"error": "Transaction not found or not yet mined."}, status=400)

    # 5. Check if the transaction succeeded on-chain.
    if receipt.status == 1:
        # Parse the Transfer events from the receipt.
        transfer_logs = contract.events.Transfer().process_receipt(receipt)
        if not transfer_logs:
            return Response({"error": "No Transfer event found in the transaction."}, status=400)
        
        # Assume the first Transfer event corresponds to this trade.
        transfer_event = transfer_logs[0]
        seller_address = transfer_event["args"]["from"]
        buyer_address = transfer_event["args"]["to"]
        amount_CO2 = transfer_event["args"]["value"]  # usually an integer (or a BigNumber)
        amount_nego = amount_CO2  # For now, we assume they are equal.

        # Look up users by their wallet addresses.
        # (This requires that your CustomUser model includes a 'wallet_address' field.)
        User = get_user_model()
        try:
            buyer = User.objects.get(wallet_address__iexact=buyer_address)
        except User.DoesNotExist:
            buyer = None  # You might decide to handle this case differently.
        try:
            seller = User.objects.get(wallet_address__iexact=seller_address)
        except User.DoesNotExist:
            seller = None

        # Get the project instance and update its trades count if desired.
        project = get_object_or_404(Project, pk=project_id)
        # (Optional) If you have a trades_count field on Project, update it:
        project.trades_count += 1
        project.save()

        # 6. Create the Trade record in the database.
        Trade.objects.create(
            trade_it=tx_hash,       # Using the transaction hash as a unique trade identifier.
            amount_CO2=amount_CO2,
            amount_nego=amount_nego,
            buyer=buyer,
            seller=seller,
            project=project
        )

        return Response({
            "status": "Trade recorded",
            "tx_hash": tx_hash,
            "project_id": project_id,
            "buyer": buyer_address,
            "seller": seller_address,
            "amount_CO2": str(amount_CO2)
        }, status=200)
    else:
        return Response({"error": "Transaction failed on-chain."}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsSeller])
def get_my_projects(request): 
    """
    Get only the projectswhere the logged in user is the owner
    """
    user  = request.user
    my_projects = Project.objects.filter(owner=user)
    serializer = ProjectSerializer(my_projects, many=True)  
    return Response(serializer.data, status=status.HTTP_200_OK)
