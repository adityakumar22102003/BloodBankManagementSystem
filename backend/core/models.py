from django.db import models

# Create your models here.
role_choices=(('admin','admin'),('donor','donor'),('receiver','receiver'))
blood_group_choices=(('A+','A+'),('A-','A-'),('B+','B+'),('B-','B-'),('AB+','AB+'),('AB-','AB-'),('O+','O+'),('O-','O-'))
status_choices=(('pending','pending'),('approved','approved'),('rejected','rejected'),('completed','completed'))
gender_choices = (('Male','Male'),('Female','Female'),('Other','Other'))





class UserDetails(models.Model):
    userId = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=25)
    pincode = models.CharField(max_length=6)
    blood_group = models.CharField(choices=blood_group_choices,max_length=5)
    gender = models.CharField(max_length=10,choices=gender_choices)
    age = models.IntegerField()
    height = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    role=models.CharField(choices=role_choices,max_length=255)
    
class DonorDetails(models.Model):
    donerId=models.AutoField(primary_key=True)
    userId=models.ForeignKey(UserDetails,on_delete=models.CASCADE)
    last_donation_date=models.DateField(null=True,blank=True)
    eligibility=models.BooleanField(default=True)
    
class BloodInventory(models.Model):
    bloodId=models.AutoField(primary_key=True)
    blood_group=models.CharField(choices=blood_group_choices,max_length=255)
    quantity=models.IntegerField()
    updated_on=models.DateField(auto_now=True)
    expired_on=models.DateField(null=True,blank=True)
    is_available=models.BooleanField(default=True)
    is_expired=models.BooleanField(default=False)

    
class BloodRequest(models.Model):
    requestId=models.AutoField(primary_key=True)
    requester=models.ForeignKey(UserDetails,on_delete=models.CASCADE)
    blood_group=models.CharField(choices=blood_group_choices,max_length=255)
    quantity=models.IntegerField()
    request_date=models.DateTimeField(auto_now_add=True)
    status=models.CharField(choices=status_choices,max_length=25,default='pending')
    patient_name=models.CharField(max_length=255)
    hospital_name=models.CharField(max_length=255)
    hospital_address=models.CharField(max_length=255)
    hospital_city=models.CharField(max_length=255)
    hospital_state=models.CharField(max_length=255)
    hospital_pincode=models.CharField(max_length=255)
    hospital_phone=models.CharField(max_length=255)
    hospital_email=models.EmailField(max_length=255)
    
class TransfusionRecord(models.Model):
    recordId=models.AutoField(primary_key=True)
    donor=models.ForeignKey(DonorDetails,on_delete=models.CASCADE)
    receiver=models.ForeignKey(UserDetails,on_delete=models.CASCADE)
    blood_group=models.CharField(choices=blood_group_choices,max_length=255)
    quantity=models.IntegerField()
    transfusion_date=models.DateTimeField(auto_now_add=True)
    remarks=models.TextField(max_length=255)
    
class DonationCamp(models.Model):
    campId=models.AutoField(primary_key=True)
    camp_title=models.CharField(max_length=255)
    camp_date=models.DateTimeField()
    camp_location=models.CharField(max_length=255)
    camp_city=models.CharField(max_length=255)
    camp_state=models.CharField(max_length=255)
    camp_pincode=models.CharField(max_length=255)
    camp_organizer=models.CharField(max_length=255)
    camp_organizer_phone=models.CharField(max_length=10)
    camp_organizer_email=models.EmailField(max_length=255)
    camp_organizer_address=models.CharField(max_length=255)
    camp_organizer_city=models.CharField(max_length=255)
    camp_organizer_state=models.CharField(max_length=255)
    camp_organizer_pincode=models.CharField(max_length=6)

    

    
    

