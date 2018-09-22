from rest_framework import serializers
from .models import CategoryModel, PlaceModel


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    """
    Work with category detail
    """

    class Meta:
        model = CategoryModel
        fields = ("label",)


class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    """
    Work with quick place's info
    """

    category = serializers.PrimaryKeyRelatedField(
        queryset=CategoryModel.objects.all(),
    )

    class Meta:
        model = PlaceModel
        fields = ("id", "name", "category",
                  "lat", "lon",
                  "created_at", "address",
                  "email", "description",
                  "min_age", "max_age")

    def validate(self, attrs):

        if attrs['min_age'] > attrs['max_age']:
            raise serializers.ValidationError('min_age should be < max_age')

        return attrs
