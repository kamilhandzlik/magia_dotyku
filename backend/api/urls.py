from django.urls import path
from . import views


urlpatterns = [
    path("rezerwacja/", views.reserwation, name="rezerwacja"),
    path("voucher/", views.voucher, name="voucher"),
    path("events/", views.EventsListView.as_view(), name="events-list"),
    path("trainings/", views.TrainingListView.as_view()),
    path("trainings/<slug:slug>/", views.TrainingDetailView.as_view()),
]
