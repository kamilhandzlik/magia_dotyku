from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=255)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.title} - {self.location}"


class Training(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title


class SquareSection(models.Model):
    training = models.ForeignKey(
        Training, on_delete=models.CASCADE, related_name="sq_sections"
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="sections/")

    def __str__(self):
        return self.title


class CircleSection(models.Model):
    training = models.ForeignKey(
        Training, on_delete=models.CASCADE, related_name="sections"
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="sections/")

    def __str__(self):
        return self.title


class GalleryItem(models.Model):
    training = models.ForeignKey(
        Training, on_delete=models.CASCADE, related_name="gallery"
    )
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="gallery/")

    def __str__(self):
        return self.title
