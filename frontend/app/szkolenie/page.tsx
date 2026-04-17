import CircleSection from "../components/Sections/CircleSection";
import SquareSection from "../components/Sections/SquareSection";
import GallerySection from "../components/Sections/GallerySection";
import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function Szkolenie() {
  const sqSection = [
    {
      title: "Access Bars",
      description: "Opis szkolenia.",
      image: "/pictures/IMG_3.png",
    },
  ];
  const sections = [
    {
      title: "Relaks i harmonia",
      description: "Pozwól sobie na chwilę oddechu i regeneracji.",
      image: "/pictures/IMG_1.png",
    },
    {
      title: "Naturalne piękno",
      description: "Podkreślamy to, co w Tobie najpiękniejsze.",
      image: "/pictures/IMG_2.png",
    },
    {
      title: "Głęboki masaż",
      description: "Rozluźnienie, które czujesz jeszcze długo po zabiegu.",
      image: "/pictures/IMG_3.png",
    },
  ];
  const gallery = [
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
    {
      title: "Galeria",
      image: "/pictures/IMG_4.png",
    },
  ];

  return (
    <>
      <HeroMd
        title="Szkolenie Access Bars"
        description="Najlepsze szkolenie na świecie!"
      />

      <section className="">
        {sqSection.map((item, index) => (
          <SquareSection
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>

      <section className="py-20 max-w-[1200px] mx-auto px-4">
        {sections.map((item, index) => (
          <CircleSection
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      <h1 className=" text-4xl text-[#968956] text-center font-semibold py-10">
        Galeria
      </h1>
      <section className="py-20 max-w-[1500px] mx-auto px-4">
        <GallerySection items={gallery} />
      </section>
      <Footer />
    </>
  );
}
