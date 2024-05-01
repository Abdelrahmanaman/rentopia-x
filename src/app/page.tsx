import { Building, DollarSign, HandHeart, Layers, PiggyBank, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="w-48 font-semibold">The most afforadable place to stay in Le Mans</h1>
      <span>Flexibility and options to suit your lifestyle.</span>
      <p>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
      <Image className="object-cover block" src={"/home.jpg"} width={500} height={500} alt="Home Page" />
      <div className="flex justify-center">
        <Link className="bg-primary inline-block text-white rounded-md p-4" href={"/appartments"}>
          Search Apartments
        </Link>
      </div>
      <h2 className="text-center">minimum living cost takes care of everything</h2>
      <div className="grid grid-cols-3 gap-3 text-sm items-center ">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <DollarSign className="size-7" />
          </span>{" "}
          Pay as Little as possible!
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <Shield className="size-7" />
          </span>{" "}
          Stay Safe! Save Money!
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <HandHeart className="size-7" />
          </span>{" "}
          Enjoy peaceful Environment!
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <Building className="size-7" />
          </span>{" "}
          Enjoy wisdom of community!
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <PiggyBank className="size-7" />
          </span>{" "}
          Pay for what you use!
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="border w-8 rounded-md border-primary shadow-md">
            <Layers className="size-7" />
          </span>{" "}
          Let&rsquo;s somebody else take care of Landlord!
        </div>
      </div>
    </section>
  );
}
