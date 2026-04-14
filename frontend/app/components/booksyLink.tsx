"use client";

export default function BooksyLink() {
  return (
    <a
      href="https://booksy.com/pl-pl/142368_magia-dotyku-strefa-spa-i-relaxu_masaz_12875_rydultowy?do=invite#ba_s=dl_1"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center gap-3
        bg-white border border-[#9b6f5a]
        px-6 py-3 rounded-xl
        shadow-sm
        transition-all duration-300
        hover:scale-105 hover:shadow-md hover:bg-[#f8f6f4]
        cursor-pointer
      "
    >
      {/* LOGO */}
      <img src="Booksy_Logo.png" alt="Booksy" className="w-25 h-6" />

      {/* TEKST */}
      <span className="text-[#9b6f5a] font-medium">
        Umów wizytę przez Booksy
      </span>
    </a>
  );
}
