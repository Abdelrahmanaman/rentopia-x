import { SeachType } from "@/lib/validation";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { Slider } from "./ImageSlider";
import { Bed } from "lucide-react";
import Link from "next/link";
interface ApartmentResultProps {
  searchValue: SeachType;
  page?: string;
}

export default async function ApartmentResult({
  searchValue: { price, q, sortBy },
}: ApartmentResultProps) {
  const priceNumber = Number(price);
  const searchTerm = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.ApartmentWhereInput = searchTerm
    ? {
        OR: [
          {
            description: { search: searchTerm },
            address: { search: searchTerm },
            city: { search: searchTerm },
          },
        ],
      }
    : {};

  const where: Prisma.ApartmentWhereInput = {
    AND: [searchFilter, price ? { price: priceNumber } : {}],
  };

  //   const sortOrder: Prisma.SortOrder = sortBy === "desc" ? "desc" : "asc";

  const apartments = await prisma.apartment.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="  mx-auto mt-5 grid max-w-6xl grid-cols-3 place-items-center gap-y-10">
      {apartments.map((apartment) => (
        <Link href={`explore/${apartment.slug}`} key={apartment.slug}>
          <article className=" rounded-md p-2  shadow-sm shadow-main">
            <div>
              <Slider images={apartment.images} />
            </div>
            <div className="text-muted-foreground">
              <p className="text-wrap">{apartment.address}</p>
              <span className="font-semibold text-main">
                {apartment.price}/<span className="font-normal">Months</span>
              </span>
            </div>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Bed className="size-5 text-muted-foreground" />
              {apartment.rooms}
            </span>
          </article>
        </Link>
      ))}
    </div>
  );
}
