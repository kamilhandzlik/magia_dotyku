from django.contrib import admin
from .models import Events

@admin.register(Events)
class EventsAdmin(admin.ModelAdmin):
    list_display = ("title", "start_date", "end_date", "location")
    search_fields = ("title", "location")