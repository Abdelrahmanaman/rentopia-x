"use server";
import { auth, signIn, signOut } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  "use server";
  await signOut();
};

export const login = async () => {
  "use server";
  await signIn();
};

export const updateProfile = async (formData: FormData) => {
  "use server";
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("Unauthorized");

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: formData.get("name") as string,
    },
  });
  revalidatePath("/");
};

//* function to add the apt to favourites

export const addToFavourites = async (formData: FormData) => {
  try {
    const apartmentId = formData.get("apartment");
    const session = await auth();
    const userId = session?.user.id;
    if (typeof apartmentId === "string" && userId) {
      await prisma.favourite.create({
        data: {
          userId,
          apartmentId,
        },
      });
      revalidatePath("/");
      return "Apartment add favourites";
    }
  } catch (error) {
    // return {
    //   error: "Failed to add apartment to favourites",
    // };
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

//* function to remove the apt from favourites

export const removeFromFavourites = async (formData: FormData) => {
  try {
    const favId = formData.get("favourite");
    const session = await auth();
    const userId = session?.user.id;
    if (typeof favId === "string" && userId) {
      await prisma.favourite.delete({
        where: {
          id: favId,
        },
      });
      revalidatePath("/");
      return "Apartment add favourites";
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
