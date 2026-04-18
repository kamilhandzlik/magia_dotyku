"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Training = {
  id: number;
  title: string;
  slug: string;
  preview: {
    image: string;
    description: string;
  } | null;
};

const SzkoleniaItem = ({
  title,
  image,
  reverse,
  description,
  slug,
}: {
  title: string;
  image: string;
  reverse: boolean;
  description: string;
  slug: string;
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-gray-200 shadow-md rounded-2xl p-6">
      {!reverse && (
        <div className="relative group overflow-hidden rounded-full aspect-square max-w-[400px] mx-auto">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-6 text-lg leading-relaxed text-justify">
        <span className="text-[#968956] text-4xl font-semibold">{title}</span>
        <p className="text-xl text-gray-500">{description}</p>
        <Link
          href={`/trainings/${slug}`}
          className="inline-block mt-4 px-6 py-3 bg-[#968956] text-white rounded-xl text-base font-medium hover:bg-[#968956]/90 transition-colors"
        >
          Dowiedz się więcej
        </Link>
      </div>

      {reverse && (
        <div className="relative group overflow-hidden rounded-full aspect-square max-w-[400px] mx-auto">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default function SzkoleniaItems() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/trainings/")
      .then((res) => res.json())
      .then((data) => setTrainings(data));
  }, []);

  return (
    <>
      <div className="space-y-12">
        {trainings.map((item, i) => (
          <SzkoleniaItem
            key={item.id}
            title={item.title}
            slug={item.slug}
            image={item.preview?.image ?? ""}
            description={item.preview?.description ?? ""}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      <div className="items-center">
        <Link
          href="/szkolenia-lista"
          className="inline-block mt-10 w-full py-6 bg-[#968956] text-white rounded-2xl text-lg font-medium transition-colors duration-300 hover:bg-[#968956]/90"
        >
          <p className="text-center text-3xl font-semibold">
            Zobacz wszystkie szkolenia
          </p>
        </Link>
      </div>
    </>
  );
}
