"use client";
import { useUser } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const PublicNavBar = () => {
  const router = useRouter();
  const path = usePathname();
  const user = useUser();
  if (path === "/sign-in") return null;
  if (path === "/sign-up") return null;
  return (
    <nav className="flex justify-end items-center w-full border-b border-b-[#656565]/60 bg-[#42339C]/10 backdrop-blur-[10px] fixed ">
      <ModeToggle />
      {!user?.isSignedIn ? (
        <button
          className="flex cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/sign-in");
          }}
        >
          <LogIn className="h-6 w-6" />
          <p className="mx-2">Log in</p>
        </button>
      ) : (
        <>
          <button
            className="flex cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            <p className="mx-2">Dashboard</p>
          </button>
          <UserButton afterSignOutUrl="/" />
        </>
      )}
    </nav>
  );
};

export default PublicNavBar;
