from django.core.management.base import BaseCommand
from django.conf import settings
import os
import re
import json

from store.models import Product, Doctor


def _js_objects_from_array(text):
    # Find all {...} object blocks (simple approximation)
    objs = re.findall(r'\{[^}]*\}', text, flags=re.S)
    results = []
    for o in objs:
        s = o
        # Convert JS true/false to JSON true/false
        s = s.replace('true', 'true').replace('false', 'false')
        # Replace single quotes with double quotes
        s = s.replace("'", '"')
        # Quote unquoted keys: replace key: with "key":
        s = re.sub(r'([,{\s])(\w+)\s*:', r'\1"\2":', s)
        # Remove trailing commas before closing brace
        s = re.sub(r',\s*}', '}', s)
        try:
            parsed = json.loads(s)
            results.append(parsed)
        except Exception:
            # skip if parse failed
            continue
    return results


class Command(BaseCommand):
    help = 'Import products and doctors from static/script.js into the DB'

    def handle(self, *args, **options):
        js_path = os.path.join(settings.BASE_DIR, 'static', 'script.js')
        if not os.path.exists(js_path):
            self.stdout.write(self.style.ERROR(f'script.js not found at {js_path}'))
            return

        text = open(js_path, encoding='utf-8').read()

        # Extract products array
        prod_match = re.search(r'const\s+products\s*=\s*\[', text)
        prod_count = 0
        doc_count = 0
        if prod_match:
            start = prod_match.end()
            end = text.find('];', start)
            if end != -1:
                prod_block = text[start:end]
                prod_objs = _js_objects_from_array(prod_block)
                for p in prod_objs:
                    sku = p.get('id') or p.get('sku') or f"sku_{prod_count}"
                    name = p.get('name') or ''
                    desc = p.get('composition') or p.get('description') or ''
                    price = p.get('price') or 0
                    try:
                        price = float(price)
                    except Exception:
                        price = 0.0
                    image = p.get('imageUrl') or p.get('image') or ''
                    pres_req = bool(p.get('prescriptionRequired') or p.get('prescription_required'))
                    prod, created = Product.objects.update_or_create(
                        sku=str(sku),
                        defaults={
                            'name': name,
                            'description': desc,
                            'price': price,
                            'image': image,
                            'prescription_required': pres_req,
                        }
                    )
                    prod_count += 1

        # Extract doctors array
        doc_match = re.search(r'const\s+doctors\s*=\s*\[', text)
        if doc_match:
            start = doc_match.end()
            end = text.find('];', start)
            if end != -1:
                doc_block = text[start:end]
                doc_objs = _js_objects_from_array(doc_block)
                for d in doc_objs:
                    name = d.get('name') or ''
                    spec = d.get('specialization') or ''
                    photo = d.get('photo') or d.get('image') or ''
                    doc, created = Doctor.objects.get_or_create(
                        name=name,
                        defaults={'specialization': spec, 'photo': photo}
                    )
                    doc_count += 1

        self.stdout.write(self.style.SUCCESS(f'Imported/updated {prod_count} products and {doc_count} doctors'))
