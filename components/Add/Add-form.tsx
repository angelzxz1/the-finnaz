"use client";

import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { unknown, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { format, set } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    amount: z.number().min(500, {
        message: "First name is required",
    }),
    store: z.string({ required_error: "Store is required" }),
    date: z.date({
        required_error: "Date is required",
    }),
});

const StoreList = [
    "Farmatodo",
    "Exito",
    "Olimpica",
    "Sao",
    "Isimo",
    "Tienda local",
    "Otro",
];

export const AddForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: new Date(),
        },
    });
    const [amount, setAmount] = useState(0);
    const [store, setStore] = useState("None");
    const [date, setDate] = useState<Date>(new Date());

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/add", values);
            form.reset();
            router.prefetch("/add");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-[#D9D9D9]/5 h-5/6 w-3/4 py-12 px-14 rounded-xl flex flex-col"
            >
                <div className="h-1/3  flex flex-col justify-between">
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="bg-[#82778D] border-none placeholder:text-white text-white focus-visible:border-none focus-visible:ring-0 text-center"
                                        placeholder="-Amount-"
                                        type="number"
                                        onChange={(e) => {
                                            setAmount(
                                                parseInt(
                                                    e.target.value === ""
                                                        ? "0"
                                                        : e.target.value
                                                )
                                            );
                                        }}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="store"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Select
                                    onValueChange={(e) => {
                                        setStore(e);
                                        return field.onChange;
                                    }}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="bg-[#82778D] border-none placeholder:text-slate-400 text-white focus-visible:border-none focus-visible:ring-0 text-center">
                                            <SelectValue
                                                placeholder="-Select an store-"
                                                className="text-slate-400"
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {StoreList.map((store) => (
                                            <SelectItem value={store}>
                                                {store}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal bg-[#82778D] border-none tplaceholder:text-slate-400 text-white",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 " />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={(e) => {
                                                setDate(e as Date);
                                                return field.onChange;
                                            }}
                                            disabled={(date) =>
                                                date > new Date() ||
                                                date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex-1 bg-red-500 w-full flex flex-col">
                    <h2>Preview</h2>
                    <div className="flex flex-col">
                        <span>{amount}</span>
                        <span>{store}</span>
                        <span>{format(date, "PPP")}</span>
                    </div>
                    <Button>Add</Button>
                </div>
            </form>
        </Form>
    );
};
