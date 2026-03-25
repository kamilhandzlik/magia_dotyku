"use client";

import Image from "next/image";

export default function AboutMeMainPage() {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-gray-600">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group overflow-hidden rounded-full aspect-square">
          <Image
            src="/pictures/IMG_3.png"
            alt="szczkolenia"
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 leading-relaxed">
          <h2 className="text-4xl font-bold">Poznajmy się</h2>

          <p className="text-xl">
            Nazywam się{" "}
            <span className="text-[#968956] font-semibold">Ola Burczyńska</span>{" "}
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
    </section>
  );
}
