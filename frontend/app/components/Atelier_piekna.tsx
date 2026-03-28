"use client";

import Link from "next/link";
import Image from "next/image";

export default function AtelierPiekna() {
  const categories = [
    {
      title: "Pielęgnacja twarzy",
      img_title: "pielegnacja-twarzy",
      image: "/atelier-ikony/10.png",
      link: "#",
    },
    {
      title: "pielęgnacja ciała",
      img_title: "pielegnacja-ciala",
      image: "/atelier-ikony/11.png",
      link: "#",
    },
    {
      title: "Warsztaty oddechowe",
      img_title: "access-bars",
      image: "/atelier-ikony/12.png",
      link: "#",
    },
    {
      title: "Plany suplementacyjne",
      img_title: "plany-suplementacyjne",
      image: "/atelier-ikony/13.png",
      link: "#",
    },
    {
      title: "Badanie cery - analiza skóry",
      img_title: "wirtualny-spacer",
      image: "/categories/7.png",
      link: "#",
    },
    {
      title: "Zasady funkcjonowania salonu",
      img_title: "zasady-funkcjonowania-salonu",
      image: "/categories/8.png",
      link: "#",
    },
  ];

  const CategoryItem = ({ title, img_title, image, link }) => {
    return (
      <div className="w-full max-w-[160px] mx-auto">
        <Link href={link} className="block group">
          <div className="relative aspect-square overflow-hidden rounded-full border bshadow-md group-hover:shadow-lg transition-all duration-300">
            <Image
              src={image}
              alt={img_title}
              fill
              className="object-cover scale-125 transition-transform duration-300 group-hover:scale-135"
            />
          </div>

          <h1 className="mt-3 text-gray-500 text-xl font-semibold text-center group-hover:text-green-950 transition-colors duration-300">
            {title}
          </h1>
        </Link>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-[#968956] text-4xl font-semibold text-center py-8">
        Atelier piękna - odkryj magię dotyku i naturalne piękno w moim salonie
        urody
      </h1>
      <br />
      <br />
      <div className="max-w-[650px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {categories.map((category, i) => (
          <CategoryItem key={i} {...category} />
        ))}
      </div>
    </>
  );
}
