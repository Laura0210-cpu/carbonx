# Generated by Django 5.1.4 on 2025-02-24 22:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("carbonex_app", "0004_alter_project_id"),
    ]

    operations = [
        migrations.CreateModel(
            name="Trade",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("registered_date", models.DateTimeField(auto_now_add=True)),
                ("trade_it", models.CharField(max_length=100, unique=True)),
                ("amount_CO2", models.DecimalField(decimal_places=2, max_digits=20)),
                ("amount_nego", models.DecimalField(decimal_places=2, max_digits=20)),
                (
                    "buyer",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="buy_trades",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "project",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="trades",
                        to="carbonex_app.project",
                    ),
                ),
                (
                    "seller",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="sell_trades",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
