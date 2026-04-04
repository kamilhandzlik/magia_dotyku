"use client";

import Image from "next/image";

import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function ZabiegiNaTwarz() {
  return (
    <>
      <HeroMd
        title="Zabiegi na twarz"
        description="Twarz jest naszym najważniejszym organem komunikacji i odzwierciedla nasze emocje, stan zdrowia i wiek. Dlatego warto o nią dbać i pielęgnować. Zatem pozwól, że ja zaopiekuję się twoją twarzą i pomogę Ci odkryć jej naturalne piękno i blask."
      />
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_3.png"
              alt="szczkolenia"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl font-bold">Zabiegi na twarz</h2>

            <p className="text-xl">
              <span className="text-[#968956] font-semibold">
                HADADO to NATURALNA MANUALNA TERAPIA
              </span>{" "}
              dążącą do zachowania młodego wyglądu skóry metoda ta wywołuje
              EFEKT „niechirurgicznego liftingu twarzy” jest niezwykłą
              alternatywą dla każdego, kto szuka i CENI NATURALNE sposoby na
              uzyskanie młodszego i zdrowszego wyglądu twarzy, ale poszukuje też
              relaksu, uwolnienia stresu i lepszego samopoczucia. HADADO to
              niepowtarzalna forma sztuki masażu, będąca „starożytną drogę do
              piękna”. Ta majestatyczna i niezwykle precyzyjna manualna terapia
              twarzy należy do jednej z najtrudniejszych technik masażu w
              Japonii.
            </p>
            <p>
              Zawiera bowiem największą ilość najbardziej skomplikowanych
              połączeń technik manualnych:
              <li>masażu tkanek głębokich, </li>
              <li>drenażu limfatycznego, </li>
              <li>masażu relaksacyjnego, </li>
              <li>liftingu twarzy, </li>
              <li>akupresury,</li>
            </p>
            <p>które w końcowym efekcie dają spektakularne efekty.</p>
            <p>
              <span className="text-[#968956] font-semibold">
                EFEKTY WIZUALNE :
              </span>
              podniesienie owalu i wzmocnienie struktury twarzy, – regeneracja,
              odżywienie i dotlenienie skóry -poprawa ukrwienia i metabolizmu,
              -zatrzymanie lub zmniejszenie efektów starzenia się skóry,
              -znormalizowanie napięć mięśniowych, -zmniejszenie zmarszczek
              mimicznych, -poprawa elastyczności skóry i napięcia mięśniowego,
              -uzyskanie jędrnej i wygładzonej skóry, -usunięcie toksyn,
              zanieczyszczeń i martwych komórek skóry, -zniwelowanie nadmiernego
              napięcia w okolicach szyi, klatki piersiowej i karku, -pobudzenie
              produkcji składników budulcowych skóry: kolagenu i elastyny.
            </p>
            <p>
              <span className="text-[#968956] font-semibold">
                EFEKTY ZDROWOTNE:
              </span>
              zniwelowanie chronicznych bóli głowy -złagodzenie stresu i
              obniżenie poziom kortyzolu we krwi -Poprawa wzroku poprzez
              dokrwienie nerwu wzrokowego -Zmniejszenie problemów z układem
              pokarmowym -Złagodzenie efektów zgrzytania zębami (bruksizm)
              -Głęboko relaks, odprężenie i regulacja balans energetyczny ciała
              -Usprawnienie mięśni twarzy, obręczy barkowej i klatki piersiowej
              Zabieg wykonany jest na naturalnych olejkach eterycznych, które
              dzięki swojemu aromaterapeutycznemu działaniu wprawiają w stan
              głębokiego relaksu i błogości.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
