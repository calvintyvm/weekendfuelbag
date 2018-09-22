from django.conf.urls import url
from django.urls import path

from . import views
from .views import api_root
from . import api

urlpatterns = [

    path('', views.index, name='index'),

    # API root
    url(r'^api/$',
        api_root,
        name="api_root"),

    # Location
    url(r'^api/locations/$',
        api.HelpLocationList.as_view(),
        name="api_list_locations"),

    url(r'^api/locations/(?P<id>[0-9]+)/$',
        api.HelpLocationDetail.as_view(),
        name="api_location_detail"),

    # Category
    url(r'^api/categories/$',
        api.CategoryList.as_view(),
        name="api_list_categories"),

    url(r'^api/categories/(?P<id>[0-9]+)/$',
        api.CategoryDetail.as_view(),
        name="api_category_detail"),
]
