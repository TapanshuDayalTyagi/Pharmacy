
# MedicoNexa Full Stack Setup

1. Create virtual environment:
   python -m venv env
   source env/bin/activate     # Windows: .\env\Scripts\activate

2. Install dependencies:
   pip install -r requirements.txt

3. Run Django setup:
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver

4. Open browser:
   http://127.0.0.1:8000

✔ Integrated: products, cart, appointments, prescriptions, lab tests, OTP, JWT
