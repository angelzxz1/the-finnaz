import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { SignInButton, SignUpButton } from "./SignButtons";
import { ResNavButtons } from "./ResponsiveNavButtons";

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

const NavBar = async () => {
    const user = await currentProfile();

    return (
        <nav className="flex justify-center items-center w-full border-b border-b-[#656565]/60 bg-[#42339C]/10 backdrop-blur-[10px] fixed z-50 h-12">
            <div className="h-full w-3/4 hidden md:flex">
                <div className="flex h-full w-5/6 gap-2 items-center">
                    {!user
                        ? PublicLinks.map((link) => (
                              <NavLink
                                  href={link.href}
                                  key={link.name}
                                  name={link.name}
                              />
                          ))
                        : PrivateLinks.map((link) => (
                              <NavLink
                                  href={link.href}
                                  key={link.name}
                                  name={link.name}
                              />
                          ))}
                </div>
                <div className=" flex h-full w-1/6 justify-end items-center gap-2">
                    {!user ? (
                        <>
                            <SignInButton />
                            <span className="">or</span>
                            <SignUpButton />
                        </>
                    ) : (
                        <>
                            <UserButton afterSignOutUrl="/" />
                        </>
                    )}
                </div>
            </div>
            {!user ? (
                <ResNavButtons Links={PublicLinks} />
            ) : (
                <ResNavButtons Links={PrivateLinks} isLogged />
            )}
        </nav>
    );
};

export default NavBar;
