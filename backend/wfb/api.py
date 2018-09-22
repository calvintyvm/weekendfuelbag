from rest_framework import generics
from .serializers import CategorySerializer, PlaceSerializer
from .models import CategoryModel, PlaceModel
import django_filters.rest_framework


class PlaceList(generics.ListCreateAPIView):
    """
    Access list of places
    """
    queryset = PlaceModel.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)


class PlaceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Access place's detail
    """
    queryset = PlaceModel.objects.all()
    serializer_class = PlaceSerializer


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

    def get_queryset(self):
        queryset = CategoryModel.objects.all()
        return queryset
