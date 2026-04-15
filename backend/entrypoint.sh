#!/bin/sh

echo "Awaiting database..."

while ! nc -z $SQL_HOST $SQL_PORT; do
  sleep 1
done

echo "Database is ready"

python manage.py makemigrations
python manage.py migrate

exec python manage.py runserver 0.0.0.0:8080