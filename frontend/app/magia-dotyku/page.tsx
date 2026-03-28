import Zabiegi from "../components/MDcomponents/zabiegi";
import AboutSection from "../components/MDcomponents/text";

import Footer from "../components/Footer/Footer";
import HeroMd from "../components/Hero/HeroMd";

export default function MagiaDotyku() {
  return (
    <>
      <HeroMd
        title="Magia Dotyku"
        description="Stare przysłowie mówi w zdrowym ciele zdrowy duch w magii dotyku zaopiekuję się obiema częściami Ciebie."
      />
      <div className="px-6 py-10">
        <h1 className="text-6xl py-6 text-center font-semibold text-[#968956]">
          Magia Dotyku
        </h1>
        <div className="items-center">
          <Zabiegi />
        </div>

        <div className="py-16">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
