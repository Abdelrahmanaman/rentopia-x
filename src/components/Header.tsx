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
    <header className="bg-primary text-white p-3">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href={"/"}>Rentopia</Link>
        <div className="relative">
          <button onClick={handleMenuOpen}>{menuOpen ? <X className="size-10" /> :<Menu className="size-10" />}</button>
          <ul className={`${menuOpen? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"} flex flex-col items-center justify-center gap-4 transition-all duration-300 absolute top-14 -right-3 w-44 bg-primary h-44`}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
