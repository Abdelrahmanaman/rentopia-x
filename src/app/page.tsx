import ReviewSlider from "@/components/HeroReview";
import {
  Building,
  DollarSign,
  HandHeart,
  Layers,
  PiggyBank,
  Quote,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-2 md:px-0">
      <div className="mx-auto max-w-6xl space-y-4 pb-10">
        <div className="flex grid-cols-2 flex-wrap  justify-center gap-20 space-y-4 lg:grid">
          <div className="w-full space-y-4">
            <h1 className="mt-10 w-48 font-semibold">
              The most afforadable place to stay in Le Mans
            </h1>
            <span className="mt-4 inline-block text-2xl font-semibold">
              Flexibility and options to suit your lifestyle.
            </span>
            <p className="w-full text-justify lg:max-w-80">
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>
          </div>
          <div className="relative h-96 w-full md:w-full lg:w-full">
            <Image
              priority
              className="block size-full object-cover"
              src={"/home.jpg"}
              fill
              sizes="100"
              alt="Home Page"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-center md:justify-start">
        <Link
          className="inline-block rounded-md border border-main bg-main p-3 text-white hover:bg-white hover:text-mainborder-main"
          href={"/appartments"}
        >
          Search Apartments
        </Link>
      </div>
      <h2
        className="mx-auto my-4
      max-w-6xl text-2xl font-semibold"
      >
        <span className="underline decoration-orange-500 underline-offset-4">
          {" "}
          Minimum living cost
        </span>{" "}
        takes care of everything
      </h2>
      <div className="mx-auto flex max-w-6xl grid-cols-2 flex-wrap  justify-center gap-20 space-y-4 lg:grid">
        <div className="relative h-96 w-full md:w-full lg:w-full">
          <Image
            priority
            className="block  rounded-br-[2.5rem] rounded-tl-[2.5rem] object-cover"
            src={"/home2.jpg"}
            fill
            sizes="100"
            alt="Home Page"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-6 pb-6  text-xs md:text-sm">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <DollarSign className="size-7" />
            </span>{" "}
            Pay as Little as possible!
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <Shield className="size-7" />
            </span>{" "}
            Stay Safe! Save Money!
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <HandHeart className="size-7" />
            </span>{" "}
            Enjoy peaceful Environment!
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <Building className="size-7" />
            </span>{" "}
            Enjoy wisdom of community!
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <PiggyBank className="size-7" />
            </span>{" "}
            Pay for what you use!
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-9 items-center justify-center rounded-md border border-main shadow-md md:size-12">
              <Layers className="size-7" />
            </span>{" "}
            Let&rsquo;s somebody else take care of Landlord!
          </div>
        </div>
      </div>
      <article className=" my-6 bg-main border-main">
        <div className="mx-auto flex max-w-6xl grid-cols-2 flex-wrap   justify-center gap-x-4 bg-mainborder-main py-4 text-white lg:grid">
          <div className="relative space-y-4  ">
            <Quote className=" size-14 rotate-180 text-white" />
            <ReviewSlider />
            <div></div>
          </div>
          <video width="900" height="900" className="block" controls>
            <source src="vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </article>
    </section>
  );
}
