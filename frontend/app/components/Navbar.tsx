import Link from "next/link";
import Image from "next/image";

import Navigation from "./navigation/Navigation";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 py-6   bg-[#181a1b] z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Navigation />
        </div>
      </div>
    </nav>
  );
}
