from django.shortcuts import render
from rest_framework.views import APIView
from  django.http import JsonResponse
from .models import *
from .serializers import *
from django.contrib.auth.hashers import make_password
from rest_framework import status


# Create your views here.

class UserDetailsView(APIView):
    def get(self, request):
        users=UserDetails.objects.all()
        serializer=UserDetailsSerializer(users,many=True)
        return JsonResponse(serializer.data,safe=False)        
    
    def post(self, request):
        serializer=UserDetailsSerializer(data=request.data)
        if serializer.is_valid():
            validated_data=serializer.validated_data
            validated_data['password']=make_password(validated_data['password'])
            user=UserDetails.objects.create(**validated_data)
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class DonorDetailsView(APIView):
    def get(self, request):
        donors=DonorDetails.objects.all()
        serializer=DonorDetailsSerializer(donors,many=True)
        return JsonResponse(serializer.data,safe=False)
    
    def post(self, request):
        serializer=DonorDetailsSerializer(data=request.data)
        if serializer.is_valid():
            validated_data=serializer.validated_data
            validated_data['password']=make_password(validated_data['password'])
            donor=DonorDetails.objects.create(**validated_data)
            return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
