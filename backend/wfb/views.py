from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import AllowAny
from django.http import HttpResponse

import os
import json


# Create your views here.


@api_view(['GET'])
@permission_classes((AllowAny,))  # todo: admin only in production
def api_root(request, format=None):
    return Response({
        # 'locations': reverse('api_list_locations', request=request, format=format),
        'categories': reverse('api_list_categories', request=request, format=format),
    })


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
