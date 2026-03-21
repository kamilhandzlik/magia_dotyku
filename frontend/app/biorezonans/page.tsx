"use client";

import Image from "next/image";
import Footer from "../components/Footer/Footer";

import SectionItems from "./components/SectionItems";

export default function AccessBars() {
  return (
    <>
      <section className="relative overflow-hidden py-20 px-6 text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2123] via-[#181a1b] to-black -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto space-y-16">
          {/* Title */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Biorezonans</h2>

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
                src="/biorezonans/IMG_1.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-[#d3c48b] font-semibold">
                  BIOREZONANS
                </span>{" "}
                to nieinwazyjna metoda diagnostyczna analizująca Prawidłowość
                Funkcjonowania Organów i Kondycji Ciała za pomocą odczytu drgań
                komórek i organów odczytanych z poziomu energetycznego na
                podstawi którego jest dokonywana analiza.
              </p>

              <p>
                Komputerowe skanowanie organizmu oparte jest na bezbolesnej,
                bezinwazyjnej metodzie bioimpedancji i trwa kilka minut. Osoba
                badana trzyma w ręce specjalną sondę podłączoną do urządzenia.
                Analizator poddaje kontroli cały organizm i otrzymuje informacje
                zwrotne o stanie poszczególnych narządów. Komputerowy
              </p>

              <p className="text-[#d3c48b] font-semibold">
                biorezonans magnetyczny organizmu
              </p>

              <p>
                potrafi wykryć między innymi niedobory witamin i minerałów na
                poziomie komórkowym. Fenomen urządzenia polega przede wszystkim
                na tym, że jest w stanie wskazać patologie w drganiach komórki
                zanim jeszcze wywołają one widoczne objawy, co pomaga zapobiec
                rozwojowi wielu chorób
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="max-w-[900px] mx-auto space-y-8 text-lg leading-relaxed text-justify">
            <p className="text-xl font-semibold text-[#d3c48b]">
              Uzyskasz informacje w kierunku :{" "}
              <span className="text-white">
                Cukrzycy, Funkcjonowania żołądka, Funkcjonowania jelita
                cienkiego i grubego , Poziom dobrej flory bakteryjnej w jelicie
                grubym , Poziomu cholesterolu i trójglicerydów, Zakwaszenia
                organizmu, Pracy wątroby i pęcherzyka żółciowego, Lepkości krwi,
                Niedotlenienia organizmu, Ukrwienia serca i mózgu, Poziomu
                szkodliwych metali ciężkich, pestycydów i toksyn, Osteoporozy i
                chorób reumatycznych, Funkcjonowania płuc, nerek i układu
                odpornościowego, Poziomu witamin i pierwiastków śladowych,
                Poziomu aminokwasów i koenzymów, Wydzielania hormonów, Badanie
                prostaty(bez kontaktowo), Poziomu testosteronu oraz jakości
                nasienia(bez pobierania).
              </span>
            </p>

            <p>
              <span className="text-[#d3c48b] font-semibold ">
                PRZECIWWSKAZANIA{" "}
              </span>
              do badania biorezonansem:{" "}
              <span className="text-white">
                Ciąża, Rozrusznik serca, Pompa insulinowa, Elektroniczne
                implanty, Padaczka, Choroby psychiczne, Wielokrotne udary mózgu,
                Sztuczna zastawka serca, Klipsy naczyniowe, Wiek poniżej 10 lat.
              </span>
            </p>

            <p>
              <span className="text-[#d3c48b] font-semibold">ZALECENIA</span>
              przed badaniem biorezonansem:{" "}
              <span className="text-white">
                Należy zdjąć wszystkie metalowe przedmioty, biżuterię, okulary.
                Wyłączyć całkowicie telefony komórkowe, Wi-Fi.{" "}
              </span>
              <span className="text-white">
                Badanie najlepiej wykonać o ile to możliwe na czczo (nie pić
                kawy, herbaty, energetyków, nie jeść mięsa, serów, nie słodzić.
                Kilka dni wcześniej odstawić suplementy i zioła. Zaleca się
                picie wody niegazowanej i niskozmineralizowanej 1,5 l. / dobę.
              </span>
              <span className="text-white">
                Raport kompleksowy (wydruk komputerowy) do odebrania wraz z
                zaleceniami po badaniu.
              </span>
            </p>
            <p>
              <span className="text-[#d3c48b] font-semibold">
                Badanie dostępne w pakiecie wraz z zaleceniami
              </span>
              w wersji STANDARD{" "}
              <span className="text-[#d3c48b] font-semibold">
                w cenie 250zł.
              </span>
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
          </div>
          {/* Examples  */}

          <SectionItems />
        </div>
      </section>

      <Footer />
    </>
  );
}
