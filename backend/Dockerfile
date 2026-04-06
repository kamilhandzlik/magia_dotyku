FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt 

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' entrypoint.sh
RUN chmod +x entrypoint.sh

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

ENTRYPOINT ["./entrypoint.sh"]