"use client";
import { useUser } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const PublicNavBar = () => {
  const router = useRouter();
  const user = useUser();
  if (!user?.isSignedIn) {
    return (
      <nav className="bg-purple-500 p-2 flex justify-end items-center">
        <ModeToggle />
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
      </nav>
    );
  }
  return (
    <nav className="bg-purple-500 p-2 flex justify-end items-center">
      <ModeToggle />
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
    </nav>
  );
};

export default PublicNavBar;
