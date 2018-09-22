from rest_framework import generics
from .serializers import CategorySerializer, HelpLocationSerializer
from .models import CategoryModel, HelpLocationModel


class HelpLocationList(generics.ListCreateAPIView):
    """
    Access list of locations
    """
    queryset = HelpLocationModel.objects.all()
    serializer_class = HelpLocationSerializer


class HelpLocationDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Accesss location's detail
    """
    queryset = HelpLocationModel.objects.all()
    serializer_class = HelpLocationSerializer


class CategoryList(generics.ListAPIView):
    """
    Category to be assigned to help locations

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
