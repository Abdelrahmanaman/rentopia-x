"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "next-auth";
import Image from "next/image";
import { SignOut } from "./Header";
import Link from "next/link";
import { Lock, Settings } from "lucide-react";

interface DropdownProps {
  user: User;
}

export default function DropMenu({ user }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="rounded-full"
          src={user?.image || "user.svg"}
          width={38}
          height={38}
          alt="User Profile Image"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex items-center gap-2" href={"/profile"}>
            <Settings className="size-5" />
            Profile
          </Link>
        </DropdownMenuItem>
        {user.role === "admin" && (
          <DropdownMenuItem>
            <Link className="flex items-center gap-2" href={"/admin"}>
              <Lock className="size-5" />
              Admin
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
