"use client";

import Image from "next/image";
import Footer from "../components/Footer/Footer";

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
                <span className="text-amber-400 font-semibold">
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

              <p className="text-amber-400 font-semibold">
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
            <p className="text-xl font-semibold text-amber-400">
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
              <span className="text-amber-400 font-semibold ">
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
              <span className="text-amber-400 font-semibold">ZALECENIA</span>
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
              <span className="text-amber-400 font-semibold">
                Badanie dostępne w pakiecie wraz z zaleceniami
              </span>
              w wersji STANDARD{" "}
              <span className="text-amber-400 font-semibold">
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

          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#131313] rounded-2xl p-6">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/serce.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Układ krążenia i naczyń mózgowych:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Gęstość krwi</li>
                  <li>Krystalizacja cholesterolu</li>
                  <li>Tłuszcz we krwi</li>
                  <li>Ciśnienie</li>
                  <li>Elastyczność naczyń krwionośnych</li>
                  <li>Zapotrzebowanie serca na krew</li>
                  <li>Rzeczywiste ukrwienie mięśnia sercowego</li>
                  <li>Zużycie tlenu przez mięsień sercowy</li>
                  <li>Praca serca</li>
                  <li>Blokada wyrzutu lewej komory serca</li>
                  <li>Wydajność lewej komory serca</li>
                  <li>Elastyczność naczyń wieńcowych</li>
                  <li>Ciśnienie ukrwienia wieńcowego</li>
                  <li>Elastyczność naczyń mózgowych</li>
                  <li>Miażdżyca naczyń mózgowych</li>
                </ul>
              </p>
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Funkcje przewodu pokarmowego:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Współczynnik wydzielania pepsyny</li>
                  <li>Współczynnik perystaltyki żołądkowej</li>
                  <li>Współczynnik absorpcji żołądkowej</li>
                  <li>Współczynnik perystaltyki jelita cienkiego</li>
                  <li>Współczynnik absorpcji jelita cienkiego</li>
                </ul>
              </p>
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/przewod-pokarmowy.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/funkcje-jelit.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Funkcja jelit:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Współczynnik wydzielania pepsyny</li>
                  <li>Współczynnik perystaltyki żołądkowej</li>
                  <li>Współczynnik absorpcji żołądkowej</li>
                </ul>
              </p>
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Funkcje nerek:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Urobilinogen – Metabolit wątroby</li>
                  <li>Zagęszczenie kwasu moczowego</li>
                  <li>Mocznik – Metabolit wątroby</li>
                  <li>Poziom białek w moczu</li>
                </ul>
              </p>
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/funkcje-jelit.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/funkcje-pluc-600x592.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Funkcje płuc:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Infekcje górnych dróg oddechowych</li>
                  <li>Wydolność płuc</li>
                  <li>Odporność dróg oddechowych</li>
                  <li>Zawartość tlenu we krwi – pasożyty odjelitowe</li>
                </ul>
              </p>
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Mózg:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Poziom dotlenienia mózgu</li>
                  <li>Miażdżyca naczyń mózgowych</li>
                  <li>Stan unerwienia czaszkowego</li>
                  <li>Indeks chwiejności wegetatywnej</li>
                  <li>Indeks pamięci (ZS)</li>
                </ul>
              </p>
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/mozg.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/biorezonans/watroba-i-pecherzy.png"
                alt="biorezonans"
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Side Text */}
            <div className="space-y-6 text-lg leading-relaxed text-justify">
              <p>
                <span className="text-amber-400 text-2xl font-semibold">
                  Funkcje wątroby i pęcherzyka żółciowego:
                </span>{" "}
                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>Metabolizm białek</li>
                  <li>Produkcja energii</li>
                  <li>Funkcja detoksykacyjna</li>
                  <li>Produkcja żółci</li>
                  <li>Zawartość tłuszczu w wątrobie</li>
                  <li>Przeciwciała-pasożyty w p.ż. (A/G)</li>
                  <li>Bilirubina całkowita (TBIL)</li>
                  <li>Kamienie wapniowe w p.ż. (ALP)</li>
                  <li>Kamienie cholesterolowe w p.ż. (TBA)</li>
                  <li>Bilirubina (DBIL)</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
