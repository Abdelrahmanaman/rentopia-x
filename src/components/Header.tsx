import Link from "next/link";
import MenuItems from "./MenuItems";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";
export default async function Header() {
  const session = await auth();
  const user = session?.user;
  console.log(user);
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
          <li>
            {user ? (
              <Link
                className="underline-offset-4 hover:underline "
                href={"/profile"}
              >
                Profile
              </Link>
            ) : (
              <SignIn />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button className="bg-orange-500 hover:underline" type="submit">
        Sign in
      </Button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
