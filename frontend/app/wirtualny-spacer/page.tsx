import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function WirtualnySpacer() {
  return (
    <>
      <HeroMd
        title="Wirtualny spacer"
        description="Zapraszam Cię do mojego świata, gdzie każdy dotyk jest jak delikatna melodia, a każda chwila spędzona razem to podróż do głębi siebie. Wirtualny spacer to przestrzeń, w której możesz poczuć magię dotyku, nawet będąc daleko ode mnie."
      />
      <section className="py-20 px-6">
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Wirtualny spacer to nie tylko wizualna podróż – to doświadczenie,
          które pozwala Ci poczuć się blisko mnie, nawet jeśli dzieli nas
          odległość. To jakbyśmy byli razem w jednym miejscu, dzieląc się
          energią i ciepłem, które płynie z każdego dotyku.
        </p>
      </section>
      <Footer />
    </>
  );
}
