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
