from django.urls import path
from . import views



urlpatterns=[
    path('user-details/', views.UserDetailsView.as_view(), name='user-details'),
    path('donor-details/', views.DonorDetailsView.as_view(), name='donor-details'),
    path('signup/', views.UserSignupAPIView.as_view(), name='signup'),
    path('login/', views.UserLoginAPIView.as_view(), name='login'),
    # path('blood-inventory/', views.BloodInventoryView.as_view(), name='blood-inventory'),
    # path('blood-request/', views.BloodRequestView.as_view(), name='blood-request'),
    # path('transfusion-record/', views.TransfusionRecordView.as_view(), name='transfusion-record'),
    # path('blood-bank/', views.BloodBankView.as_view(), name='blood-bank'),
]