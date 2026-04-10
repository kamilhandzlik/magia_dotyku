from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.mail import send_mail
from decouple import config


@csrf_exempt
def reserwation(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            phone = data.get("phone")
            training = data.get("training")
            message = data.get("message")

            # Validation
            if not all([name, email, phone, training]):
                return JsonResponse({"error": "Brak wymaganych danych"}, status=400)

            # email do kilenta (zamawiającego)
            send_mail(
                subject="Potwierdzenie zapisu",
                message=f"""Cześć {name}!
                
                Dziękujemy za zapis na szkolenie: {training}.
                
                Skontaktujemy się z tobą wkrótce.""",
                from_email=config("EMAIL_HOST_USER"),
                recipient_list=[email],
            )

            # email do właściciela
            send_mail(
                subject="Nowe zgłoszenie na szkolenie",
                message=f"""
                Imię: {name}
                Email: {email}
                Telefon: {phone}
                Szkolenie: {training}

                Wiadomość:
                {message}
                """,
                from_email=config("EMAIL_HOST_USER"),
                recipient_list=[config("EMAIL_HOST_USER")],
            )

            return JsonResponse({"status": "success"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Zła metoda"}, status=405)
