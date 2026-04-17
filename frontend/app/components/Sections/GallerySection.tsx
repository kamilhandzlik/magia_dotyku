"use client";
import Image from "next/image";

type Props = {
  items: { title: string; image: string }[];
};

export default function GallerySection({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4">
      {items.map((item, index) => (
        <div key={index} className="relative group overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
