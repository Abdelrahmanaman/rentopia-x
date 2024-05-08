"use server";
import { signIn, signOut } from "@/auth";

export const logout = async () => {
  "use server";
  await signOut();
};

export const login = async () => {
  "use server";
  await signIn();
};
