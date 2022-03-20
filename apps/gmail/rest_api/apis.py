import logging

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from . import serializers
from allauth.socialaccount.models import SocialToken, SocialApp
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import base64



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


class GetProfile(APIView):
    """
    Message API's to get User profile
    """
    def get(self, request):
        service = get_gmail_service(SocialToken.objects.first())
        try:
            results = service.users().getProfile(userId='me').execute()
            print(results)
            return JsonResponse(results, safe=False)
        except HttpError as err:
            print('GMAIL ACCESS CHECK ERROR:', err)
        return HttpResponse('asd')

class FullMessage(APIView):
    def get(self, request):
        service = get_gmail_service(SocialToken.objects.first())
        try:
            results = service.users().messages().get(userId='me', id=request.GET.get('message_id')).execute()
            string_enc = results.get('payload').get('body').get('data')
            try:
                print('string_enc', string_enc)
                string = base64.urlsafe_b64decode(string_enc)
                return HttpResponse(string)
            except Exception as e:
                pass
        except Exception as e:
            return HttpResponse('heelow')
class Message(APIView):
    """
    Message API's to get all the messages
    """
    def get(self, request):
        service = get_gmail_service(SocialToken.objects.first())
        try:
            final_results = []
            list_of_mails = service.users().messages().list(userId='me').execute()
            messages = list_of_mails.get('messages', [])
            for message in messages:
                results = service.users().messages().get(userId='me', id=message['id']).execute()
                final_results.append(results)
            return JsonResponse(final_results, safe=False)
        except HttpError as err:
            print('GMAIL ACCESS CHECK ERROR:', err)
        return JsonResponse([])