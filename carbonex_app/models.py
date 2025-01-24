from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'  # Specify email for authentication
    REQUIRED_FIELDS = []  # Remove 'username' from required fields
