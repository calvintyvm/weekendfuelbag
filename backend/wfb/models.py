from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _

from rest_framework.authtoken.models import Token


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


class PlaceModel(models.Model):
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
        related_name="places",
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

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    address = models.TextField(
        help_text=_("Address of this help location"),
        blank=True
    )

    email = models.EmailField(
        verbose_name=_('email address'),
        blank=True,  # not required
        default="",
    )

    description = models.TextField(
        verbose_name=_("Description of this help location"),
        help_text=_("more detail of this help location"),
        blank=True  # this is not required
    )

    min_age = models.IntegerField(
        verbose_name=_("Min age to access this location"),
        null=False,
        blank=False,
    )

    max_age = models.IntegerField(
        verbose_name=_("Max age to access this location"),
        null=False,
        blank=False,
    )

    website = models.CharField(
        blank=True,  # not required
        max_length=100,
        default=""
    )

    def __str__(self):
        return self.name
