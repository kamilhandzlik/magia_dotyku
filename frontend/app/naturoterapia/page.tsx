"use client";

import Image from "next/image";

import HeroMd from "../components/Hero/HeroMd";
import Footer from "../components/Footer/Footer";

export default function Naturoterapia() {
  return (
    <>
      <HeroMd
        title="Naturoterapia"
        description="Naturoterapia to naturalna forma leczenia, która wykorzystuje siły natury do wspierania procesu regeneracji i utrzymania zdrowia."
      />
      <section className="relative overflow-hidden py-20 px-6 text-gray-600">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#cfcecb] via-[#fffef4] to-white -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_4.png"
              alt="zabiegi 4"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl font-bold">Świecowanie</h2>

            <p>
              <span className="text-[#968956] font-semibold">
                nazywane też konchowaniem to metoda oczyszczania uszu znana już
                od starożytności.
              </span>{" "}
              To RYTUAŁ usuwania zanieczyszczeń z uszu przy pomocy świec
              wykonywany od wieków w Grecji, Chinach, Egipcie
            </p>
            <p>
              Ten jakże subtelny, odprężający i relaksujący zabieg dbający o
              higienę uszu posiada bardzo ważne znaczenie dla zdrowia oraz
              jakości słuchu.
            </p>
            <p className="text-xl">
              <span className="text-[#968956] font-semibold">
                Polecany jest przede wszystkim osobom z nadmiarem woskowiny w
                uszach
              </span>{" "}
              , ale również zabieg ten przynosi również efekty w przypadku
              takich schorzeń jak:
            </p>
            <p className="text-[#968956] font-semibold">
              <li>migreny;</li>
              <li>szumy w uszach;</li>
              <li>niedosłuch;</li>
              <li>nawracające zapalenie zatok;</li>
              <li>częste przeziębienia;</li>
              <li>zawroty głowy;</li>
              <li>przewlekłe uczucie zmęczenia</li>
              <li>uczucie pełności w uchu</li>
              <li>świąd w uchu</li>
              <li>łagodzi stres i powstałe z nim napięcia</li>
            </p>
            <p>
              RYTUAŁ ten jest połączeniem masażu uszu pobudzającym krążenie w
              uchu co w połączeniu z świecowaniem korzystnie oddziałuje na
              samopoczucie, wzmocnienie ogólnej odporności organizmu, odprężenie
              i głęboką relaksację
            </p>
          </div>

          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl font-bold">Terapia bańkami </h2>

            <p>
              to terapia próżniowa, która aktywując punkty akupunkturowe :
              <li>pomaga uśmierzyć ból , </li>
              <li>wzmacnia układ odpornościowy </li>
              <li>poprawia przepływ limfy i usuwa zalegające toksyny</li>
              <li>działa rozluźniająco i rozgrzewająco</li>
              <li>wpływa na obniżenie ciśnienia</li>
              <li>działa odżywczo i relaksująco na układ nerwowy</li>
              <li>
                wspomaga rozluźnienie mięśni i struktur powięziowych – dając
                głęboką relaksację{" "}
              </li>
            </p>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_5.png"
              alt="zabiegi 5"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/zabiegi/zabiegi_6.png"
              alt="zabiegi 6"
              width={500}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-6 text-justify leading-relaxed">
            <h2 className="text-4xl font-bold">CZAS NA BARS</h2>

            <p>
              Usłyszałam niedawno, że trzeba być prawdziwie odważnym, żeby
              rzucać się na narzędzia Access Bars, bo nie każdy jest gotowy na
              szybkie zmiany, a bywa, że ktoś w ogóle nie jest gotowy na zmiany
              w życiu. Ileż razy pragnęliśmy coś zmienić, a zabrakło nam
              zwyczajnie jaj, żeby wybrać coś innego? Ile razy myśleliśmy: boję
              się zmiany, nie rzucę tej pracy, choć jej nie znoszę, bo jeszcze
              trafię na gorszą. O! Możemy też wyobrazić sobie mnóstwo relacji
              partnerskich, które oparte są na ciężkości, a jednak funkcjonują
              zżerając energię obu stron.
            </p>
            <p>A co jeśli zmiana może być lekka, przyjemna i komfortowa?</p>
            <p>
              zatem{" "}
              <span className="text-[#968956] font-semibold">DLA KOGO</span>{" "}
              jest Access Bars ?
              <li>
                dla tych, którzy są gotowi zaprosić więcej możliwości do swojego
                życia i otworzyć się na nieograniczone możliwości
              </li>
              <li>
                dla tych, którzy chcą wyjść ze schematu i żyć według swoich
                zasad
              </li>
              <li>
                dla tych, którzy poszukują praktycznych narzędzi radzenia sobie
                ze stresem, problemami, chronicznym zmęczeniem, wypaleniem
                zawodowym,chorobami, długami finansowymi
              </li>
              <li>
                dla tych, którzy szukają narzędzi aby odblokować swój potencjał
                i ruszyć machinę możliwości w każdym aspekcie życia
              </li>
              <li>dla tych, którzy są być szczęśliwi i mieć frajdę w życiu</li>
              <li>
                dla terapeutów jako dodatkowe narzędzie do pracy z klientami
              </li>
            </p>
            <p>
              sesja Access BARS stanie się dla Ciebie, Twojego dziecka i rodziny
              WKŁADEM i WSPARCIEM poprzez wprowadzenie do Waszej codzienności
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
