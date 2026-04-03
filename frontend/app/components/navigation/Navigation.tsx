"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ isDesktop = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "STRONA GŁÓWNA", href: "/" },
    { title: "POZNAJMY SIĘ", href: "/poznajmy-sie" },
    { title: "SZKOLENIA I SPOTKANIA", href: "/szkolenia" },
    { title: "MAGIA DOTYKU", href: "/magia-dotyku" },
    { title: "ACCESS BARS", href: "/access-bars" },
    { title: "BIOREZONANS", href: "/biorezonans" },
  ];

  // DESKTOP
  if (isDesktop) {
    return (
      <div className="flex gap-6">
        {links.map((item) => (
          <div key={item.title} className="relative group">
          <Link
            key={item.title}
            href={item.href}
            className="text-[#d3c48b] hover:text-white transition"
          >
            {item.title}
          </Link>
          </div>
        ))}
      </div>
    );
  }

  //  MOBILE
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
            <div key={item.title} className="px-4 py-2 last:border-b-0">
              <Link
            key={item.title}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-[#d3c48b] hover:text-white transition"
          >
            {item.title}
          </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
