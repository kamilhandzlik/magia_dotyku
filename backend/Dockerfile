FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    netcat-openbsd \
    ca-certificates \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*


RUN pip install --upgrade pip

COPY requirements.txt .
RUN pip install -r requirements.txt 

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' entrypoint.sh && chmod +x entrypoint.sh

RUN update-ca-certificates

COPY . .

EXPOSE 8080

ENTRYPOINT ["./entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]