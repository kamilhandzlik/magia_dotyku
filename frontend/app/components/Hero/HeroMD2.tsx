"use client";

import { useEffect, useState } from "react";

type HeroMd2Props = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function HeroMd2({
  title,
  description,
  imageSrc,
}: HeroMd2Props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 400, 0);
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-[45vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <img src={imageSrc} alt="hero" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        className="max-w-4xl px-6 pt-32 text-white transition-opacity duration-300"
        style={{ opacity }}
      >
        <h1 className="text-5xl md:text-7xl font-light mb-6">{title}</h1>
        <p className="text-lg leading-relaxed max-w-xl">{description}</p>
      </div>
    </section>
  );
}
