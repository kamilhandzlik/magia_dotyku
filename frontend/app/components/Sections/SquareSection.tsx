"use client";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function SquareSection({ title, description, image }: Props) {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-gray-600">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={500}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 leading-relaxed text-lg">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
