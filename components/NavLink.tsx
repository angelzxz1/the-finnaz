"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLink {
    href: string;
    name: string;
}
export const NavLink = ({ href, name }: NavLink) => {
    const path = usePathname();
    return (
        <Link
            href={href}
            key={name}
            className={
                path === href
                    ? "border border-b-white border-transparent"
                    : "text-[#b176eb] border hover:border-b-[#b176eb] border-transparent"
            }
        >
            {name}
        </Link>
    );
};
