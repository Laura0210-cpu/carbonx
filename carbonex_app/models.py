from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
import uuid

class CustomUserManager(BaseUserManager):
    """
    Custom manager for CustomUser model to handle user and superuser creation without requiring a username.
    """

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Create and return a superuser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    """
    Custom user model using email as the unique identifier instead of a username.
    """
    email = models.EmailField(unique=True)
    username = None  # Remove username field

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # Remove 'username' from required fields

    objects = CustomUserManager()  # Use custom manager

    def __str__(self):
        return self.email

class Project(models.Model):
    STATUS_CHOICES = [
        ('planned', 'Planned'),
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('archived', 'Archived')
    ]
    id = models.UUIDField(primary_key= True, default = uuid.uuid4, editable= False)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="projects")
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='planned')
    estimated_annual_mitigations = models.PositiveIntegerField(help_text="Estimated CO₂ mitigations per year")
    project_type = models.CharField(max_length=100)
    sector = models.CharField(max_length=100)
    methodology = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    medias = models.URLField(blank=True, null=True, help_text="URL to project media files")
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    number_of_credits = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)  # Auto timestamp

    def __str__(self):
        return self.name
    
    ### Il me faut ici:  class Trade(models.Model), il faudrait comme fields; registered_date, trade_it, amount_CO2, amount_nego, 
    ###buyer, seller, project. 
