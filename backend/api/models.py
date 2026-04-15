from django.db import models

class Events(models.Model):
    title = models.CharField(max_length=255)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.title} - {self.location}"