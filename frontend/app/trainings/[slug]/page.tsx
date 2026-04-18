import SquareSection from "@/app/components/Sections/SquareSection";
import CircleSection from "@/app/components/Sections/CircleSection";
import GallerySection from "@/app/components/Sections/GallerySection";
import HeroMd from "@/app/components/Hero/HeroMd";
import Footer from "@/app/components/Footer/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

function fixImageUrls(data: any) {
  const fix = (url: string) =>
    url?.replace("http://localhost:8080/media/", "/api/media/");

  return {
    ...data,
    sq_sections: data.sq_sections.map((s: any) => ({
      ...s,
      image: fix(s.image),
    })),
    sections: data.sections.map((s: any) => ({ ...s, image: fix(s.image) })),
    gallery: data.gallery.map((g: any) => ({ ...g, image: fix(g.image) })),
  };
}

async function getTraining(slug: string) {
  const res = await fetch(`http://localhost:8080/api/trainings/${slug}/`, {
    cache: "no-store",
  });

  console.log("STATUS:", res.status);

  const text = await res.text();
  console.log("RESPONSE:", text);

  if (!res.ok) {
    throw new Error("Błąd pobierania danych");
  }

  return fixImageUrls(JSON.parse(text)); // ← tylko ten return, bez poprzedniego
}

export default async function TrainingPage({ params }: Props) {
  const { slug } = await params;
  const data = await getTraining(slug);

  return (
    <div className="w-full">
      <h1 className="text-4xl text-center py-10">{data.title}</h1>
      <section>
        {data.sq_sections.map((item: any) => (
          <SquareSection key={item.id} {...item} />
        ))}
      </section>
      <section>
        {data.sections.map((item: any, index: number) => (
          <CircleSection key={item.id} {...item} reverse={index % 2 !== 0} />
        ))}
      </section>
      <section className="w-full">
        <GallerySection items={data.gallery} />
      </section>
      <Footer />
    </div>
  );
}
