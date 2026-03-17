"use client";
import Link from "next/link";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center space-x-2">
      <div className="bg-[#181a1b] rounded">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-[45px] h-[45px] border border-zinc-400 rounded cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className=" absolute top-[110px] left-2  bg-gray-500 border border-gray-300 shadow-md rounded-2xl cursor-pointer grid sm:grid-cols-1 md:grid-cols-3 ">
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">STRONA GŁÓWNA</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">POZNAJMY SIĘ</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">SZKOLENIA I SPOTKANIA</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">ZABIEGI DOMOWE</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">ZABIEGI GABINETOWE</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">ACCESS BARS</Link>
          </div>
          <div className="p-4 text-white hover:text-pink-300 hover:bg-gray-700 rounded-2xl ">
            <Link href="/#">BIOREZONANS</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
