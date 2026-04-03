"use client";

import Image from "next/image";
import Link from "next/link";

export default function SzkoleniaItems() {
  const items = [
    {
      title: "Access Bars",
      image: "/pictures/IMG_1.png",
      reverse: false,
      description:
        "To delikatna technika, która polega na stymulacji 32 punktów na głowie, zwanych Barsami. Każdy z tych punktów odpowiada za różne aspekty naszego życia, takie jak zdrowie, relacje, kreatywność czy pieniądze. Poprzez delikatne dotykanie tych punktów, możemy uwolnić nagromadzone napięcia i ograniczenia, które blokują naszą energię i potencjał. Access Bars to nie tylko relaksująca terapia, ale także narzędzie do transformacji i rozwoju osobistego.",
    },
    {
      title: "Access Bars",
      image: "/pictures/IMG_1.png",
      reverse: true,
      description:
        "To delikatna technika, która polega na stymulacji 32 punktów na głowie, zwanych Barsami. Każdy z tych punktów odpowiada za różne aspekty naszego życia, takie jak zdrowie, relacje, kreatywność czy pieniądze. Poprzez delikatne dotykanie tych punktów, możemy uwolnić nagromadzone napięcia i ograniczenia, które blokują naszą energię i potencjał. Access Bars to nie tylko relaksująca terapia, ale także narzędzie do transformacji i rozwoju osobistego.",
    },
  ];

  const SzkoleniaItem = ({ title, image, reverse, description }) => {
    return (
      <div className="grid md:grid-cols-2 gap-12 items-center bg-[white] shadow-gray-200 shadow-md rounded-2xl p-6">
        {!reverse && (
          <div className="relative group overflow-hidden rounded-full aspect-square max-w-[400px] mx-auto">
            <Image
              src={image}
              alt={title}
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <span className="text-[#968956] text-4xl font-semibold">{title}</span>
          <p className="text-xl text-gray-500">{description}</p>
        </div>

        {reverse && (
          <div className="relative group overflow-hidden rounded-full aspect-square max-w-[400px] mx-auto">
            <Image
              src={image}
              alt={title}
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <div className="space-y-12">
        {items.map((item, i) => (
          <SzkoleniaItem key={i} {...item} />
        ))}
      </div>
      <div className="items-center">
        <Link
          href="/szkolenia-lista"
          className="inline-block mt-10 w-full  py-6 bg-[#968956] text-white rounded-2xl text-lg font-medium transition-colors duration-300 hover:bg-[#968956]/90"
        >
          <p className="text-center text-3xl font-semibold">
            Zobacz wszystkie szkolenia
          </p>
        </Link>
      </div>
    </>
  );
}
