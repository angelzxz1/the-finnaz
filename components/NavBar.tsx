"use client";
import { useUser } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

const PublicLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const PrivateLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Add",
    href: "/add",
  },
  {
    name: "Transactions",
    href: "/transactions",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const router = useRouter();
  const path = usePathname();
  const user = useUser();
  if (path === "/sign-in" || path === "/sign-up") return null;
  return (
    <nav className="flex justify-center items-center w-full border-b border-b-[#656565]/60 bg-[#42339C]/10 backdrop-blur-[10px] fixed z-50 h-12">
      <div className=" flex h-full w-3/4">
        <div className=" flex h-full w-5/6 gap-2 items-center">
          {!user?.isSignedIn
            ? PublicLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    path === link.href
                      ? "border border-b-white border-transparent"
                      : "text-[#b176eb] border hover:border-b-[#b176eb] border-transparent"
                  }
                >
                  {link.name}
                </Link>
              ))
            : PrivateLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    path === link.href
                      ? "border border-b-white border-transparent"
                      : "text-[#b176eb] border hover:border-b-[#b176eb] border-transparent"
                  }
                >
                  {link.name}
                </Link>
              ))}
        </div>
        <div className=" flex h-full w-1/6 justify-end items-center gap-2">
          {!user?.isSignedIn ? (
            <>
              <Button
                className="px-1 py-1 bg-transparent text-white border border-white hover:text-black h-auto w-auto min-w-[5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/sign-in");
                }}
              >
                <p className="mx-2">Sign in</p>
              </Button>
              <span className="">or</span>
              <Button
                className="px-1 py-1 bg-transparent text-white border border-white hover:text-black h-auto w-auto min-w-[5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/sign-up");
                }}
              >
                <p className="mx-2">Sign up</p>
              </Button>
            </>
          ) : (
            <>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
