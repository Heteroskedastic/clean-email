import logging

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from allauth.socialaccount.models import SocialToken, SocialApp
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


def get_gmail_service(token: SocialToken):
    # SocialToken.token_secret is a refresh token in case of Google
    assert token.token, 'Can not use SocialToken without refresh token!'

    google_app = SocialApp.objects.filter(provider='google').first()
    assert google_app, 'Must create SocialApp for google provider first!'

    # this is simple example, but you need to use some credentials storage
    # instead of SocialToken or manage how to sync creads data to SocialToken
    credentials = Credentials(
         token=token.token,
         token_uri='https://oauth2.googleapis.com/token',
         client_id=google_app.client_id,
         client_secret=google_app.secret)
    return build('gmail', 'v1', credentials=credentials)


class UserAPI(APIView):
    """
    ResultView for getting results
    """
    # Query Param Schema Definition
    def get(self, request):
        return Response(serializers.UserSerializers(request.user).data)




class Message(APIView):
    """
    Message API's to get all the messages
    """
    def get(self, request):
        service = get_gmail_service(SocialToken.objects.first())
        try:
            final_results = []
            results = service.users().messages().list(userId='me').execute()
            labels = results.get('messages', [])
            if not labels:
                return
            for label in labels:
                print(label)
                results = service.users().messages().get(userId='me', id=label['id']).execute()
                final_results.append(results)
            return JsonResponse(final_results, safe=False)
        except HttpError as err:
            print('GMAIL ACCESS CHECK ERROR:', err)
        return HttpResponse('asd')