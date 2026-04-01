"use client";

import Checkbox from "./chekboxy";

export default function RezerwacjaForm() {
  return (
    <section className="bg-[#d6ceca] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#9b6f63] mb-12">
          Zarezerwuj miejsce na szkolenie
        </h2>

        <form className="space-y-8">
          <Input label="Imię i nazwisko " />
          <Select label="Wybierz Szkolenie" />
          <Input label="Adres email " />
          <Input label="Numer telefonu " />

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              dodatkowe informacje
            </label>
            <textarea className="w-full border border-[#9b6f63] bg-transparent p-3 h-32 focus:outline-none" />
          </div>
          <Checkbox />
          <div className="text-center pt-6">
            <button className="bg-[#9b6f63] text-white px-10 py-3 tracking-widest">
              WYŚLIJ
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <p className="space-y-4 text-sm text-gray-700 pt-4">
              Zgłoszenie na szkolenie wiąże się z wpłatą zadatku w wysokości 200
              zł przy rezerwacji miejsca na klasie Bars i 500 zł w przypadku
              wyboru klasy Podstawy, jej wpłata gwarantuje miejsce.
            </p>
            <a className="space-y-4 text-sm text-gray-700 pt-4">
              <p>Dane do przelewu:</p>
              <p>Magia dotyku Ola Burczyńska</p>
              <p>numer konta bankowego</p>
              <p>tytułem: miasto + imię i nazwisko</p>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <input
        type="text"
        className="w-full border-b border-[#9b6f63] bg-transparent p-2 focus:outline-none"
      />
    </div>
  );
}

function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <select className="w-full border-b text-gray-700 border-[#9b6f63] bg-transparent p-2 focus:outline-none">
        <option>Wybierz...</option>
        <option>Access Bars</option>
        <option>Szkolenie 1</option>
      </select>
    </div>
  );
}
