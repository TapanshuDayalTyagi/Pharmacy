from django.core.management.base import BaseCommand
from store.models import Product, Doctor

class Command(BaseCommand):
    help = 'Seed the database with sample products and doctors for development'

    def handle(self, *args, **options):
        # Create sample doctors
        sample_doctors = [
            {'name': 'Dr. Raja Krishnappa Beriya', 'specialization': 'Orthopedic'},
            {'name': 'Dr. Tapanshu', 'specialization': 'Orthopedic Surgeon'},
            {'name': 'Dr. Pragati Sharma', 'specialization': 'Cardiologist'},
            {'name': 'Dr. Avi Gupta', 'specialization': 'General Surgeon'},
            {'name': 'Dr. Uttam Kumar', 'specialization': 'Pediatrician'},
        ]

        for d in sample_doctors:
            doc, created = Doctor.objects.get_or_create(name=d['name'], defaults={'specialization': d['specialization']})
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created doctor: {doc.name}'))

        # Create sample products (small set)
        sample_products = [
            {'sku': 'seed001', 'name': 'Paracetamol 500mg', 'description': 'Pain & fever', 'price': 25.00, 'image': '/images/Paracetamol.png'},
            {'sku': 'seed002', 'name': 'Bandage Pack', 'description': 'Sterile bandages', 'price': 30.00, 'image': '/images/bandage.png'},
            {'sku': 'seed003', 'name': 'Digital Thermometer', 'description': 'Quick read thermometer', 'price': 180.00, 'image': '/images/Thermometer.png'},
            {'sku': 'seed004', 'name': 'Sanitizer 200ml', 'description': 'Hand sanitizer 70%', 'price': 60.00, 'image': '/images/Sanitizer.png'},
        ]

        for p in sample_products:
            prod, created = Product.objects.get_or_create(sku=p['sku'], defaults={'name': p['name'], 'description': p['description'], 'price': p['price'], 'image': p['image']})
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created product: {prod.name}'))

        self.stdout.write(self.style.SUCCESS('Seeding complete.'))
