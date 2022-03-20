from django.urls import path

from .rest_api import apis

urlpatterns = [
    path('getProfile/', apis.GetProfile.as_view()),
    path('message/', apis.Message.as_view()),
    path('fullMessage/', apis.FullMessage.as_view())
]