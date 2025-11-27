import React from "react";
import Image from "next/image";
import mobileLogo from "../public/printforge-logo-icon.svg";
import desktopLogo from "../public/printforge-logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <Image
            src={mobileLogo}
            alt="Logo"
            width={30}
            className="block md:hidden"
          />
          <Image
            src={desktopLogo}
            alt="Logo"
            width={150}
            className="hidden md:block"
          />
        </Link>

        <div>
          <ul className="flex gap-5 text-black">
            <li className=" py-2 border-b-2 border-transparent hover:border-b-amber-500">
              <Link href="/3d-models">3D MODELS</Link>
            </li>
            <li className=" py-2 border-b-2 border-transparent hover:border-b-amber-500">
              <Link href="/about">ABOUT </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
