#!/bin/sh

echo "Czekam na bazę danych..."

while ! nc -z $SQL_HOST $SQL_PORT; do
  sleep 1
done

echo "Baza wstała 🚀"

python manage.py migrate

exec python manage.py runserver 0.0.0.0:8000