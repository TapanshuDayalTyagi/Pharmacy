import requests
from datetime import datetime, timedelta

BASE = 'http://127.0.0.1:8000'
try:
    r = requests.get(f'{BASE}/api/doctors/')
    print('GET /api/doctors/ ->', r.status_code)
    docs = r.json()
    if isinstance(docs, dict) and 'results' in docs:
        docs = docs['results']
    if not docs:
        print('No doctors returned from API; aborting test.')
        raise SystemExit(1)
    doctor = docs[0]
    print('Using doctor:', doctor)
    doctor_id = doctor.get('id')

    payload = {
        'patient_name': 'Automated Test Patient',
        'doctor': doctor_id,
        'appointment_medium': 'Online',
        'date_time': (datetime.utcnow() + timedelta(days=1)).isoformat(),
        'status': 'Booked'
    }
    resp = requests.post(f'{BASE}/api/appointments/', json=payload)
    print('POST /api/appointments/ ->', resp.status_code)
    print(resp.text)
except Exception as e:
    print('Test failed with exception:', e)
    raise
