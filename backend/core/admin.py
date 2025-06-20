from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(UserDetails)
admin.site.register(BloodInventory)
admin.site.register(BloodRequest)
admin.site.register(TransfusionRecord)
admin.site.register(DonationCamp)