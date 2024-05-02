import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="space-y-4 text-sm bg-main p-4 text-white md:bg-white md:text-black">
      <div className="mx-auto max-w-6xl flex-wrap justify-center gap-8 md:flex">
        <div className="mt-4">
          <h6>Rentopia</h6>
          <p className="w-3/4 text-sec">
            Discover Your Perfect Home: Elevate Your Living with Rentopia!
          </p>
        </div>
        <ul className="items-center gap-x-10 space-y-4 md:flex">
          <li className="space-y-4">
            <span>New User?</span>
            <ul className="space-y-2 text-sec">
              <li>
                <Link
                  className="hover:text-main hover:underline"
                  href={"/signup"}
                >
                  New Account
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-main hover:underline"
                  href={"/explore"}
                >
                  Start Booking a Room
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-4">
            <span>Explore Us</span>
            <ul className="space-y-2 text-sec">
              <li>
                <Link
                  className="hover:text-main hover:underline"
                  href={"/explore"}
                >
                  Our Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-main hover:underline" href={"/"}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-main hover:underline"
                  href={"/explore"}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-4">
            <span>Connect Us</span>
            <ul className="space-y-2 text-sec">
              <li>
                <Link className="hover:text-main hover:underline" href={"/"}>
                  support@rentopia.id
                </Link>
              </li>
              <li>
                <Link className="hover:text-main hover:underline" href={"/"}>
                  07 - 80-17-46 - 59
                </Link>
              </li>
              <li>
                <Link className="hover:text-main hover:underline" href={"/"}>
                  Le Mans, France 72100
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="space-y-4">
          <div className="mt-2 flex justify-center gap-4">
            <Twitter className="hover:text-gray-600 cursor-pointer  size-7" />
            <Instagram className="hover:text-gray-600 cursor-pointer  size-7" />
            <Facebook className="hover:text-gray-600 cursor-pointer  size-7" />
            <Linkedin className="hover:text-gray-600 cursor-pointer  size-7" />
          </div>
          <p className="border-t-2 border-black pt-1 text-center">
            Copyright 2024 • All rights reserved • Rentopia
          </p>
        </div>
      </div>
    </footer>
  );
}
