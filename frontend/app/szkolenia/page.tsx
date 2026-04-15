"use client";

import Image from "next/image";
import Footer from "../components/Footer/Footer";
import HeroMd from "../components/Hero/HeroMd";
import SzkoleniaItems from "../components/szkolenia/SzkoleniItems";
import Terminy from "../components/szkolenia/Terminy";
import RezerwacjaForm from "../components/szkolenia/Formularz";

export default function Szkolenia() {
  return (
    <>
      <HeroMd
        title="Szkolenia i spotkania"
        description="Jeśli czujesz, że to właściwy moment, by zrobić krok dalej — zrób go ze mną. Moje szkolenia to przestrzeń, w której wracasz do swojej mocy."
      />

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

          <div className="space-y-6 leading-relaxed text-lg">
            <h2 className="text-4xl font-bold">Szkolenia i spotkania</h2>

            <p>
              To przestrzeń, w której spotykamy się nie tylko po to, by się
              nauczyć… ale by{" "}
              <span className="text-[#968956] font-semibold">
                poczuć, zrozumieć i doświadczyć
              </span>{" "}
              siebie na głębszym poziomie.
            </p>

            <p>
              Tworzę spotkania pełne uważności, spokoju i autentyczności –
              takie, w których możesz na chwilę zatrzymać się i wrócić do
              siebie.
            </p>

            <p>
              Podczas szkoleń i warsztatów pracujemy z{" "}
              <span className="text-[#968956] font-semibold">
                ciałem, oddechem i świadomością
              </span>
              , odkrywając to, co często w codziennym biegu zostaje pominięte.
            </p>

            <p>
              To nie są tylko zajęcia – to doświadczenie, które zostaje z Tobą
              na dłużej i realnie wpływa na Twoje samopoczucie oraz sposób, w
              jaki przeżywasz codzienność.
            </p>

            <p>
              Niezależnie od tego, czy dopiero zaczynasz swoją drogę, czy chcesz
              pogłębić swoją wiedzę – znajdziesz tu przestrzeń dla siebie.
            </p>

            <p className="text-xl font-semibold text-[#968956]">
              Zatrzymaj się. Oddychaj. Poczuj.
            </p>

            <p>
              Zapraszam Cię do wspólnego doświadczenia – w kameralnej
              atmosferze, z uważnością na Twoje potrzeby i tempo.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto space-y-20 py-20 px-6">
        <SzkoleniaItems />

        <Terminy />
        <RezerwacjaForm />
      </div>

      <Footer />
    </>
  );
}
