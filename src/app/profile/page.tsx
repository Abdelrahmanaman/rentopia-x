import React from "react";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { log } from "console";

const changeName = async (formData: FormData) => {
  "use server";
  const session = await auth();
  const userId = session?.user?.id
  if (!userId) throw new Error("Unauthorized");

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name: formData.get("name") as string,
    }
   
  });
};

export default async function page() {
  const session = await auth();
  const user = session?.user;
  let userDB;
  if (user?.email) {
    userDB = await prisma.user.findUnique({
      where: {
        email: user?.email,
      },
    });
  }

  console.log(user);

  return (
    <section className="mx-auto max-w-6xl">
      <form action="" className="space-y-4 py-4">
        <Label>Name</Label>
        <Input
          className="max-w-44"
          type="text"
          name="name"
          defaultValue={userDB?.name || ""}
        />
        <Button type="submit" className="bg-main hover:bg-main/80">
          Save changes
        </Button>
      </form>
    </section>
  );
}
