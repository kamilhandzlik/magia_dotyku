"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ isDesktop = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "STRONA GŁÓWNA",
    "POZNAJMY SIĘ",
    "SZKOLENIA I SPOTKANIA",
    "ZABIEGI GABINETOWE",
    "ACCESS BARS",
    "BIOREZONANS",
  ];

  // 💻 DESKTOP
  if (isDesktop) {
    return (
      <div className="flex gap-6">
        {links.map((item) => (
          <Link
            key={item}
            href="/#"
            className="text-[#d3c48b] hover:text-white transition"
          >
            {item}
          </Link>
        ))}
      </div>
    );
  }

  // 📱 MOBILE
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-[45px] h-[45px] hover:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-[60px] left-0 bg-[#131313] border border-black shadow-md rounded-2xl w-[250px]">
          {links.map((item) => (
            <div
              key={item}
              className="p-4 text-[#d3c48b] hover:text-white hover:bg-black rounded-2xl"
            >
              <Link href="/#">{item}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
