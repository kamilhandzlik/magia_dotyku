import Zabiegi from "../components/MDcomponents/zabiegi";
import AboutSection from "../components/MDcomponents/text";
import Footer from "../components/Footer/Footer";

export default function MagiaDotyku() {
  return (
    <>
      <div className="px-6 py-10">
        <h1 className="text-4xl py-6 text-center font-semibold text-[#d3c48b]">
          Magia Dotyku
        </h1>
        <Zabiegi />
        <div className="py-16">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
