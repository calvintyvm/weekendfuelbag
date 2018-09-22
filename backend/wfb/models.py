from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.dispatch import receiver
from django.core.validators import MinValueValidator
from django.core.exceptions import ObjectDoesNotExist

from rest_framework.authtoken.models import Token

import shutil
import os
import logging
from model_utils.managers import InheritanceManager
from model_utils import Choices


# ---------------------------------------------------------------------------
# VALIDATORS
# ---------------------------------------------------------------------------

def validate_email(email):
    """

    Args:
        email(str):

    Returns:
        None

    Raises:
        ValidationError: if the email fails some validations process

    """

    if email == "":
        raise ValidationError(
            _("%(email)s cannot be empty"),
            params={"email": email},
        )


# ---------------------------------------------------------------------------
# Category
# ---------------------------------------------------------------------------


class CategoryModel(models.Model):
    """
    Category to be assigned to each help location
    """

    label = models.CharField(
        primary_key=True,
        verbose_name=_("Label of the category"),
        help_text=_("label to be assigned to each help location"),
        null=False,
        blank=False,
        max_length=300
    )

    def __str__(self):
        return self.label


# ---------------------------------------------------------------------------
# HelpLocation
# ---------------------------------------------------------------------------


class HelpLocationModel(models.Model):
    """
    Location that a student can get helps
    """

    name = models.CharField(
        verbose_name=_("Name of the help location"),
        help_text=_("Name of the help location"),
        null=False,
        blank=False,
        max_length=200
    )

    category = models.ForeignKey(
        CategoryModel,
        null=False,
        blank=False,
        related_name="locations",
        on_delete=models.PROTECT  # its category need to be re-assigned
    )

    lat = models.DecimalField(
        verbose_name=_("latitude"),
        null=False,
        blank=False,
        decimal_places=6,
        max_digits=9
    )

    lon = models.DecimalField(
        verbose_name=_("longtitude"),
        null=False,
        blank=False,
        decimal_places=6,
        max_digits=9
    )

    created_at = models.DateTimeField(auto_now_add=True)

    address = models.TextField(
        help_text=_("Address of this help location"),
        null=True,
        blank=True
    )

    email = models.EmailField(
        verbose_name=_('email address'),
        blank=False,
        null=False,
        unique=True,
        validators=[validate_email]
    )

    description = models.TextField(
        verbose_name=_("Description of this help location"),
        help_text=_("more detail of this help location"),
        blank=True  # this is not required
    )

    def __str__(self):
        return self.name
