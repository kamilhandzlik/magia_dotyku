"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#131313] text-[#d3c48b] pt-16 pb-10 border-t border-black">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-start">
          {/* LEWA - LOGO */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/stopka/stopka-lisc.jpg"
              alt="stopka-lisc"
              width={180}
              height={180}
              className="opacity-90 hover:opacity-100 transition"
            />
          </div>

          {/* KONTAKT */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 hover:text-white transition">
              <Image
                src="/stopka/stopka-tel-1.png"
                alt="tel"
                width={30}
                height={30}
              />
              <span>+48 502-086-318</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Image
                src="/stopka/stopka-adres.png"
                alt="adres"
                width={30}
                height={30}
              />
              <span>ul. Plebiscytowa 48, 44-280 Rydułtowy</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Image
                src="/stopka/stopka-www.png"
                alt="www"
                width={30}
                height={30}
              />
              <span>www.oristyle.pl</span>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-center gap-4">
            <Link href="https://www.facebook.com/oristyle101/">
              <div className="bg-[#d3c48b] p-3 rounded-lg hover:scale-110 transition">
                <Image
                  src="/stopka/stopka-fb.png"
                  alt="fb"
                  width={40}
                  height={40}
                />
              </div>
            </Link>

            <Link href="https://www.instagram.com/orii_style">
              <div className="bg-[#d3c48b] p-3 rounded-lg hover:scale-110 transition">
                <Image
                  src="/stopka/stopka-inst.png"
                  alt="insta"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>

          {/* LINKI */}
          <div className="space-y-3 text-sm text-center md:text-left">
            <Link href={"/zasady-funkcjonowania-salonu"}>
              <p className="hover:text-white cursor-pointer">
                ZASADY FUNKCJONOWANIA SALONU
              </p>
            </Link>
            <Link href="/polityka-prywatnosci">
              <p className="hover:text-white cursor-pointer">
                POLITYKA PRYWATNOŚCI
              </p>
            </Link>
            <Link href="/regulamin">
              <p className="hover:text-white cursor-pointer">
                REGULAMIN SKLEPU
              </p>
            </Link>
            <Link href="/regulamin-swiadczenia-uslug">
              <p className="hover:text-white cursor-pointer">
                REGULAMIN ŚWIADCZENIA USŁUG
              </p>
            </Link>

            <div className="flex items-center gap-2 justify-center md:justify-start pt-4">
              <Image
                src="/stopka/stopka-right-1.png"
                alt="logo"
                width={40}
                height={40}
              />
              <span className="text-sm">STREFA SPA I RELAKSU</span>
            </div>
          </div>
        </div>

        {/* DÓŁ */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Magia Dotyku — Wszystkie prawa
          zastrzeżone
        </div>
      </div>
    </footer>
  );
}
