import { Summary } from "@/components/Summary";
import { Edit, Edit2, Edit3 } from "lucide-react";

const AddPage = () => {
    return (
        <div className="flex w-full h-full flex-col ">
            <section className="w-full h-1/5 border-b border-zinc-700 items-center justify-center flex">
                <Summary />
            </section>
            <section className="w-full h-4/5 flex ">
                <div className="flex w-2/3 bg-emerald-600"></div>
                <div className="flex w-1/3 bg-indigo-600"></div>
            </section>
        </div>
    );
};

export default AddPage;
