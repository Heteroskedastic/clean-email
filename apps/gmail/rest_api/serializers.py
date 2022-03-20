import ast
import json

from django.contrib.auth.models import User
from rest_framework import serializers
from allauth.socialaccount.models import SocialToken, SocialApp, SocialAccount


class SocialAccountSerializers(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount
        fields = '__all__'



class UserSerializers(serializers.ModelSerializer):
    social = serializers.SerializerMethodField()

    def  get_social(self, value):
        try:
            response = SocialAccountSerializers(SocialAccount.objects.get(user=value)).data
            response['extra_data'] = ast.literal_eval(response['extra_data'])
            print(response)
            return response
        except Exception as e:
            print(str(e))
            return None

    class Meta:
        model = User
        fields = '__all__'