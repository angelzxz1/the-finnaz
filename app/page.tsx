"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useUser();
  const router = useRouter();
  console.log(user);
  if (user?.isSignedIn) {
    return router.push("/userTemp");
  }
  return <div className="">Public page</div>;
}
