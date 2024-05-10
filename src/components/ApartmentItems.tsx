import { Apartment } from "@prisma/client";
import { Slider } from "./ImageSlider";
import Link from "next/link";
import { addToFavourites, removeFromFavourites } from "@/actions/actions";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Bed, Heart } from "lucide-react";

interface ApartmentItemsProps {
  apartment: Apartment;
  favourite: boolean;
  favouriteId?: string;
}

export default function ApartmentItems({
  apartment,
  favourite,
  favouriteId,
}: ApartmentItemsProps) {
  return (
    <article className=" flex-grow-0 rounded-md border p-2 shadow-sm">
      <Slider images={apartment.images} />
      <Link className="block w-full" href={`explore/${apartment.slug}`}>
        <p className="text-wrap">{apartment.address}</p>
        <span className="font-semibold text-main">
          {apartment.price}/<span className="font-normal">Months</span>
        </span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <Bed className="size-5 text-muted-foreground" />
          {apartment.rooms}
        </span>
      </Link>
      <div className="flex flex-grow justify-end ">
        {favourite ? (
          <form action={removeFromFavourites} className="flex flex-col">
            <Label className="sr-only">Add apartment to favourites </Label>
            <Input
              defaultValue={favouriteId}
              name="favourite"
              className="hidden"
            />
            <button>
              <Heart
                className={`${favourite ? "fill-red-500 text-red-500" : "fill-transparent"} size-7 text-muted-foreground hover:fill-red-500 hover:text-red-500`}
              />
            </button>
          </form>
        ) : (
          <form action={addToFavourites} className="flex flex-col">
            <Label className="sr-only">Add apartment to favourites </Label>
            <Input
              name="apartment"
              className="hidden"
              defaultValue={apartment.id}
            />
            <button>
              <Heart
                className={`${favourite ? "fill-red-500 text-red-500" : "fill-transparent"} size-7 text-muted-foreground hover:fill-red-500 hover:text-red-500`}
              />
            </button>
          </form>
        )}
      </div>
    </article>
  );
}
