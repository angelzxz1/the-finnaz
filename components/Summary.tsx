import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

const days = [
    { name: "Monday", value: 0 },
    { name: "Tuesday", value: 1 },
    { name: "Wednesday", value: 2 },
    { name: "Thursday", value: 3 },
    { name: "Friday", value: 4 },
    { name: "Saturday", value: 5 },
    { name: "Sunday", value: 6 },
];

const months = [
    { name: "January", value: 0 },
    { name: "February", value: 1 },
    { name: "March", value: 2 },
    { name: "April", value: 3 },
    { name: "May", value: 4 },
    { name: "June", value: 5 },
    { name: "July", value: 6 },
    { name: "August", value: 7 },
    { name: "September", value: 8 },
    { name: "October", value: 9 },
    { name: "November", value: 10 },
    { name: "December", value: 11 },
];

const GetDate = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateNumber = date.getDate();
    const dayName = days.find((Day) => Day.value === day)?.name;
    const monthName = months.find((Month) => Month.value === month)?.name;
    return { dayName, dateNumber, monthName, year };
};

export const Summary = async () => {
    const profile = await currentProfile();
    if (!profile) return redirect("/signin");
    const { name, balance, montlyLimit } = profile;
    console.log(balance);
    const { dayName, dateNumber, monthName, year } = GetDate();
    return (
        <div className="h-full w-11/12 md:w-3/4 flex flex-col md:flex-row ">
            <div className="md:w-1/2 w-full flex md:flex-col justify-end md:justify-start">
                <h1 className="text-4xl md:h-1/2 flex items-center ">{name}</h1>
                <div className="h-1/2 md:flex  flex-col justify-center hidden">
                    <h2 className="text-3xl">{dayName}</h2>
                    <h3 className="text-2xl">{`${monthName} ${dateNumber}, ${year}`}</h3>
                </div>
            </div>
            <div className="md:w-1/2 w-full flex items-end flex-1">
                <div className="md:h-2/3 w-full flex flex-col justify-center items-end h-full">
                    <span className="h-1/2 flex items-center pr-4 text-sm text-zinc-600">
                        Spent / Total
                    </span>
                    <div className="h-1/2 flex items-start">
                        <span className="text-3xl px-4 text-[#70E9AF]">
                            ${balance ? balance : 0}
                        </span>
                        {" / "}
                        <span className="text-3xl px-4 text-[#B176EB]">
                            ${montlyLimit ? montlyLimit : 0}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
