"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const user = useUser();
  const router = useRouter();
  if (user?.isSignedIn) {
    return router.push("/userTemp");
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center">
        <div className="h-1/2 w-full flex fitems-center justify-center ">
          <h1 className="text-8xl flex flex-col justify-center items-center gap-4 font-extralight">
            <span>Welcome to</span>
            <span className="text-gradient text-9xl">Finnaz</span>
          </h1>
        </div>
        <div className="flex items-center justify-center h-1/2 w-full">
          <p className="text-5xl text-zinc-500 font-extralight">
            Your Money, Your Way
          </p>
        </div>
      </div>

      <div className="h-full w-1/2 flex justify-center items-center relative">
        <Image
          src="/landing.png"
          alt="landing"
          width={330}
          height={500}
          className="absolute"
        />
        <Image
          src="/iphone-no-bg.png"
          alt="iphone-cover"
          width={500}
          height={500}
          className="absolute"
        />
      </div>
    </div>
  );
}