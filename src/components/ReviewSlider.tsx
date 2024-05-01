import Image from "next/image";
export default function ReviewSlider() {
  return (
    <ul className="flex w-full snap-x overflow-x-scroll">
      <li className="h-44 w-full shrink-0 snap-start">
        <p className="ml-4">
          From booking to check-out, Rentopia impressed me at every turn. Easy
          booking, stunning apartment, and top-notch service made my stay
          unforgettable. Prime location and a genuine “home away from home” vibe
          sealed the deal. If you&apos;re seeking perfection in apartment
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
      <li className="h-44 w-full shrink-0 snap-start">
        <p className="ml-4">
          From booking to check-out, Rentopia impressed me at every turn. Easy
          booking, stunning apartment, and top-notch service made my stay
          unforgettable. Prime location and a genuine “home away from home” vibe
          sealed the deal. If you&apos;re seeking perfection in apartment
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
      <li className="h-44 w-full shrink-0 snap-start">
        <p className="ml-4">
          From booking to check-out, Rentopia impressed me at every turn. Easy
          booking, stunning apartment, and top-notch service made my stay
          unforgettable. Prime location and a genuine “home away from home” vibe
          sealed the deal. If you&apos;re seeking perfection in apartment
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
  );
}
