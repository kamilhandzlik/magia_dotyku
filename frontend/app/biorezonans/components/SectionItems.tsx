"use client";
import Image from "next/image";

export default function SectionItems() {
  const sections = [
    {
      title: "Układ krążenia i naczyń mózgowych:",
      image: "/biorezonans/serce.png",
      reverse: false,
      items: [
        "Gęstość krwi",
        "Krystalizacja cholesterolu",
        "Tłuszcz we krwi",
        "Ciśnienie",
        "Elastyczność naczyń krwionośnych",
        "Zapotrzebowanie serca na krew",
        "Rzeczywiste ukrwienie mięśnia sercowego",
        "Zużycie tlenu przez mięsień sercowy",
        "Praca serca",
        "Blokada wyrzutu lewej komory serca",
        "Wydajność lewej komory serca",
        "Elastyczność naczyń wieńcowych",
        "Ciśnienie ukrwienia wieńcowego",
        "Elastyczność naczyń mózgowych",
        "Miażdżyca naczyń mózgowych",
      ],
    },
    {
      title: "Funkcje przewodu pokarmowego:",
      image: "/biorezonans/przewod-pokarmowy.png",
      reverse: true,
      items: [
        "Współczynnik wydzielania pepsyny",
        "Współczynnik perystaltyki żołądkowej",
        "Współczynnik absorpcji żołądkowej",
        "Współczynnik perystaltyki jelita cienkiego",
        "Współczynnik absorpcji jelita cienkiego",
      ],
    },
    {
      title: "Funkcja jelit:",
      image: "/biorezonans/funkcje-jelit.png",
      reverse: false,
      items: [
        "Współczynnik perystaltyki jelita grubego",
        "Wchłanialność w okrężnicy",
        "Flora bakteryjna w jelicie grubym",
      ],
    },
    {
      title: "Funkcje płuc:",
      image: "/biorezonans/funkcje-pluc-600x592.png",
      reverse: true,
      items: [
        "Infekcje górnych dróg oddechowych",
        "Wydolność płuc",
        "Odporność dróg oddechowych",
        "Zawartość tlenu we krwi – pasożyty odjelitowe",
      ],
    },
    {
      title: "Mózg:",
      image: "/biorezonans/mozg.png",
      reverse: false,
      items: [
        "Poziom dotlenienia mózgu",
        "Miażdżyca naczyń mózgowych",
        "Stan unerwienia czaszkowego",
        "Indeks chwiejności wegetatywnej",
        "Indeks pamięci (ZS)",
      ],
    },
    {
      title: "Funkcje wątroby i pęcherzyka żółciowego:",
      image: "/biorezonans/watroba-i-pecherzy.png",
      reverse: true,
      items: [
        "Metabolizm białek",
        "Produkcja energii",
        "Funkcja detoksykacyjna",
        "Produkcja żółci",
        "Zawartość tłuszczu w wątrobie",
        "Przeciwciała-pasożyty w p.ż. (A/G)",
        "Bilirubina całkowita (TBIL)",
        "Kamienie wapniowe w p.ż. (ALP)",
        "Kamienie cholesterolowe w p.ż. (TBA)",
        "Bilirubina (DBIL)",
      ],
    },
  ];

  const SectionItem = ({ title, items, image, reverse = false }) => {
    return (
      <div className="grid md:grid-cols-2 gap-12 items-center bg-[#131313] rounded-2xl p-6">
        {!reverse && (
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <span className="text-amber-400 text-2xl font-semibold">{title}</span>

          <ul className="space-y-2 text-gray-200 list-disc list-inside mt-4">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {reverse && (
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {sections.map((section, i) => (
        <SectionItem key={i} {...section} />
      ))}
    </div>
  );
}
