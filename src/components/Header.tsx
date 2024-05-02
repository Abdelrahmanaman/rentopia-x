"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className="bg-primary p-6 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link className="text-2xl" href={"/"}>
          Rentopia
        </Link>
        <div className="relative md:hidden">
          <button onClick={handleMenuOpen}>
            {menuOpen ? (
              <X className="size-10" />
            ) : (
              <Menu className="size-10" />
            )}
          </button>
          <ul
            className={`${menuOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-10 opacity-0 md:hidden"} absolute -right-3 top-14 flex h-44 w-44 flex-col items-center justify-center gap-4 bg-primary transition-all duration-300`}
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
        <ul className={` hidden  items-center  gap-8 md:flex `}>
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
      </nav>
    </header>
  );
}
