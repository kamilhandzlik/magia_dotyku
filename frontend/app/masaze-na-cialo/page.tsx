"use client";

import Image from "next/image";

import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function MasazeNaCialo() {
  return (
    <>
      <HeroMd
        title="Masaże na ciało"
        description="ukojenie dręczących Cię probleów"
      />
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_1.png"
              alt="szczkolenia"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl font-bold">Masaże na ciało</h2>

            <p className="text-xl">
              <span className="text-[#968956] font-semibold">
                Masaż tkanek głębokich
              </span>{" "}
              jest formą terapii tkanek miękkich, mającą na celu przywrócenie
              równowagi w głębszych warstwach tkanki łącznej i mięśniach{" "}
              <span className="text-[#968956] font-semibold">
                poprzez zlikwidowanie napięć i restrykcji w układzie
                mięśniowo-powięziowym.
              </span>
            </p>

            <p>
              Masaż ten stanowi uzupełnienie , a także podstawę terapii
              wszelkich schorzeń narządu ruchu, którym towarzyszą ograniczenia
              mięśniowo-powięziowe.{" "}
              <span className="text-[#968956] font-semibold">
                Na taki masaż powinna zdecydować się każda osoba, która odczuwa
                ograniczenia lub dolegliwości związane ze stylem życia.{" "}
              </span>
              Bez względu czy jest on siedzący czy stojący i aktywny. Taka forma
              masażu przywraca prawidłowe napięcie i ruchomość poszczególnych
              warstw tkanek, co oddziałuje na poprawę zdrowia, samopoczucia i
              zdolności fizycznych.
            </p>

            <p>
              <span className="text-[#968956]">
                Przeciwwskazania do wykonania zabiegu to:
              </span>
              <li>
                uszkodzenia skóry – przerwanie jej ciągłości, rany i otarcia,
                siniaki,{" "}
              </li>
              <li>infekcje skórne i choroby tkanki skórnej (np. grzybica)</li>
              <li>nowotwory, </li>
              <li>ostre stany zapalne toczące się w organizmie, </li>
              <li>tętniaki,</li>
              <li>zakrzepy.</li>
            </p>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl  font-bold">Masaże na ciało</h2>

            <p className="text-xl">
              <span className="text-[#968956] font-semibold">
                Masaż relaksacyjny
              </span>{" "}
              skupia się on na:
            </p>
            <span className="text-[#968956] font-semibold">
              <li>redukowaniu napięć mięśniowych</li>
              <li>odprężaniu całego ciała</li>
              <li>wyeliminowaniu bólu pleców, szyi, karku, barków</li>
              <li>poprawie krążenia i przepływu limfy</li>
              <li>wyciszaniu emocjonalnym.</li>
            </span>
            <p>
              Wpływa także na przepływ krwi w organizmie, tempo przemiany
              materii, transport środków odżywczych, oraz aktywizację systemu
              odpornościowego. A ponadto relaksuje, odpręża, redukuje stres,
              poprawia samopoczucie.
            </p>
            <p>
              Daj się ponieść MAGII DOTYKU by wsparło Twoje ciało energetyczną
              mocą.
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_2.png"
              alt="szczkolenia"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
