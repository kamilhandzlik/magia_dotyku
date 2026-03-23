"use client";

import Image from "next/image";
import Footer from "../components/Footer/Footer";

export default function AccessBars() {
  return (
    <>
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto space-y-16">
          {/* Title */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl text-[#968956] font-bold">Access Bars</h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
            </div>

            <p className="text-2xl font-semibold text-text-gray-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">
              to zastrzyk ENERGII – który oczyszcza umysł pozwalając kreować
              Twoje nowe spokojne życie w lekkości i radości
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
            </div>
          </div>

          {/* Image + Side Text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/pictures/IMG_4.png"
                alt="access-bars"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-[#968956] font-semibold">
                  Terapia Access Bars Consciousness ®
                </span>{" "}
                oczyszcza umysł i otwiera dostęp do świadomości.
              </p>

              <p>
                Tuż przed sesją otrzymasz wyjątkowy masaż głowy i twarzy, który
                pomaga wejść w proces regeneracji oraz kontaktu z Twoim
                wewnętrznym potencjałem.
              </p>

              <p>
                Relaks, delikatny dotyk, spokój i aromatyczne olejki prowadzą
                Cię w kierunku głębokiego wyciszenia i odkrywania siebie.
              </p>

              <p>
                Każdy z nas posiada ogromne zasoby energii – jednak w codziennym
                biegu często nie dajemy sobie przestrzeni, by je poczuć.
              </p>

              <p className="text-[#968956] font-semibold">
                Access Bars to impuls, który uruchamia się już chwilę po sesji.
              </p>

              <p>
                Czego możesz się spodziewać? Tego, że zapragniesz wrócić – by
                znów poczuć lekkość, spokój i radość.
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="max-w-[900px] mx-auto space-y-8 text-lg leading-relaxed text-center">
            <p className="text-xl font-semibold">
              CELEM ACCESS BARS JEST, ABY WSZYSTKO W ŻYCIU PRZYCHODZIŁO Z{" "}
              <span className="text-[#968956]">
                ŁATWOŚCIĄ, RADOŚCIĄ I OBFITOŚCIĄ
              </span>
            </p>

            <p>
              Dla każdego ważny jest{" "}
              <span className="text-[#968956] font-semibold">spokój</span>.
              Proces Access Bars pozwala osiągnąć go w sposób naturalny, lekki i
              dostępny dla każdego.
            </p>

            <div className="space-y-4 text-justify">
              <p>Pomyśl… jak by to było, gdybyś:</p>

              <ul className="space-y-2 list-disc list-inside">
                <li>
                  podczas delikatnego dotyku głowy głęboko się zrelaksowała
                </li>
                <li>
                  uwolniła męczące myśli bez konieczności analizowania ich
                </li>
                <li>odpuściła trudności i napięcia bez wysiłku</li>
                <li>
                  zyskała dostęp do nowych możliwości – finansowych i życiowych
                </li>
              </ul>
            </div>

            <p>Brzmi nieprawdopodobnie? A jednak…</p>

            <p>
              Terapia Access Bars Consciousness ® posiada certyfikat
              Międzynarodowego Stowarzyszenia Terapii Manualnych Ciała i jest
              stosowana na całym świecie.
            </p>

            <p className="text-2xl font-semibold text-[#968956]">
              Czy jesteś gotowa na inspirację i lekkość?
            </p>

            <div className="space-y-4 text-justify">
              <p>
                Podczas sesji, w wygodnej pozycji leżącej, w ubraniu, wykonywany
                jest delikatny masaż 32 punktów na głowie – centrów związanych
                m.in. z emocjami, kreatywnością, relacjami, pieniędzmi i
                świadomością.
              </p>

              <p>W trakcie sesji możesz doświadczyć:</p>

              <ul className="space-y-2 list-disc list-inside">
                <li>głębokiego odprężenia i poprawy snu</li>
                <li>zmniejszenia stresu i napięcia</li>
                <li>większej klarowności myśli</li>
                <li>uwolnienia blokad emocjonalnych</li>
                <li>wzrostu radości i poczucia lekkości</li>
                <li>wsparcia w obszarze zdrowia i regeneracji</li>
                <li>dostępu do nowych możliwości zawodowych i życiowych</li>
              </ul>
            </div>

            <p>
              W trakcie sesji możesz zasnąć lub doświadczyć uwolnienia napięć z
              ciała. Po zabiegu zalecany jest odpoczynek, aby proces regeneracji
              mógł się w pełni zintegrować.
            </p>

            <p>
              Po terapii możesz zacząć dostrzegać nowe możliwości i zmiany w
              swoim sposobie myślenia. To moment otwarcia na Twój naturalny
              potencjał.
            </p>

            <p className="text-xl font-semibold">
              WYJDZIESZ GOTOWA NA SPOTKANIE Z SOBĄ
            </p>

            <div className="space-y-4 text-justify">
              <p>Kluczem do zmiany jest zadawanie sobie właściwych pytań:</p>

              <ul className="space-y-2 list-disc list-inside">
                <li>Jak bardzo mogę być szczęśliwa?</li>
                <li>Co mogę zrobić, aby to osiągnąć?</li>
                <li>Czy mogę zmienić swoją obecną sytuację?</li>
                <li>Jak mogę to zmienić?</li>
                <li>Jak będę się wtedy czuć?</li>
              </ul>
            </div>

            <p>Pytania dodają mocy odpowiedzi ją odbierają.</p>

            <p className="italic">
              Zapraszam Cię do odkrycia tej przestrzeni i doświadczenia jej na
              własnej skórze.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
