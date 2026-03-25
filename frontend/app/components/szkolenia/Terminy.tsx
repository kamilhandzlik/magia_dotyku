export default function Terminy() {
  const events = [
    "PODSTAWY ACCESS CONSCIOUSNESS 09-12.04.2026 – SOPOT ESB z DR DAIN HEER",
    "po raz pierwszy w POLSCE 17-19.04.2026 – WARSZAWA PODSTAWY ACCESS CONSCIOUSNESS",
    "25-28.04.2026 – KRAKÓW 3 Dniowa Klasa na Ciało",
    "01-03.05.2026 – SOPOT 3 Dniowa Klasa na Ciało",
    "15-17.05.2026 – KATOWICE WYJAZD DLA BARS FACYLITATORÓW",
    "22-24.05.2026 – RAJ NA KASZUBACH ACCESS BARS",
    "30.05.2026 – SOPOT ACCESS FACELIFT",
    "31.05.2026 – SOPOT 3 Dniowa Klasa na Ciało",
    "03-05.07.2026 – SOPOT ACCESS BARS",
    "25.07.2026 – SOPOT ACCESS FACELIFT",
    "26.07.2026 – SOPOT PODSTAWY ACCESS CONSCIOUSNESS",
    "31.07-03.08.2026 – SOPOT 3 Dniowa Klasa na Ciało",
    "27-30.08.2026 – KRETOWINY (nad jeziorem z noclegiem)",
    "03-06.09.2026 – KATOWICE PODSTAWY ACCESS CONSCIOUSNESS",
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-center">Terminy</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {events.map((event, index) => (
          <p
            key={index}
            className="text-gray-600 text-lg text-center leading-relaxed border-b border-gray-200 pb-2"
          >
            {event}
          </p>
        ))}
      </div>
    </div>
  );
}
