import React from "react";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { updateProfile } from "@/actions/actions";



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

  if(!user){
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  return (
    <section className="mx-auto max-w-6xl">
      <form action={updateProfile} className="space-y-4 py-4">
        <Label>Name</Label>
        <Input
          className="max-w-64"
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
