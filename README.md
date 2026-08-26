# magia_dotyku

Magia Dotyku

A full-stack web application for Magia Dotyku -- Strefa Spa i
Relaksu.

The project consists of a Django REST Framework backend and a
Node.js-based frontend. The backend uses PostgreSQL and can be run with
Docker.

Security notice: Never commit your real .env file, passwords,
SMTP credentials, API keys, or other secrets to Git. The examples
below contain placeholders only.

Project structure

The project is divided into two main parts:

Backend -- Django + Django REST Framework + PostgreSQL

Frontend -- Node.js-based frontend application

Docker configuration files are part of the repository and are
intentionally available in GitHub. The Docker configuration itself does
not contain personal passwords or other secrets; sensitive configuration
belongs in .env.

Backend setup

Requirements

The backend uses the following Python packages:

asgiref==3.11.1
certifi==2026.7.22
Django==5.2.7
django-cors-headers==4.9.0
djangorestframework==3.16.1
pillow==12.3.0
psycopg2-binary==2.9.12
python-decouple==3.8
sqlparse==0.5.5
tzdata==2026.1

Python should be installed before starting the backend.

It is strongly recommended to use a virtual environment.

1. Create and activate a virtual environment

From the backend directory:

Windows PowerShell

python -m venv venv
.\venv\Scripts\Activate.ps1

Windows CMD

python -m venv venv
venv\Scripts\activate

Linux/macOS

python3 -m venv venv
source venv/bin/activate

After activation, the terminal should show something similar to:

(venv)

2. Install Python dependencies

With the virtual environment activated:

pip install -r requirements.txt

To verify the installed versions:

pip freeze

The installed Django version should be:

Django==5.2.7

If pip freeze shows a different Django version, make sure the correct
virtual environment is active.

Backend environment configuration

The backend requires a .env file.

Create a file named:

.env

in the backend directory.

Do not commit this file to Git.

Use the following template:

SECRET_KEY='replace-with-your-own-django-secret-key'
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,[::1]

SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=magiadb
SQL_USER=postgresqluser
SQL_PASSWORD=replace-with-your-database-password
SQL_HOST=db
SQL_PORT=5432
DATABASE=postgres

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True

EMAIL_HOST_USER=your-email@example.com
EMAIL_HOST_PASSWORD=replace-with-your-smtp-credential

Important

The values above are examples.

Do not copy real credentials from another developer's .env file.

In particular, never publish:

SECRET_KEY

database passwords

Gmail/SMTP passwords

API keys

access tokens

refresh tokens

The EMAIL_HOST_PASSWORD value should also not be your normal Gmail
account password.

For Gmail SMTP, the application may require an appropriate Google
authentication method, such as an App Password, depending on the Google
account configuration. The current Google authentication/OAuth
configuration for this project is intentionally not documented here yet
and should be configured separately.

Database

The backend is configured to use PostgreSQL.

The default configuration expects the database service to be reachable
as:

db

on:

5432

When using the repository's Docker configuration, these values are
normally handled by the Docker setup.

If you are running PostgreSQL outside Docker, change:

SQL_HOST=db

to the hostname/address of your PostgreSQL server, for example:

SQL_HOST=localhost

The database name, username and password must match the PostgreSQL
configuration.

Running the backend

If the project is configured to use Docker for PostgreSQL, start the
required containers according to the Docker configuration included in
the repository.

Then, with the Python virtual environment activated, run Django from the
backend directory:

python manage.py runserver

The development server should normally be available at:

http://127.0.0.1:8000/

or:

http://localhost:8000/

Django migrations

After installing the project or changing Django models, apply
migrations:

python manage.py migrate

If you have modified models and need to create new migrations:

python manage.py makemigrations
python manage.py migrate

Creating a Django superuser

If the project requires access to the Django administration panel,
create a superuser:

python manage.py createsuperuser

Then follow Django's prompts.

The Django admin is normally available at:

http://127.0.0.1:8000/admin/

Frontend setup

The frontend is a Node.js application.

You do not need to manually install every frontend dependency.

The dependency list is stored in the frontend's:

package.json

and the exact resolved versions are stored in:

package-lock.json

The node_modules directory should not be committed to Git.

1. Install Node.js

Install a current supported Node.js version.

After installation, verify it:

node --version
npm --version

2. Install frontend dependencies

Go to the frontend directory and run:

npm install

This reads package.json and installs the required dependencies into:

node_modules/

You do not need to send or copy the node_modules directory to another
developer.

3. Start the frontend development server

Run:

npm run dev

The exact development URL depends on the frontend configuration, but a
typical development server is available at:

http://localhost:3000

If the project uses a different port, use the URL displayed by the
terminal after starting the development server.

Useful frontend commands

The available commands are defined in package.json.

The most common commands are:

npm run dev

Start the development server.

npm run build

Create a production build.

npm run start

Start the production application after a successful build, if supported
by the project.

If a command is not available, check the scripts section of
package.json.

For example:

{
"scripts": {
"dev": "...",
"build": "...",
"start": "..."
}
}

Running the complete application locally

A typical local development workflow is:

Terminal 1 -- database / Docker

Start the Docker services required by the project using the Docker
configuration included in the repository.

Terminal 2 -- backend

Activate the Python virtual environment:

.\venv\Scripts\Activate.ps1

Then start Django:

python manage.py runserver

Terminal 3 -- frontend

Go to the frontend directory and install dependencies if necessary:

npm install

Then start the frontend:

npm run dev

At this point the frontend should communicate with the Django backend
according to the API configuration of the project.

Environment files and Git

The .env file contains local secrets and must remain outside Git.

The repository should contain a safe example such as:

.env.example

but should not contain:

.env

A suitable .gitignore should include entries similar to:

.env
.env.\*
!.env.example

venv/
.venv/

node_modules/

**pycache**/
\*.py[cod]

\*.sqlite3

Do not add the real .env file to the repository even if the repository
is private.

If a secret has accidentally been committed, simply deleting it in a
later commit is not enough. The exposed credential should be
revoked/rotated.

Email configuration

The backend is configured to use Gmail's SMTP server:

SMTP host: smtp.gmail.com
SMTP port: 587
TLS: enabled

The project therefore contains the following configuration variables:

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@example.com
EMAIL_HOST_PASSWORD=your-smtp-credential

The exact Google authentication procedure for sending mail is not
documented yet because Google's current authentication configuration
is subject to change.

Before deploying or relying on email functionality, verify the current
Google configuration and authentication requirements.

Troubleshooting

ModuleNotFoundError

Make sure the virtual environment is active:

.\venv\Scripts\Activate.ps1

Then reinstall dependencies:

pip install -r requirements.txt

Wrong Django version

Check:

pip freeze

The project currently expects:

Django==5.2.7

If another version is installed:

pip install Django==5.2.7

or reinstall the complete requirements file:

pip install -r requirements.txt

PostgreSQL connection error

Check:

PostgreSQL/Docker is running.

The database exists.

.env contains the correct database credentials.

SQL_HOST matches the way PostgreSQL is being run.

For Docker-based development, the configured hostname is normally:

SQL_HOST=db

CORS errors

The backend uses:

django-cors-headers==4.9.0

If the frontend cannot communicate with the backend because of CORS,
check the Django CORS configuration and make sure the frontend's
development URL is allowed.

Frontend dependency problems

Remove the installed dependencies and reinstall them:

Windows PowerShell

Remove-Item -Recurse -Force node_modules
npm install

If the lockfile is valid, prefer using:

npm ci

for a clean installation based exactly on package-lock.json.

Development notes

The backend dependency versions are intentionally pinned in
requirements.txt.

Avoid randomly upgrading packages during development. A newer version
can introduce breaking changes or make the local environment different
from the environment used by the project.

For the frontend, keep package.json and package-lock.json in version
control.

Do not commit:

node_modules/

or:

.env

Quick start

For an already configured development machine:

# Backend

python -m venv venv

Activate the virtual environment and install dependencies:

pip install -r requirements.txt

Create .env using the safe template above.

Apply migrations:

python manage.py migrate

Start the backend:

python manage.py runserver

In the frontend directory:

npm install
npm run dev

The application should then be ready for local development.

Security reminder

Never put real credentials into this README.

If you fork or clone this project, create your own .env and provide
your own:

Django secret key

PostgreSQL credentials

SMTP credentials

Google authentication configuration

The repository's Docker configuration can be used as provided, but all
personal or environment-specific secrets should remain in .env.
