from rest_framework import serializers
from .models import Event, HeroSection, Training, SquareSection, CircleSection, GalleryItem


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"


class SquareSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SquareSection
        fields = "__all__"


class CircleSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CircleSection
        fields = "__all__"


class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = "__all__"

class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = "__all__"


class TrainingDetailSerializer(serializers.ModelSerializer):
    sq_sections = SquareSectionSerializer(many=True)
    sections = CircleSectionSerializer(many=True)
    hero = HeroSectionSerializer(read_only=True)
    gallery = GalleryItemSerializer(many=True)
    preview = serializers.SerializerMethodField()

    class Meta:
        model = Training
        fields = [
            "id",
            "title",
            "slug",
            "preview",
            "sq_sections",
            "sections",
            "gallery",
            "hero",
        ]

    def get_preview(self, obj):
        first_section = obj.sections.first()

        if not first_section:
            return None

        return {
            "image": first_section.image.url,
            "description": first_section.description[:120],
        }


class TrainingListSerializer(serializers.ModelSerializer):
    preview = serializers.SerializerMethodField()

    class Meta:
        model = Training
        fields = ["id", "title", "slug", "preview"]

    def get_preview(self, obj):
        first = obj.sections.first()
        if not first:
            return None

        return {
            "image": first.image.url,
            "description": first.description[:120],
        }
