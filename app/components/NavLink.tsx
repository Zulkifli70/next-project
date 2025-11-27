import React from "react";
import { NavLinkProps } from "../types";
import Link from "next/link";

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className={`border px-3 py-1 rounded-lg md:border-transparent md:rounded-none ${
          isActive ? "text-amber-500" : null
        }`}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLink;
