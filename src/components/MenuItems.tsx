"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function MenuItems() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative md:hidden">
      <button onClick={handleMenuOpen}>
        {menuOpen ? <X className="size-10" /> : <Menu className="size-10" />}
      </button>
      <ul
        className={`${menuOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-10 opacity-0 md:hidden"} absolute -right-3 top-14 flex h-44 w-44 flex-col items-center justify-center gap-4 bg-main transition-all duration-300`}
      >
        <li>
          <Link
            className="underline-offset-4 hover:underline "
            href={"/explore"}
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            className="underline-offset-4 hover:underline "
            href={"/about-us"}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className="underline-offset-4 hover:underline "
            href={"/about-us"}
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link
            className="underline-offset-4 hover:underline "
            href={"/profile"}
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
