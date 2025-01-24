from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            # Attempt to fetch the user by email
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None

        # Validate the password
        if user.check_password(password):
            return user
        return None
