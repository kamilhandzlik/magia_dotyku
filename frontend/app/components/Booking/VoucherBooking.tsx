"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

export default function VoucherBooking() {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedHour, setSelectedHour] = useState(null);
  const [email, setEmail] = useState("");
  const [nameBuyer, setNameBuyer] = useState("");
  const [nameRecipient, setNameRecipient] = useState("");
  const hours = ["10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!selectedDate || !selectedHour) {
      alert("Wybierz datę i godzinę");
      return;
    }

    if (
      !selectedDate ||
      !selectedHour ||
      !email ||
      !nameBuyer ||
      !nameRecipient
    ) {
      alert("Uzupełnij wszystkie pola");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/voucher/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate,
          hour: selectedHour,
          email: email,
          nameBuyer: nameBuyer,
          nameRecipient: nameRecipient,
        }),
      });

      const data = await res.json();

      console.log("ODPOWIEDŹ:", data);

      if (!res.ok) throw new Error(data.error);

      alert("Voucher wysłany");
    } catch (err) {
      console.error(err);
      alert("Coś poszło nie tak");
    }
  };

  return (
    <section className="bg-[#f8f6f4] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl text-black font-semibold text-center mb-8">
          Bon Podarunkowy
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-600">
          {/* KALENDARZ */}
          <div>
            <p className="mb-3 text-justify font-medium">
              Zaproponuj odpowiedni dla siebie dzień i godzinę. Otrzymasz w
              mailu potwrdzenie czy wybrany termin jest dostępny czy zostanie
              zaproponowany inny dzień w określonej godzinie:
            </p>

            <div className="flex justify-center">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                locale={pl}
                disabled={{ before: new Date() }}
              />
            </div>

            {selectedDate && (
              <p className="mt-2 text-center text-sm text-gray-600">
                Wybrano:{" "}
                <strong>{format(selectedDate, "PPP", { locale: pl })}</strong>
              </p>
            )}
          </div>

          {/* GODZINY */}
          <div>
            <p className="mb-3 font-medium">Wybierz godzinę:</p>

            <div className="grid grid-cols-3 gap-3">
              {hours.map((hour) => (
                <button
                  type="button"
                  key={hour}
                  onClick={() => setSelectedHour(hour)}
                  className={`p-3 rounded-xl border text-sm transition
                    ${
                      selectedHour === hour
                        ? "bg-[#9b6f5a] text-white border-[#9b6f5a]"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-medium">Twój email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6f5a]"
            />
            <label className="block mb-2 font-medium">
              Imię i nazwisko osoby kupującej bon:
            </label>
            <input
              type="text"
              required
              value={nameBuyer}
              onChange={(e) => setNameBuyer(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6f5a]"
            />
            <label className="block mb-2 font-medium">
              Imię i nazwisko osoby otrzymującej bon:
            </label>
            <input
              type="text"
              required
              value={nameRecipient}
              onChange={(e) => setNameRecipient(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6f5a]"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#9b6f5a] text-white py-3 rounded-xl rounded-xl hover:opacity-90 transition"
          >
            Kup bon
          </button>
        </form>
      </div>
    </section>
  );
}
