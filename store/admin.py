from django.contrib import admin
from .models import Product, Doctor, Appointment, Prescription, Order

admin.site.register(Product)
admin.site.register(Doctor)
admin.site.register(Appointment)
admin.site.register(Prescription)
admin.site.register(Order)
