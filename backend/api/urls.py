from django.urls import path
from . import views


urlpatterns = [
    path("rezerwacja/", views.reserwation, name="rezerwacja"),
    path("voucher/", views.voucher, name="voucher"),
    path("events/", views.EventsListView.as_view(), name="events-list")
]
