"""clean URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from allauth.account.views import LogoutView
from django.contrib import admin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.documentation import include_docs_urls
from rest_framework.permissions import AllowAny
from rest_framework.schemas import get_schema_view


class LandingView(LoginRequiredMixin, TemplateView):
    login_url = '/accounts/google/login'
    template_name = "index.html"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', LandingView.as_view()),
    path('accounts/', include('allauth.urls')),
    path('', include('apps.emailcleaner.urls')),
    path('api/gmail/', include('apps.gmail.urls')),
    path('logout', LogoutView.as_view()),
    path('schema', get_schema_view(
        title="Clean Api",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
    path('api/docs', include_docs_urls(title='Clean Api', permission_classes=[AllowAny], )),
]
