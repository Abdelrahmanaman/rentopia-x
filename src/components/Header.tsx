import Link from "next/link";
import MenuItems from "./MenuItems";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";
import Image from "next/image";
import { LogOut, Menu } from "lucide-react";
import DropMenu from "./DropMenu";
import { login, logout } from "@/actions/actions";
export default async function Header() {
  const session = await auth();
  const user = session?.user;
  return (
    <header className="bg-main p-6 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link className="text-2xl" href={"/"}>
          Rentopia
        </Link>
        <MenuItems />
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
          <li>{user ? <DropMenu user={user} /> : <SignIn />}</li>
          <Link
            href={"https://rentopia-x.vercel.app/api/auth/callback/google"}
          ></Link>
        </ul>
      </nav>
    </header>
  );
}

export function SignIn() {
  return (
    <form action={login}>
      <Button className="bg-orange-600 hover:bg-orange-500" type="submit">
        Sign in
      </Button>
    </form>
  );
}

export function SignOut() {
  return (
    <form action={logout}>
      <button className="flex items-center gap-2" type="submit">
        <LogOut className="size-5"/> Sign Out
      </button>
    </form>
  );
}
