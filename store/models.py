from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Product(models.Model):
    sku = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=512, blank=True)
    prescription_required = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.sku})"

class Doctor(models.Model):
    name = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255, blank=True)
    photo = models.CharField(max_length=512, blank=True)

    def __str__(self):
        return f"{self.name} - {self.specialization}"

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    patient_name = models.CharField(max_length=255)
    doctor = models.ForeignKey(Doctor, on_delete=models.PROTECT)
    appointment_medium = models.CharField(max_length=50)
    date_time = models.DateTimeField()
    status = models.CharField(max_length=30, default='Booked')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment {self.id} - {self.patient_name} with {self.doctor.name}"

class Prescription(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    file_name = models.CharField(max_length=512, blank=True)
    file = models.FileField(upload_to='prescriptions/', null=True, blank=True)
    file_url = models.CharField(max_length=1024, blank=True)
    status = models.CharField(max_length=30, default='Pending')
    upload_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # Ensure file_name and file_url are set when file is uploaded
        if self.file and not self.file_name:
            self.file_name = getattr(self.file, 'name', '')
        if self.file and not self.file_url:
            # store relative URL, Django will serve via MEDIA
            self.file_url = self.file.url if hasattr(self.file, 'url') else f"/media/{getattr(self.file, 'name', '')}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.file_name or f"Prescription {self.pk}"

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=40, default='Pending')

    def __str__(self):
        return f"Order {self.id} - {self.status}"
