from rest_framework import serializers
from .models import *

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = '__all__'

class DonorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonorDetails
        fields = '__all__'  

class BloodInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodInventory
        fields = '__all__'

class BloodRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodRequest
        fields = '__all__'

class TransfusionRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransfusionRecord
        fields = '__all__'



