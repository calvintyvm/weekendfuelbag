from rest_framework import serializers
from .models import CategoryModel, HelpLocationModel


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    """
    Work with category detail
    """

    class Meta:
        model = CategoryModel
        fields = ("label",)


class HelpLocationSerializer(serializers.HyperlinkedModelSerializer):
    """
    Work with quick locaiton info
    """

    category = serializers.PrimaryKeyRelatedField(
        queryset=CategoryModel.objects.all(),
    )

    class Meta:
        model = HelpLocationModel
        fields = ("id", "name", "category",
                  "lat", "lon",
                  "created_at", "address",
                  "email", "description")
