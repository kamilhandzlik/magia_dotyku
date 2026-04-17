from django.contrib import admin
from .models import Event, Training, SquareSection, CircleSection, GalleryItem


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "start_date", "end_date", "location")
    search_fields = ("title", "location")


admin.site.register(Training)
admin.site.register(SquareSection)
admin.site.register(CircleSection)
admin.site.register(GalleryItem)
