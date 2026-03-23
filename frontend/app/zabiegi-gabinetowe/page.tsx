"use client";

import Image from "next/image";
import Footer from "../components/Footer/Footer";
import HeroMd from "../components/Hero/HeroMd";

export default function ZabiegiGabinetowe() {
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
              src="/pictures/IMG_2.png"
              alt="Zabieg"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 leading-relaxed text-lg">
            <h2 className="text-4xl font-bold">Zabiegi gabinetowe</h2>

            <p>
              Każdy potrzebuje dotyku, który{" "}
              <span className="text-[#968956]font-semibold">
                odpręża, relaksuje i regeneruje
              </span>
              . To właśnie zapewniam w salonie gabinetowym, gdzie otrzymujecie
              wsparcie dla ciała.
            </p>

            <p>
              Zabiegi są dostosowane do potrzeb, jakie zgłaszacie podczas
              wywiadu i korygowane w trakcie, aby w pełni odpowiedzieć na
              potrzeby Waszego ciała.
            </p>

            <p>
              Intensywność terapii dobierana jest indywidualnie – z
              uwzględnieniem progu bólu oraz aktualnego samopoczucia.
            </p>

            <p>
              <span className="text-[#968956] font-semibold">Magia Dotyku</span>{" "}
              to miejsce, w którym otrzymasz więcej niż masaż – moją misją jest
              wzmacniać i wspierać Twoje zdrowie.
            </p>

            <p>
              Zapraszam do zakładki{" "}
              <span className="text-[#968956] underline cursor-pointer hover:text-green-950 transition">
                Magia Dotyku
              </span>
              , gdzie znajdziesz pakiety zabiegów na twarz i ciało.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
