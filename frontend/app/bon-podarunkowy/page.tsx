"use client";

import Image from "next/image";

import Footer from "../components/Footer/Footer";

export default function BonPodarunkowy() {
  return (
    <>
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto space-y-16">
          {/* Title */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl text-[#968956] font-bold">
              Bon podarunkowy
            </h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
            </div>

            <p className="text-2xl font-semibold text-black drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">
              Bon podarunkowy na zabiegi dla ciała to wspaniały prezent jaki
              można podarować komuś, komu chcemy okazać wdzięczność za to, że
              jest, docenić za okazywaną troskę dnia codziennego, za wsparcie
              jakie sobie okazujemy.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-2xl">
                <Image
                  src="/pictures/Karty-Podarunkowe-2-1-1024x726.png"
                  alt="bon podarunkowy"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Side Text */}
              <div className="space-y-6 text-lg leading-relaxed text-gray-500 text-justify">
                <p>
                  Podaruj bliskiej osobie coś więcej niż prezent — podaruj jej
                  czas tylko dla siebie. Bon podarunkowy na zabiegi to idealny
                  sposób, by obdarować kogoś chwilą pełnego odprężenia,
                  regeneracji i troski, której często brakuje w codziennym
                  pędzie. To wyjątkowy upominek dla osób, które zasługują na
                  odrobinę luksusu, spokoju i profesjonalnej opieki.
                </p>
                <p>
                  Taki bon to nie tylko elegancki gest, ale też piękna forma
                  okazania, że czyjeś samopoczucie naprawdę ma dla Ciebie
                  znaczenie. Spraw, by ktoś bliski poczuł się ważny,
                  zaopiekowany i doceniony — wybierz prezent, który zostaje w
                  pamięci na długo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
      {/* TODO dodać podobną mechanikę co przy rezerwacji na szkolenie  */}
      <Footer />
    </>
  );
}
