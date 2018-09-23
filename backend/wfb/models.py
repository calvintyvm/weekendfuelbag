from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _

from rest_framework.authtoken.models import Token

from geopy.distance import geodesic


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

class PlaceManager(models.Manager):

    def get_nearby_places(self, place):
        """

        :param place:
        :return: list
        """

        ret = []

        lat = place['lat']
        lon = place['lon']
        point = (lat, lon)

        for current_place in self.all():

            # identify current point
            target_lat = current_place.lat
            target_lon = current_place.lon
            current_point = (target_lat, target_lon)

            distance = geodesic(point, current_point).km

            # if the distance between the student location and the current help place is < 20
            if distance < 20:
                ret.append(current_place)
            else:
                print(f'distance: {distance}')

        return ret


class PlaceModel(models.Model):
    """
    Location that a student can get helps
    """

    objects = PlaceManager()

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
        default=12
    )

    max_age = models.IntegerField(
        verbose_name=_("Max age to access this location"),
        null=False,
        blank=False,
        default=18
    )

    website = models.CharField(
        blank=True,  # not required
        max_length=100,
        default=""
    )

    phone = models.CharField(
        blank=True,  # not required
        max_length=20,
        default=""
    )

    image_url = models.CharField(
        blank=True,
        max_length=200,
        default=""
    )

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('created_at',)
