import Link from "next/link";
import Image from "next/image";

import Navigation from "./navigation/Navigation";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b border-b-black bg-[#131313] z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="relative flex items-center justify-between">
          <div className="md:block xl:hidden">
            <Navigation />
          </div>

          {/*LEFT - logo duże */}
          <div className="hidden xl:block">
            <Link href="/">
              <Image
                src="/logo/logo_5.png"
                alt="Logo"
                width={180}
                height={38}
              />
            </Link>
          </div>

          {/* CENTER - logo wyśrodkowane */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <Link href="/">
              <Image
                src="/logo/logo_2.png"
                alt="Logo"
                width={100}
                height={140}
              />
            </Link>
          </div>

          {/* MD - logo po lewej */}
          <div className="hidden md:block xl:hidden ml-6">
            <Link href="/">
              <Image
                src="/logo/logo_2.png"
                alt="Logo"
                width={100}
                height={34}
              />
            </Link>
          </div>

          {/* RIGHT - menu desktop */}
          <div className="hidden xl:block">
            <Navigation isDesktop />
          </div>
        </div>
      </div>
    </nav>
  );
}
