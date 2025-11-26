import React from "react";
import Image from "next/image";
import mobileLogo from "../public/printforge-logo-icon.svg";
import desktopLogo from "../public/printforge-logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 ">
      <div>
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
      </div>
      <div>
        <ul className="flex gap-5">
          <li className=" py-2 border-b-2 border-transparent hover:border-b-amber-500">
            <Link href="/about/mission">3D MODELS</Link>
          </li>
          <li className=" py-2 border-b-2 border-transparent hover:border-b-amber-500">
            <Link href="/about">ABOUT </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
