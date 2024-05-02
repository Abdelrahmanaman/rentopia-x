"use client";
import Image from "next/image";
import { useState, useRef } from "react";
export default function ReviewSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
    sliderRef.current?.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ul
        ref={sliderRef}
        className="flex w-full snap-x overflow-x-hidden text-sm md:text-base"
      >
        <li className="md:h-44 w-full shrink-0 snap-start space-y-4">
          <p className="ml-4">
            From booking to check-out, Rentopia impressed me at every turn. Easy
            booking, stunning apartment, and top-notch service made my stay
            unforgettable. Prime location and a genuine “home away from home”
            vibe sealed the deal. If you&apos;re seeking perfection in apartment
            rentals, Rentopia is your answer!
          </p>
          <div className="ml-4 flex gap-2">
            <div className="relative size-10">
              <Image
                className="size-full rounded-full object-cover"
                src={"/user.svg"}
                fill
                sizes="100"
                alt="User Profile Picture"
              />
            </div>
            <div className="flex flex-col text-sm font-semibold text-white">
              Harry Kane{" "}
              <span className="block text-xs font-normal text-secondary">
                {" "}
                Property Owner
              </span>
            </div>
          </div>
        </li>
        <li className="md:h-44 w-full shrink-0 snap-start space-y-4">
          <p className="ml-4">
            From booking to check-out, Rentopia impressed me at every turn. Easy
            booking, stunning apartment, and top-notch service made my stay
            unforgettable. Prime location and a genuine “home away from home”
            vibe sealed the deal. If you&apos;re seeking perfection in apartment
            rentals, Rentopia is your answer!
          </p>
          <div className="ml-4 flex gap-2">
            <div className="relative size-10">
              <Image
                className="size-full rounded-full object-cover"
                src={"/user.svg"}
                fill
                sizes="100"
                alt="User Profile Picture"
              />
            </div>
            <div className="flex flex-col text-sm font-semibold text-white">
              Harry Kane{" "}
              <span className="block text-xs font-normal text-secondary">
                {" "}
                Property Owner
              </span>
            </div>
          </div>
        </li>
        <li className="md:h-44 w-full shrink-0 snap-start space-y-4">
          <p className="ml-4">
            From booking to check-out, Rentopia impressed me at every turn. Easy
            booking, stunning apartment, and top-notch service made my stay
            unforgettable. Prime location and a genuine “home away from home”
            vibe sealed the deal. If you&apos;re seeking perfection in apartment
            rentals, Rentopia is your answer!
          </p>
          <div className="ml-4 flex gap-2">
            <div className="relative size-10">
              <Image
                className="size-full rounded-full object-cover"
                src={"/user.svg"}
                fill
                sizes="100"
                alt="User Profile Picture"
              />
            </div>
            <div className="flex flex-col text-sm font-semibold text-white">
              Harry Kane{" "}
              <span className="block text-xs font-normal text-secondary">
                {" "}
                Property Owner
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex justify-center gap-2">
        <button
          className={`size-3 rounded-full  ${slideIndex === 0 ? "bg-gray-200" : "bg-secondary/40"}`}
          onClick={() => handleSlideChange(0)}
        ></button>
        <button
          className={`size-3 rounded-full  ${slideIndex === 1 ? "bg-gray-200" : "bg-secondary/40"}`}
          onClick={() => handleSlideChange(1)}
        ></button>
        <button
          className={`size-3 rounded-full  ${slideIndex === 2 ? "bg-gray-200" : "bg-secondary/40"}`}
          onClick={() => handleSlideChange(2)}
        ></button>
      </div>
    </>
  );
}
