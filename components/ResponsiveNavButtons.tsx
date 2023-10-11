"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { NavLink } from "./NavLink";
import { SignInButton, SignUpButton } from "./SignButtons";
import { UserButton } from "@clerk/nextjs";

interface ResNavButtonsProps {
    Links: {
        name: string;
        href: string;
    }[];
    isLogged?: boolean;
}

export const ResNavButtons = ({
    Links,
    isLogged = false,
}: ResNavButtonsProps) => {
    return (
        <div className="h-full w-full md:hidden flex justify-between px-4">
            <div className="h-full flex">
                {!isLogged && (
                    <div className="w-full flex items-center">
                        <SignInButton />
                        <span className="px-2">or</span>
                        <SignUpButton />
                    </div>
                )}
            </div>
            <div className="h-full items-center flex">
                {isLogged && <UserButton afterSignOutUrl="/" />}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MenuIcon className="border border-white rounded-md h-8 w-8 p-1 ml-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {Links.map((link) => (
                            <DropdownMenuItem>
                                <NavLink
                                    href={link.href}
                                    key={link.name}
                                    name={link.name}
                                />
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
