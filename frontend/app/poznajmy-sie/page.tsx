"use client";

import Image from "next/image";

import Footer from "../components/Footer/Footer";
import HeroMd from "../components/Hero/HeroMd";

export default function PoznajmySie() {
  return (
    <>
      <HeroMd />
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/pictures/IMG_3.png"
              alt="szczkolenia"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 leading-relaxed">
            <h2 className="text-4xl font-bold">Poznajmy się</h2>

            <p className="text-xl">
              Nazywam się{" "}
              <span className="text-[#968956] font-semibold">
                Ola Burczyńska
              </span>{" "}
              i witam Cię serdecznie
            </p>

            <p>
              Zapraszam Cię do wspólnej podróży po{" "}
              <span className="text-[#968956] font-semibold">
                Radosnej Stronie Życia
              </span>
              , gdzie harmonijnie łączymy DUSZĘ – CIAŁO – UMYSŁ.
            </p>

            <p>
              Moją ideą stworzenia tej przestrzeni jest miejsce pełne{" "}
              <span className="text-[#968956]">
                spokoju, empatii i zrozumienia
              </span>
              , które pomaga odkryć Twoją wewnętrzną siłę.
            </p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto mt-20 space-y-6 text-center">
          <h3 className="text-2xl font-semibold text-[#968956]">
            Zatrzymaj się na chwilę…
          </h3>

          <div className="space-y-3 text-lg">
            <p>Jak często o SOBIE myślisz?</p>
            <p>Ile dajesz SOBIE, zanim dasz innym?</p>
            <p>Ile razy światu mówisz TAK, kiedy SOBIE mówisz NIE?</p>
            <p>Czy to, co robisz dla siebie – naprawdę Ci wystarcza?</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto mt-20 space-y-6 text-center">
          <p className="text-xl">A może zacznij…</p>

          <p className="text-2xl font-semibold text-[#968956]">
            traktować siebie jak najlepszą przyjaciółkę
          </p>

          <p>
            Bądź tam, gdzie chciałabyś być. Rób to, co sobie zaplanowałaś.
            Dotrzymuj sobie danego słowa.
          </p>

          <p className="text-lg">
            Postaw siebie na pierwszym miejscu… choćby na{" "}
            <span className="text-[#968956] font-semibold">3 miesiące</span>.
          </p>

          <p className="text-2xl font-bold">I zobacz, kim się staniesz </p>
        </div>

        <div className="max-w-[900px] mx-auto mt-20 text-center space-y-6">
          <p>
            Zapraszam Cię do mojej holistycznej przestrzeni, gdzie możesz
            pracować z ciałem, duszą i umysłem – indywidualnie lub w kameralnych
            grupach.
          </p>

          <p className="text-xl">
            O TWOJEJ WARTOŚCI świadczy czas, jaki SOBIE dajesz.
          </p>

          <p className="text-2xl font-semibold text-[#968956]">
            WARTO robić to dla siebie
          </p>

          <p>
            Bo największym prezentem, jaki możesz sobie dać, jest słuchanie
            siebie.
          </p>

          <p className="italic mt-10">
            Życząc Ci cudowności na każdy moment życia
          </p>

          <p className="font-semibold">Ola Burczyńska</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
