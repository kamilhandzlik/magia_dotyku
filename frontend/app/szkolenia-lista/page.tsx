import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

const szkolenia = [
  {
    id: 1,
    nazwa: "Szkolenie przykładowe 1",
    opis: "Krótki opis szkolenia, czego można się nauczyć i dla kogo jest przeznaczone.",
    obrazek: "pictures/IMG_1.png",
    link: "#",
  },
  {
    id: 2,
    nazwa: "Szkolenie przykładowe 2",
    opis: "Krótki opis szkolenia, czego można się nauczyć i dla kogo jest przeznaczone.",
    obrazek: "pictures/IMG_1.png",
    link: "#",
  },
  {
    id: 3,
    nazwa: "Szkolenie przykładowe 3",
    opis: "Krótki opis szkolenia, czego można się nauczyć i dla kogo jest przeznaczone.",
    obrazek: "pictures/IMG_1.png",
    link: "#",
  },
];

const pdfPozycje = [
  { tytul: "Programy szkoleń" },
  { tytul: "Cennik" },
  { tytul: "Oferta szkoleń" },
];

function ListaSzkolen() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Lista Szkoleń</h2>
      <div className="flex flex-col gap-4">
        {szkolenia.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="flex items-center gap-5 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <img
              src={item.obrazek}
              alt={item.nazwa}
              className="w-40 h-40 object-cover rounded-md flex-shrink-0"
            />
            <div>
              <p className="text-3xl font-semibold text-gray-800">
                {item.nazwa}
              </p>
              <p className="text-xl text-gray-500 mt-1">{item.opis}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function TabelkaPDF() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-3 border border-[#968956] rounded-lg overflow-hidden">
        {pdfPozycje.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center gap-6 p-8 ${
              i < pdfPozycje.length - 1 ? "border-r border-[#968956]" : ""
            }`}
          >
            <p className="text-gray-700 text-center">{p.tytul}</p>
            <button className="flex items-center gap-2 bg-rose-100 text-[#968956] text-sm font-medium px-4 py-2 rounded hover:bg-rose-200 transition-colors">
              PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SzkoleniaLista() {
  return (
    <>
      <HeroMd
        title="Pełna lista szkoleń"
        description="tutaj znajdziesz wszystkie szkolenia jakie obecnie wykonuję"
      />
      <div className="max-w-5xl mx-auto px-6 py-20">
        <ListaSzkolen />
      </div>
      <Footer />
    </>
  );
}
