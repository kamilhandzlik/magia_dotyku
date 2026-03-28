import CircleSection from "../components/Sections/CircleSection";
import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function Szkolenie1() {
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

  return (
    <>
      <HeroMd
        title="Szkolenie Access Bars"
        description="Najlepsze szkolenie na świecie!"
      />
      <section className="py-20 px-6">
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
      <Footer />
    </>
  );
}
