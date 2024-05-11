import { auth } from "@/auth";
import ApartmentItems from "@/components/ApartmentItems";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  const userId = session?.user.id;

  const favourites = await prisma.favourite.findMany({
    where: {
      userId,
    },
    include: {
      apartment: true,
    },
  });

  return (
    <section className="mx-auto mb-10  mt-5 flex max-w-6xl flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-4">
      {favourites.length &&
        favourites.map((favourite) => (
          <ApartmentItems
            key={favourite.id}
            apartment={favourite.apartment}
            favouriteId={favourite.id}
            favourite={true}
          />
        ))}
    </section>
  );
}
