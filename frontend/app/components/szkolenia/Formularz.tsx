"use client";

import { useState } from "react";

export default function RezerwacjaForm() {
  const [form, setForm] = useState({
    name: "",
    training: "",
    email: "",
    phone: "",
    message: "",
    consent1: false,
    consent2: false,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!form.name) newErrors.name = "Podaj imię i nazwisko";
    if (!form.email) newErrors.email = "Podaj email";
    if (!form.phone) newErrors.phone = "Podaj telefon";
    if (!form.training) newErrors.training = "Wybierz szkolenie";
    if (!form.consent1 || !form.consent2)
      newErrors.consent = "Zaznacz wszystkie zgody";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch("http://localhost:8080/api/rezerwacja/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log("ODPOWIEDŹ Z BACKENDU:", data);

      if (!res.ok) throw new Error(data.error || "Błąd");

      alert("Wysłano ");
    } catch (err) {
      console.error(err);
      alert("Błąd połączenia z backendem ");
    }
  };

  return (
    <section className="bg-[#d6ceca] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#9b6f63] mb-12">
          Zarezerwuj miejsce na szkolenie
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Input
            label="Imię i nazwisko "
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Select
            label="Wybierz Szkolenie"
            name="training"
            value={form.training}
            onChange={handleChange}
            error={errors.training}
          />

          <Input
            label="Adres email "
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Numer telefonu "
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              dodatkowe informacje
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full text-gray-900 border border-[#9b6f63] bg-transparent p-3 h-32 focus:outline-none"
            />
          </div>

          <div className="space-y-4 text-sm text-gray-700 pt-4">
            <CheckboxItem
              label="Oświadczam, iż zapoznałem/am się z polityką prywatności."
              checked={form.consent1}
              onChange={(e: any) =>
                setForm({ ...form, consent1: e.target.checked })
              }
            />

            <CheckboxItem
              label={`Wysyłając wiadomość wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu kontaktowym w celu skontaktowania się ze mną i odpowiedzi na moją wiadomość, w tym na przesłanie mi oferty handlowej zgodnie z Polityką prywatności i plików cookies (podlinkowane do polityki prywatności) przez Administratora, „Oristyle/Magia Dotyku” Aleksandra Burczyńska, ul. Plebiscytowa 48, 44-280 Rydułtowy, NIP 6471587893, REGON 368412418. Oświadczam, że podanie danych jest dobrowolne, lecz konieczne do przetworzenia zapytania oraz iż zostałem/am poinformowany/a o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia.`}
              checked={form.consent2}
              onChange={(e: any) =>
                setForm({ ...form, consent2: e.target.checked })
              }
            />

            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent}</p>
            )}
          </div>

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

function Input({ label, name, value, onChange, error }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full text-gray-800 border-b p-2 bg-transparent focus:outline-none ${
          error ? "border-red-500" : "border-[#9b6f63]"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

function Select({ label, name, value, onChange, error }: any) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border-b text-gray-700 bg-transparent p-2 focus:outline-none ${
          error ? "border-red-500" : "border-[#9b6f63]"
        }`}
      >
        <option value="">Wybierz...</option>
        <option value="Access Bars">Access Bars</option>
        <option value="Szkolenie 1">Szkolenie 1</option>
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

function CheckboxItem({ label, checked, onChange }: any) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <div className="relative mt-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-4 h-4 border border-[#9b6f63] checked:bg-[#9b6f63]"
        />

        <svg
          className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.586l6.543-6.543a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <span className="leading-relaxed whitespace-pre-line">{label}</span>
    </label>
  );
}
