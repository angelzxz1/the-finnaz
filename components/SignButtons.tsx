"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const SignInButton = () => {
    const router = useRouter();
    return (
        <Button
            className="px-1 py-1 bg-transparent text-white border border-white hover:text-black h-auto w-auto min-w-[5rem]"
            onClick={(e) => {
                router.push("/sign-in");
                e.preventDefault();
            }}
        >
            <p className="mx-2">Sign in</p>
        </Button>
    );
};

export const SignUpButton = () => {
    const router = useRouter();
    return (
        <Button
            className="px-1 py-1 bg-transparent text-white border border-white hover:text-black h-auto w-auto min-w-[5rem]"
            onClick={(e) => {
                router.push("/sign-up");
                e.preventDefault();
            }}
        >
            <p className="mx-2">Sign up</p>
        </Button>
    );
};
