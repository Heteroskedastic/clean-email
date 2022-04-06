from django.urls import path

from . import  views
from .rest_api import apis

urlpatterns = [
    path('user/', apis.UserAPI.as_view()),  # User information
]