"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroMain() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // effect of fading text
  const opacity = Math.max(1 - scrollY / 400, 0);

  // parallax effect
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <Image
          src="/hero/hero-glowne.png"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
        {/* fading */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* TEXT */}
      <div
        className="max-w-4xl px-6 pt-32 text-white transition-opacity duration-300"
        style={{ opacity }}
      >
        <h1 className="text-5xl md:text-7xl font-light mb-6">
          W drodze do siebie
        </h1>

        <p className="text-lg leading-relaxed max-w-xl">
          Czy masz świadomość potęgi mocy, którą posiadasz? Zmieniając swój stan
          wewnętrzny, zmieniasz swój świat zewnętrzny.
        </p>
      </div>
    </section>
  );
}
