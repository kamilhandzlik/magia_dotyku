"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="max-w-[900px] mx-auto px-6 py-16 text-white">
      <div className="space-y-6 leading-relaxed text-lg">
        <p className="text-xl font-semibold text-center">
          To przestrzeń{" "}
          <span className="text-[#d3c48b]">Terapii CIAŁA – DUSZY – UMYSŁU</span>
          .
        </p>

        <p>
          Mam przyjemność zaprosić Cię do niesamowitej przestrzeni jaką stwarzam
          każdego dnia, by wprowadzić Twoje ciało – duszę – umysł w{" "}
          <span className="text-[#d3c48b] font-semibold">
            HOLISTYCZNY BALANS
          </span>{" "}
          i utrzymywać je w młodzieńczym rytmie, abyś odczuwał/a każdym zmysłem
          życie jako nieustającą przygodę.
        </p>

        <p>
          Każdy z nas chce wyglądać i czuć się młodo. To naturalna potrzeba,
          którą pomagam odkryć i pokazuję jak o nią dbać od najmłodszych lat –
          by stało się to nie chwilowym celem, lecz{" "}
          <span className="text-[#d3c48b] font-semibold">
            WYZWANIEM NA CAŁE ŻYCIE
          </span>
          .
        </p>

        <p>
          Ponieważ sama również lubię dbać o siebie, wszystkie zabiegi jakie
          proponuję w przestrzeni Magii Dotyku opierają się na prostych
          rozwiązaniach i naturalnych produktach dających skuteczność terapii.
        </p>

        <p>
          Po każdym zabiegu otrzymujesz wskazówki jak w domowym zaciszu
          kontynuować terapię, by przyniosła długotrwałe efekty – wprowadzając
          harmonię, młodzieńczy wygląd i zdrowie zarówno od zewnątrz, jak i od
          wewnątrz.
        </p>

        <p className="text-center font-semibold">
          JAK WIDZISZ SĄ <span className="text-[#d3c48b]">3 PRZESTRZENIE</span>,
          w których pracuję z Tobą, aby krok po kroku wznieść Twoje zdrowie,
          samopoczucie i relacje na wyższy poziom komfortu życia.
        </p>

        <p className="text-center">
          Zapoznaj się z pełną ofertą w{" "}
          <Link
            href="#"
            className="text-[#d3c48b] underline hover:text-white transition-colors duration-200"
          >
            aplikacji Booksy
          </Link>{" "}
          i zarezerwuj wizytę na zabieg, który pierwszy obudził w Tobie
          ciekawość.
        </p>

        <p className="text-center text-xl font-medium mt-8">
          Z nami nie tylko zrelaksujesz ciało, ale i duszę ✨
        </p>
      </div>
    </section>
  );
}
