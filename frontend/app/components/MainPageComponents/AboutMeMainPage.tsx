"use client";

import Image from "next/image";

export default function AboutMeMainPage() {
  return (
    <section className="relative overflow-hidden py-20 px-6 text-gray-600">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group overflow-hidden rounded-full aspect-square">
          <Image
            src="/pictures/IMG_6.jpeg"
            alt="szczkolenia"
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 leading-relaxed text-xl">
          <h2 className="text-4xl font-bold">O mnie</h2>

          <p>
            Nazywam się{" "}
            <span className="text-[#968956] font-semibold">Ola Burczyńska</span>{" "}
            i witam Cię serdecznie
          </p>

          <p>
            Zapraszam Cię do wspólnej podróży po{" "}
            <span className="text-[#968956] font-semibold">
              Radosnej Stronie Życia
            </span>
            , gdzie harmonijnie łączymy DUSZĘ – CIAŁO – UMYSŁ.
          </p>

          <p>
            Moją ideą stworzenia tej przestrzeni jest miejsce pełne{" "}
            <span className="text-[#968956]">
              spokoju, empatii i zrozumienia
            </span>
            , które pomaga odkryć Twoją wewnętrzną siłę.
          </p>

          <p>Najtrudniej powiedzieć coś o sobie . Znasz to?</p>
        </div>
      </div>
      <div className="justify-center max-w-[800px] mx-auto mt-20 space-y-6 text-center text-xl">
        <p>
          Tak strach przed osądem, przed krytyką, przed byciem sobą wiele osób
          wstrzymuje aby żyć, wybierać to co dla nich dobre.
        </p>
        <p>
          Ze mną było podobnie, kiedy zaczęłam tworzyć Magię Dotyku Strefę Spa i
          Relaxu, moją nową ścieżkę zawodową z planem odejścia z etatu, a z
          każdej strony słyszałam „po co Ci to” , „trudno prowadzić swój
          biznes”, „już masz swoje lata” itd…
        </p>
        <p>
          lecz moje wewnętrze JA, aż krzyczało z radości na samą myśl, że to
          powstaje.{" "}
        </p>
        <p>
          I przestałam mówić, a zaczęłam tworzyć. Krok po kroczku, dzień po dniu
          przestrzeń w której indywidualnie i holistycznie podchodzę do każdego
          klienta poprzez kompleksowe podejście – nie tylko wykonanie samego
          zabiegu, ale także wsłuchania się w potrzeby wynikające z głębszych
          płaszczyzn pozwalające na to by moich klientów wesprzeć w zdrowieniu i
          ich wewnętrznej zmianie.
        </p>
        <p>
          Mam pełną wiarę, że trwałe efekty można osiągnąć dzięki współpracy
          przez to uważnie słucham i wdrażam plan działania oparty na zabiegach,
          budowaniu nowych zdrowych nawyków żywieniowych, planach
          suplementacyjnych oraz tworzeniu świadomości po co to robimy.
        </p>
        <p>
          Poprzez takie podejście harmonijnie pracując z Twoim ciałem,
          świadomością wprowadzamy BALANS do Twojego życia, byś mogła/mógł
          odnaleźć CISZĘ W SOBIE, by USŁYSZEĆ co do Ciebie mówi TWOJA
          ŚWIADOMOŚĆ, ENERGIA kierująca Twoim CIAŁEM i ODDECH, który tak rzadko
          zauważasz w codzienności.
        </p>
        <p>
          Dzięki wielkie wszystkim, którzy zaufali mojej wizji tworzenia
          przestrzeni Magii Dotyku Strefy Spa i Relaxu pozwalając mi towarzyszyć
          SOBIE w swojej DRODZE ŚWIADOMEJ ZMIANY, stając się żywą reklamą
          salonu.{" "}
        </p>
        <p>
          Z wdzięcznością , radością i lekkością zapraszam również Ciebie do tej
          przestrzeni, gdzie zrozumienie, spokój i empatia jaką się z Tobą
          dzielę dodają Tobie więcej pewności siebie, odkryją moc i energię jaka
          w Tobie drzemie w zgiełku codziennych spraw, kiedy zapominasz o tym,
          że też JESTEŚ WAŻNA/Y.
        </p>
        <p>
          <span className="text-[#968956]">
            Do zobaczenia na DRODZE ŚWIDOMEJ ZMIANY Ola Burczyńska
          </span>
        </p>
      </div>
    </section>
  );
}
