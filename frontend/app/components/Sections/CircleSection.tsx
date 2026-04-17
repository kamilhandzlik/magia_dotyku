"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function CircleSection({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <div className="">
      <div
        className={`
        flex flex-col max-w-[1300px] mx-auto md:flex-row items-center gap-10 my-12
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
      >
        {/* Obraz */}
        <div className="w-[350px] h-[350px] relative flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Tekst */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl text-[#968956] font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
