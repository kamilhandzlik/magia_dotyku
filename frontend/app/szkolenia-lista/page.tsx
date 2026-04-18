"use client";

import { useEffect, useState } from "react";
import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

type Training = {
  id: number;
  title: string;
  slug: string;
  preview: {
    image: string;
    description: string;
  } | null;
};

const pdfPozycje = [
  { tytul: "Programy szkoleń" },
  { tytul: "Cennik" },
  { tytul: "Oferta szkoleń" },
];

function ListaSzkolen() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/trainings/")
      .then((res) => res.json())
      .then((data) => setTrainings(data));
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Lista Szkoleń</h2>
      <div className="flex flex-col gap-4">
        {trainings.map((item) => (
          <Link
            key={item.id}
            href={`/trainings/${item.slug}`}
            className="flex items-center gap-5 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <img
              src={item.preview?.image ?? ""}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-md flex-shrink-0"
            />
            <div>
              <p className="text-3xl font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-xl text-gray-500 mt-1">
                {item.preview?.description ?? ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TabelkaPDF() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-3 border border-[#968956] rounded-lg overflow-hidden">
        {pdfPozycje.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center gap-6 p-8 ${
              i < pdfPozycje.length - 1 ? "border-r border-[#968956]" : ""
            }`}
          >
            <p className="text-gray-700 text-center">{p.tytul}</p>
            <button className="flex items-center gap-2 bg-rose-100 text-[#968956] text-sm font-medium px-4 py-2 rounded hover:bg-rose-200 transition-colors">
              PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SzkoleniaLista() {
  return (
    <>
      <HeroMd
        title="Pełna lista szkoleń"
        description="tutaj znajdziesz wszystkie szkolenia jakie obecnie wykonuję"
      />
      <div className="max-w-5xl mx-auto px-6 py-20">
        <ListaSzkolen />
        {/* <TabelkaPDF /> */}
      </div>
      <Footer />
    </>
  );
}
