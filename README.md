MedicoNexa (minimal)

This workspace contains a front-end (static HTML/CSS/JS in `templates/` and `static/`) and a minimal Django backend skeleton in `mediconexa/` and `store/`.

Quick start (PowerShell):

```powershell
# activate your venv
.\env\Scripts\Activate.ps1

# install requirements
pip install -r requirements.txt

# create migrations and migrate
python manage.py makemigrations
python manage.py migrate

# create a superuser
python manage.py createsuperuser

# run the dev server
python manage.py runserver
```

Notes:
- Settings use SQLite and DEBUG=True by default for local development.
- API endpoints are under `/api/` and JWT token endpoints at `/api/token/`.
- Next steps: populate DB with products (optional management command), wire frontend to API endpoints, add tests and CI.
