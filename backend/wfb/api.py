from rest_framework import generics
from .serializers import CategorySerializer, PlaceSerializer
from .models import CategoryModel, PlaceModel
from django.db.models import Q


class PlaceList(generics.ListCreateAPIView):
    """
    Access list of places
    """
    queryset = PlaceModel.objects.all()
    serializer_class = PlaceSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = PlaceModel.objects.all()

        lat = self.request.query_params.get('lat', None)
        lon = self.request.query_params.get('lon', None)
        age = self.request.query_params.get('age', None)
        category = self.request.query_params.get('category', None)

        if lat is not None and lon is not None:
            nearby_places = PlaceModel.objects.get_nearby_places({
                "lat": lat,
                "lon": lon
            })
            nearby_places_pks = [place.pk for place in nearby_places]
            queryset = PlaceModel.objects.filter(pk__in=nearby_places_pks)

        if age is not None:
            queryset = queryset.filter(
                Q(min_age__lte=age) & Q(max_age__gte=age)
            )

        if category is not None:
            queryset = queryset.filter(category__label__icontains=category)

        return queryset


class PlaceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Access place's detail
    """
    queryset = PlaceModel.objects.all()
    serializer_class = PlaceSerializer
    lookup_field = 'id'


class CategoryList(generics.ListCreateAPIView):
    """
    Category to be assigned to help places

    get:
    Return a list of all the existing categories.
    """
    serializer_class = CategorySerializer

    def get_queryset(self):
        queryset = CategoryModel.objects.all()
        return queryset


class CategoryDetail(generics.RetrieveAPIView):
    """
    Category can be updated/deleted only by admin

    get:
    Return a requested category instance with the given label
    """
    serializer_class = CategorySerializer
    lookup_field = 'id'

    def get_queryset(self):
        queryset = CategoryModel.objects.all()
        return queryset
