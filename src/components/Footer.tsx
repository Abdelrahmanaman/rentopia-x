import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="space-y-4 p-4 bg-primary text-white">
      <h6>Rentopia</h6>
      <p className="text-secondary">Discover Your Perfect Home: Elevate Your Living with Rentopia!</p>
      <ul className="space-y-4">
        <li className="space-y-4">
          <span>New User?</span>
          <ul className="text-secondary space-y-2">
            <li>
              <Link className="hover:underline hover:text-white" href={"/signup"}>
                New Account
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-white" href={"/explore"}>
                Start Booking a Room
              </Link>
            </li>
          </ul>
        </li>
        <li className="space-y-4">
          <span>Explore Us</span>
          <ul className="text-secondary space-y-2">
            <li>
              <Link className="hover:underline hover:text-white" href={"/explore"}>
                Our Careers
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-white" href={"/"}>
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-white" href={"/explore"}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li>
        <li className="space-y-4">
          <span>Connect Us</span>
          <ul className="text-secondary space-y-2">
            <li>
              <Link className="hover:underline hover:text-white" href={"/"}>
                support@rentopia.id
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-white" href={"/"}>
                07 - 80-17-46 - 59
              </Link>
            </li>
            <li>
              <Link className="hover:underline hover:text-white" href={"/"}>
                Le Mans, France 72100
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex gap-4 justify-center mt-2">
        <Twitter className="size-7" />
        <Instagram className="size-7" />
        <Facebook className="size-7" />
        <Linkedin className="size-7" />
      </div>
      <p className="text-center border-t-2 pt-1 border-black">Copyright 2024 • All rights reserved • Rentopia</p>
    </footer>
  );
}
