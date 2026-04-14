from django.shortcuts import render
from django.core.mail import send_mail
from decouple import config
from datetime import datetime
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
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

            # ✅ Walidacja
            if not all([name, email, phone, training]):
                return JsonResponse({"error": "Brak wymaganych danych"}, status=400)

            # =========================
            # 📩 EMAIL DO KLIENTA
            # =========================

            html_client = render_to_string(
                "api/emails/reservation_client.html",  # 👈 dostosuj nazwę appki!
                {
                    "name": name,
                    "training": training,
                },
            )

            text_client = f"""
Cześć {name}!

Dziękujemy za zapis na szkolenie: {training}.

Skontaktujemy się z Tobą wkrótce.
"""

            email_client = EmailMultiAlternatives(
                subject="Potwierdzenie zapisu",
                body=text_client,
                from_email=config("EMAIL_HOST_USER"),
                to=[email],
            )

            email_client.attach_alternative(html_client, "text/html")
            email_client.send()

            # =========================
            # 📩 EMAIL DO WŁAŚCICIELA
            # =========================

            html_owner = render_to_string(
                "api/emails/reservation_owner.html",
                {
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "training": training,
                    "message": message,
                },
            )

            text_owner = f"""
Nowe zgłoszenie:

Imię: {name}
Email: {email}
Telefon: {phone}
Szkolenie: {training}

Wiadomość:
{message}
"""

            email_owner = EmailMultiAlternatives(
                subject="Nowe zgłoszenie na szkolenie",
                body=text_owner,
                from_email=config("EMAIL_HOST_USER"),
                to=[config("EMAIL_HOST_USER")],
            )

            email_owner.attach_alternative(html_owner, "text/html")
            email_owner.send()

            return JsonResponse({"status": "success"}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Zła metoda"}, status=405)


@csrf_exempt
def voucher(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            date = data.get("date")
            hour = data.get("hour")
            email = data.get("email")

            formatted_date = datetime.fromisoformat(date).strftime("%d-%m-%Y")
            # Validation
            if not all([date, hour, email]):
                return JsonResponse({"error": "Brak wymaganych danych"}, status=400)

            # email do kilenta (zamawiającego)
            send_mail(
                subject="Potwierdzenie zapisu",
                message=f"""
Dziękujemy za zakup bonu podarunkowego

Zaproponowany termin:
 {formatted_date} o godzinie {hour}

Skontaktujemy się z Tobą w celu potwierdzenia.
""",
                from_email=config("EMAIL_HOST_USER"),
                recipient_list=[email],
            )

            # email do właściciela
            send_mail(
                subject="Nowy voucher",
                message=f"""
Nowy voucher:

Email: {email}
Data: {formatted_date}
Godzina: {hour}
""",
                from_email=config("EMAIL_HOST_USER"),
                recipient_list=[config("EMAIL_HOST_USER")],
            )

            return JsonResponse({"status": "success"})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Zła metoda"}, status=405)
