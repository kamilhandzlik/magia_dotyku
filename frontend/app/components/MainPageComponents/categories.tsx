"use client";

import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      title: "Poznajmy się",
      img_title: "poznajmy-się",
      image: "/categories/1.png",
      link: "poznajmy-sie",
    },
    {
      title: "Magia dotyku",
      img_title: "magia-dotyku",
      image: "/categories/2.png",
      link: "magia-dotyku",
    },
    {
      title: "Access Bars",
      img_title: "access-bars",
      image: "/categories/4.png",
      link: "access-bars",
    },
    {
      title: "Biorezonans",
      img_title: "biorezonans",
      image: "/categories/5.png",
      link: "biorezonans",
    },
    {
      title: "Wirtualny spacer",
      img_title: "wirtualny-spacer",
      image: "/categories/7.png",
      link: "wirtualny-spacer",
    },
    {
      title: "Bon podarunkowy",
      img_title: "bon-podarunkowy",
      image: "/categories/6.png",
      link: "bon-podarunkowy",
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
      <h1 className="text-[#968956] text-6xl font-semibold text-center">
        Spójrz co możemy razem zrobić
      </h1>
      <br />
      <br />
      <div className="max-w-[650px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {categories.map((category, i) => (
          <CategoryItem key={i} {...category} />
        ))}
      </div>
      <br />
    </>
  );
}
