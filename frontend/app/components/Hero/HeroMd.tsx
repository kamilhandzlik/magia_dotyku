"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroMd() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fading text effect
  const opacity = Math.max(1 - scrollY / 400, 0);

  // parallax
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-[45vh] w-full overflow-hidden">
      {/* image */}
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
        {/* little bit of shading/fading */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* TEXT */}
      <div
        className="max-w-4xl px-6 pt-32 text-white transition-opacity duration-300"
        style={{ opacity }}
      >
        <h1 className="text-5xl md:text-7xl font-light mb-6">
          Poznaj samą siebie
        </h1>

        <p className="text-lg leading-relaxed max-w-xl">
          Udajmy się razem w podróż do naszego wnętrza. Odkryjmy co kryje się w
          nas i jak możemy to wykorzystać, by żyć ciesząc się lekkością i
          radością każdego dnia.
        </p>
      </div>
    </section>
  );
}
