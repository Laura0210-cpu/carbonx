# Generated by Django 5.1.4 on 2025-03-08 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("carbonex_app", "0008_project_crediting_period_project_issued_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="role",
            field=models.CharField(
                choices=[("buyer", "Buyer"), ("seller", "Seller"), ("both", "Both")],
                default="buyer",
                max_length=10,
            ),
        ),
    ]
