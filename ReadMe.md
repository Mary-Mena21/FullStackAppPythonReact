# install steps

# 1. Create a virtual environment
python -m venv venv
# 2. Activate the virtual environment
source venv/bin/activate
# 3. Install Django
python -m pip install django
# check django version
python -m django --version
# 4. Create a project
django-admin startproject crud .
# create App 
python manage.py startapp api
# Make migrations
python manage.py makemigrations
# Apply migrations
python manage.py migrate
# 5. Run the server
python manage.py runserver
# 3. Install dependencies
pip install -r requirements.txt 
# 4. Run the application
python app.py
