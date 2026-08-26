"use client";

import Image from "next/image";

import Footer from "../components/Footer/Footer";
import HeroMd from "../components/Hero/HeroMd";

export default function PoznajmySie() {
  return (
    <>
      <HeroMd
        title="Poznajmy się"
        description="Udajmy się razem w podróż do naszego wnętrza. Odkryjmy co kryje się w nas i jak możemy to wykorzystać, by żyć ciesząc się lekkością i radością każdego dnia."
      />
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />
        <div className="justify-center max-w-[800px] mx-auto mt-20 space-y-6 text-center text-l text-pretty">
          <p>
            Strach przed osądem, przed krytyką, przed byciem sobą wiele osób
            wstrzymuje aby żyć, wybierać to co dla nich dobre.
          </p>
          <p>
            Ze mną było podobnie, kiedy zaczęłam tworzyć Magię Dotyku Strefę Spa
            i Relaxu, moją nową ścieżkę zawodową z planem odejścia z etatu, a z
            każdej strony słyszałam „po co Ci to” , „trudno prowadzić swój
            biznes”, „już masz swoje lata” itd…
          </p>
          <p>
            lecz moje wewnętrze JA, aż krzyczało z radości na samą myśl, że to
            powstaje.{" "}
          </p>
          <p>
            I przestałam mówić, a zaczęłam tworzyć. Krok po kroczku, dzień po
            dniu przestrzeń w której indywidualnie i holistycznie podchodzę do
            każdego klienta poprzez kompleksowe podejście – nie tylko wykonanie
            samego zabiegu, ale także wsłuchania się w potrzeby wynikające z
            głębszych płaszczyzn pozwalające na to by moich klientów wesprzeć w
            zdrowieniu i ich wewnętrznej zmianie.
          </p>
          <p>
            Mam pełną wiarę, że trwałe efekty można osiągnąć dzięki współpracy
            przez to uważnie słucham i wdrażam plan działania oparty na
            zabiegach, budowaniu nowych zdrowych nawyków żywieniowych, planach
            suplementacyjnych oraz tworzeniu świadomości po co to robimy.
          </p>

          <p>
            Poprzez takie podejście harmonijnie pracując z Twoim ciałem,
            świadomością wprowadzamy BALANS do Twojego życia, byś mogła/mógł
            odnaleźć CISZĘ W SOBIE, by USŁYSZEĆ co do Ciebie mówi TWOJA
            ŚWIADOMOŚĆ, ENERGIA kierująca Twoim CIAŁEM i ODDECH, który tak
            rzadko zauważasz w codzienności.
          </p>
          <p>
            Dzięki wielkie wszystkim, którzy zaufali mojej wizji tworzenia
            przestrzeni Magii Dotyku Strefy Spa i Relaxu pozwalając mi
            towarzyszyć SOBIE w swojej DRODZE ŚWIADOMEJ ZMIANY, stając się żywą
            reklamą salonu.{" "}
          </p>
          <p>
            Z wdzięcznością , radością i lekkością zapraszam również Ciebie do
            tej przestrzeni, gdzie zrozumienie, spokój i empatia jaką się z Tobą
            dzielę dodają Tobie więcej pewności siebie, odkryją moc i energię
            jaka w Tobie drzemie w zgiełku codziennych spraw, kiedy zapominasz o
            tym, że też JESTEŚ WAŻNA/Y.
          </p>
          <p>
            <span className="text-[#968956]">
              Do zobaczenia na DRODZE ŚWIDOMEJ ZMIANY Ola Burczyńska
            </span>
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/pictures/IMG_5.jpeg"
              alt="szczkolenia"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 leading-relaxed">
            <h2 className="text-4xl font-bold">Poznajmy się</h2>

            <p className="text-xl">
              Nazywam się{" "}
              <span className="text-[#968956] font-semibold">
                Ola Burczyńska
              </span>{" "}
              i witam Cię serdecznie na mojej stronie
            </p>

            <p className="text-xl">
              Zapraszam Cię do wspólnej podróży po{" "}
              <span className="text-[#968956] font-semibold">
                Radosnej Stronie Życia
              </span>
              , gdzie{" "}
              <span className="text-[#968956] font-semibold">
                harmonijnie łączymy DUSZĘ – CIAŁO – UMYSŁ
              </span>
            </p>
            <p className="text-xl">
              Przestrzeń jaką tworzę w Magii Dotyku Strefy Spa i Relaxu to nie
              tylko praca z ciałem manualnie. Choć ma to duże znaczenia to
              jednak bez posłuchania czego ciało potrzebuje nie z umysłu lecz z
              potrzeby znaczenie w jednym miejscu jest utworzenie PRZESTRZENI
              gdzie zrozumienie, spokój i empatia jaką się dzielę dodały Wam
              więcej pewności siebie, odkrycia mocy i energii jaka w Was
              drzemie.{" "}
            </p>
            <div className="max-w-[900px] mx-auto mt-20 space-y-5 text-center">
              <h3 className="text-2xl font-semibold text-[#968956]">Bo…</h3>

              <div className="space-y-4 text-lg">
                <p>Jak często o SOBIE myślisz?</p>
                <p>Ile dajesz SOBIE, zanim dasz innym?</p>
                <p>Ile razy światu mówisz TAK, kiedy SOBIE mówisz NIE?</p>
                <p>Czy to, co robisz dla siebie – naprawdę Ci wystarcza?</p>
              </div>
              <div className="space-y-5">
                <p className="text-xl">A może zacznij…</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto mt-20 space-y-6 text-center text-xl">
          <p className="text-2xl font-semibold text-[#968956]">
            SIEBIE traktować jak najlepszą przyjaciółkę, kogoś kogo kochasz,
            żeby czuł się dobrze.
          </p>

          <p>Dotrzymuj sobie danego słowa.</p>
          <p>
            Bądź tam gdzie chciałabyś być – jakbyś umówiła się z przyjaciółką.
          </p>
          <p>Rób to co sobie zaplanowałaś.</p>
          <p>Jeśli UWAŻASZ, że to samolubne – TRUDNO wytrzymaj.</p>
          <p>
            Postaw SIEBIE na pierwszym miejscu i przetrwaj, chociażby
            <span className="text-[#968956] font-semibold">
              {" "}
              TRZY MIESIĄCE i ZOBACZ, KIM BĘDZIESZ
            </span>
          </p>
        </div>

        <div className="max-w-[900px] mx-auto mt-20 text-xl space-y-6">
          <p>
            Wiem, że to trudne dlatego ZAPRASZAM serdecznie każdego, kto pragnie
            oderwać się od zgiełku codzienności, odkryć wrażliwość na swoje
            piękno, a co najważniejsze CIEBIE pragnącej/go żyć z SOBĄ w zgodzie
            do mojej holistycznej przestrzeni po RADOSNEJ STRONY ŻYCIA.
          </p>
          <div className="max-w-[900px] mx-auto mt-20 text-xl space-y-6">
            <p className="text-bold text-3xl text-center">
              O TWOJEJ WARTOŚCI świadczy czas, jaki SOBIE dajesz.
            </p>
          </div>
          <p>
            Otrzymasz tu możliwość
            <span className="text-[#968956] font-semibold">
              {" "}
              pracy z SOBĄ
            </span>{" "}
            podczas
            <span className="text-[#968956] font-semibold">
              {" "}
              spotkań na sesjach i zabiegach indywidulanych,
            </span>{" "}
            a także w niewielkich
            <span className="text-[#968956] font-semibold">
              {" "}
              grupach gdzie pracujemy nad duszą ciałem, i umysłem
            </span>{" "}
            ( masaże, sesje access bars, warsztaty oddechowe, joga twarzy,
            spotkania rozwojowe i nie tylko)
          </p>
          <p>
            O TWOJEJ WARTOŚCI świadczy czas, jaki SOBIE dajesz i wysiłek jaki
            wkładasz w SWÓJ ROZWÓJ i ROZKWIT.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto mt-20 space-y-6 text-center text-xl">
          <p>
            Nie chcę Cię przekonywać, że trzeba dbać o siebie, chcę Cię
            zainspirować, że
          </p>
          <p className="text-2xl font-semibold text-[#968956]">
            WARTO to robić dla SIEBIE
          </p>
        </div>
        <div className="max-w-[900px] mx-auto mt-20 text-xl space-y-6">
          <p>
            bo największym PREZENTEM jaki możesz sobie OFIAROWAĆ to SŁUCHAĆ TEGO
            co potrzebuje twoje ciało, bo twoja dusza, energia, intuicja podsyła
            nieustanne sygnały, wystarczy NAUCZYĆ się ich słuchać i podążać za
            nim. A życie STANIE się CUDOWNĄ PODRÓŻĄ, PRZYGODĄ do ODKRYCIA.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto mt-20 space-y-6 text-center text-xl">
          <p>Życząc Ci cudowności na każdy moment życia</p>
          <p>i zapraszam do wspólnej podróży </p>
          <p>Ola Burczyńska</p>
        </div>
        <div className="max-w-[900px] mx-auto mt-20 text-xl space-y-6">
          <p>
            jak widzisz strona jest obszerna, bo nasze życie też takie jest
            dlatego
            <span className="text-[#968956] font-semibold">
              {" "}
              na początku znajdź tu dla siebie swój obszar
            </span>
            , który
            <span className="text-[#968956] font-semibold">
              {" "}
              STANIE SIĘ TWOIM POCZĄTKIEM ZMIANY
            </span>
            , by z czasem poszerzać go by ZOBACZYĆ, że dbając o 3 przestrzenie
            znajduje się w sobie więcej spokoju, radości życia z dużą dozą
            uważności dla siebie.
          </p>
          <p>
            ŻYCIE to PODRÓŻ, dlatego spodziewaj się wielu zmian na stronie, gdyż
            życie wokół się zmienia i ja nieustannie za Tą zmianą podążam do
            czego i Ciebie serdecznie zapraszam.
          </p>
          <p>Wówczas życie jest przygodą i nieustanną podrożą.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
