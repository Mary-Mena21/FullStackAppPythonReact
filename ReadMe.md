# install steps

# 1. Create a virtual environment
python -m venv venv
# 2. Activate the virtual environment
source venv/bin/activate        venv\scripts\activate
# 3. Install Django
python -m pip install django
# check django version
python -m django --version
# Create a project
django-admin startproject crud .
# create App 
python manage.py startapp api
# Make migrations
python manage.py makemigrations
# Apply migrations
python manage.py migrate
# Run the server
python manage.py runserver
# Install dependencies
pip install -r requirements.txt 
# Run the application
python app.py

## React Frontend
npm create vite@latest
# 1. Install dependencies
npm install
# 2. Start the development server
<!-- npm start    -->
npm run dev
## install django-cors-headers 
pip install django-cors-headers
python -m pip install django-cors-headers
## install react-router-dom
<!-- npm install react-router-dom npm i react-router -->
npm i react-router

