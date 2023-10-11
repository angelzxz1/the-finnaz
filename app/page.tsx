import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import Image from "next/image";
import PhoneLanding from "@/public/Phone.png";

const PublicMainPage = () => (
    <div className="h-full w-full flex justify-center items-center flex-col md:flex-row">
        <div className="h-1/2 w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="h-full w-full flex fitems-center justify-center ">
                <h1 className="text-6xl md:text-8xl flex flex-col justify-center items-center gap-4 font-extralight">
                    <span className="w-full text-center">Welcome to</span>
                    <span className="text-gradient text-7xl md:text-9xl">
                        Finnaz
                    </span>
                </h1>
            </div>
            <div className="flex items-center justify-center h-1/2 w-full">
                <p className="text-3xlmd:text-5xl text-zinc-500 font-extralight">
                    Your Money, Your Way
                </p>
            </div>
        </div>

        <div className="h-full md:h-full w-full md:w-1/2 flex justify-center items-center relative">
            <Image
                src={PhoneLanding}
                alt="landing"
                className="absolute h-[75%] w-auto"
            />
        </div>
    </div>
);

export default async function Home() {
    const profile = await initialProfile();
    if (!profile) return <PublicMainPage />;
    return redirect("/dashboard");
}
