import SquareSection from "@/app/components/Sections/SquareSection";
import CircleSection from "@/app/components/Sections/CircleSection";
import GallerySection from "@/app/components/Sections/GallerySection";
import HeroMd from "@/app/components/Hero/HeroMd";
import Footer from "@/app/components/Footer/Footer";

type Props = {
  params: { slug: string };
};

async function getTraining(slug: string) {
  const res = await fetch(`http://localhost:8080/api/trainings/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Błąd pobierania danych");
  }

  return res.json();
}

export default async function TrainingPage({ params }: Props) {
  const data = await getTraining(params.slug);

  return (
    <>
      <h1 className="text-4xl text-center py-10">{data.title}</h1>

      <section>
        {data.sq_sections.map((item: any) => (
          <SquareSection key={item.id} {...item} />
        ))}
      </section>

      <section>
        {data.sections.map((item: any, index: number) => (
          <CircleSection
            key={item.id}
            {...item}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      <section>
        <GallerySection items={data.gallery} />
      </section>
        <Footer />
    </>
  );
}