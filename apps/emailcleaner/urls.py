from django.urls import path

from . import  views
from .rest_api import apis

urlpatterns = [
    path('checkemail/', views.getfunction),
    path('UserAPI/', apis.UserAPI.as_view()),
    path('LablesAPI/', apis.Lables.as_view()),
    # path('MessageAPI/', apis.Message.as_view()),
]