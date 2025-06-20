from django.shortcuts import render
from rest_framework.views import APIView
from  django.http import JsonResponse
from .models import *
from .serializers import *
from django.contrib.auth.hashers import make_password,check_password
from rest_framework import status


# Create your views here.

class UserDetailsView(APIView):
    def get(self, request,userId):
        users=list(UserDetails.objects.filter(userId=userId))
        serializer=UserDetailsSerializer(users,many=True)
        return JsonResponse(serializer.data,safe=False)        
    
    # def post(self, request):
    #     serializer=UserDetailsSerializer(data=request.data)
    #     if serializer.is_valid():
    #         validated_data=serializer.validated_data
    #         validated_data['password']=make_password(validated_data['password'])
    #         user=UserDetails.objects.create(**validated_data)
    #         return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
    #     return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class DonorDetailsView(APIView):
    def get(self, request):
        donors=UserDetails.objects.filter(role='donor')
        serializer=DonorDetailsSerializer(donors,many=True)
        return JsonResponse(serializer.data,safe=False)
    
    # def post(self, request):
    #     serializer=DonorDetailsSerializer(data=request.data)
    #     if serializer.is_valid():
    #         validated_data=serializer.validated_data
    #         validated_data['password']=make_password(validated_data['password'])
    #         donor=DonorDetails.objects.create(**validated_data)
    #         return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
    #     return JsonResponse(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserSignupAPIView(APIView):
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            validated_data=serializer.validated_data
            validated_data['password']=make_password(validated_data['password'])
            user=UserDetails.objects.create(**validated_data)
            # serializer.save()
            return JsonResponse({'message': 'User signed up successfully'}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                users = UserDetails.objects.filter(email=serializer.validated_data['email'])
                if not users.exists():
                    return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
                if users.count() > 1:
                    return JsonResponse({'error': 'Multiple users found with this email. Please contact support.'}, status=status.HTTP_400_BAD_REQUEST)
                user = users.first()
                if check_password(serializer.validated_data['password'], user.password):
                    return JsonResponse({'message': 'Login successful', 'userId': user.userId})
           
                else:
                    return JsonResponse({'error': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
