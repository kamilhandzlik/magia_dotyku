"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Zabiegi() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="w-[20vw] mb-4">
        <Link href="/#" className="block group">
          <div className="relative h-[20vh] overflow-hidden rounded-full shadow-[#d3c48b] hover:shadow-lg transition-shadow duration-300">
            <Image
              fill
              src="/zabiegi/21.png"
              alt="Zabieg 3"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <h1 className="mt-3 text-white text-xl font-semibold text-center hover:text-[#d3c48b] transition-colors duration-300">
            Naturoterapia
          </h1>
        </Link>
      </div>
      <div className="w-[20vw] mb-4">
        <Link href="/#" className="block group">
          <div className="relative h-[20vh] overflow-hidden rounded-full shadow-[#d3c48b] hover:shadow-lg transition-shadow duration-300">
            <Image
              fill
              src="/zabiegi/20.png"
              alt="Zabieg 3"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <h1 className="mt-3 text-white text-xl font-semibold text-center hover:text-[#d3c48b] transition-colors duration-300">
            Zabiegi na twarz
          </h1>
        </Link>
      </div>
      <div className="w-[20vw] mb-4">
        <Link href="/#" className="block group">
          <div className="relative h-[20vh] overflow-hidden rounded-full shadow-[#d3c48b] hover:shadow-lg transition-shadow duration-300">
            <Image
              fill
              src="/zabiegi/19.png"
              alt="Zabieg 3"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <h1 className="mt-3 text-white text-xl font-semibold text-center hover:text-[#d3c48b] transition-colors duration-300">
            Masaże na ciało
          </h1>
        </Link>
      </div>
    </div>
  );
}
