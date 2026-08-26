"use client";

import Link from "next/dist/client/link";
import Image from "next/image";

export default function AboutMeMainPage() {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-gray-600">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center text-pretty">
        <div className="relative group overflow-hidden rounded-full aspect-square">
          <Image
            src="/pictures/IMG_6.jpeg"
            alt="szczkolenia"
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 leading-relaxed text-xl">
          <h2 className="text-4xl font-bold">O mnie</h2>

          <p>
            Witam Cię serdecznie. Nazywam się{" "}
            <span className="text-[#968956] font-semibold">Ola Burczyńska</span>
            .
          </p>

          <p>
            Zapraszam Cię do wspólnej podróży po{" "}
            <span className="text-[#968956] font-semibold">
              Radosnej Stronie Życia
            </span>
            , gdzie harmonijnie łączymy DUCHA – CIAŁO – UMYSŁ.
          </p>

          <p>
            Moją ideą stworzenia tej przestrzeni jest miejsce pełne{" "}
            <span className="text-[#968956]">
              spokoju, empatii i zrozumienia
            </span>
            , które pomaga odkryć Twoją wewnętrzną siłę.
          </p>

          <p>Razem jest łatwiej.</p>
          <div className="items-center">
            <Link
              href="/poznajmy-sie"
              className="inline-block mt-10 w-full py-6 bg-[#968956] text-white rounded-2xl text-lg font-medium transition-colors duration-300 hover:bg-[#968956]/90"
            >
              <p className="text-center text-3xl font-semibold">
                Dowiedz się więcej
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
