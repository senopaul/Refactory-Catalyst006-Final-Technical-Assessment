from django.db import models

# Create your models here.
class Patient(models.Model):
    surname = models.CharField(max_length=30)
    given_name = models.CharField(max_length=30)
    date_of_birth = models.DateField()
    place_of_residence = models.CharField(max_length=30)
    occupation = models.CharField(max_length=30)
    nationality = models.CharField(max_length=30)
    GENDER_CHIOCES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender = models.CharField(max_length=6, choices=GENDER_CHIOCES)
    category = models.CharField(max_length=100)



