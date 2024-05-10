import { SeachType } from "@/lib/validation";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { PaginationBar } from "./PaginationBar";
import ApartmentItems from "./ApartmentItems";

interface ApartmentResultProps {
  searchValue: SeachType;
  page?: string;
}

export default async function ApartmentResult({
  searchValue: { price, q, sortBy },
  page = "1",
}: ApartmentResultProps) {
  // setting the number of query wanted
  const pageToNumber = parseInt(page);
  const resultPerPage = 4;
  const skip = (pageToNumber - 1) * resultPerPage;
  const priceNumber = Number(price);

  // organise the searchterm input to use the textsearch feature
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

  const apartmentsPromise = prisma.apartment.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      favourites: true,
    },
    take: resultPerPage,
    skip,
  });

  // this return the amount of queries in the db
  const countPromise = prisma.apartment.count({ where });

  const [apartments, totalCount] = await Promise.all([
    apartmentsPromise,
    countPromise,
  ]);

  // console.log(apartments);

  return (
    <div className="mx-auto mt-5  flex max-w-6xl flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-4">
      {apartments.map((apartment) => (
        <ApartmentItems
          key={apartment.id}
          apartment={apartment}
          favourites={false}
        />
      ))}

      <div className="my-2 w-full">
        <PaginationBar
          searchValue={{ q, sortBy, price }}
          currentPage={parseInt(page)}
          totalCount={totalCount}
        />
      </div>
    </div>
  );
}
