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
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "First name is required",
    }),
    lastName: z.string().min(1, {
        message: "Last name is required",
    }),
    email: z.string().min(1, {
        message: "Email is required",
    }),
    phoneNumber: z.string().min(8, {
        message: "Last name is required",
    }),
    message: z.string().min(1, {
        message: "Last name  is required",
    }),
});

export const Contactform = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/contact", values);
            form.reset();
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-[#D9D9D9] px-[4rem] py-[2.25rem] rounded-[10px] text-black h-3/4 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col gap-4"
            >
                <h1 className="text-[36px] font-bold">Contact us</h1>
                <div className="flex w-full items-center justify-between gap-4 ">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel className="text-[#535353] pl-1">
                                    first name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="bg-white border-none "
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-1/2">
                                <FormLabel className="text-[#535353] pl-1">
                                    last name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="bg-white border-none "
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#535353] pl-1">
                                email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="bg-white border-none "
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#535353] pl-1">
                                phone number
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    className="bg-white border-none"
                                    // type="number"
                                    placeholder="1234567890"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="flex-1 flex flex-col">
                            <FormLabel className="text-[#535353] pl-1">
                                message
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    className="bg-white border-none resize-none flex-1"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className=" my-4">
                    <Button className="bg-[#523869] text-white w-full hover:bg-[#6a4a86] ">
                        Send
                    </Button>
                </div>
                <div className="flex justify-center">
                    <p className="text-[13px] text-[#7B7979] w-3/4 text-center">
                        Say goodbye to overspending and hello to financial
                        freedom. Join Finnas and start tracking your expenses
                        with ease.
                    </p>
                </div>
            </form>
        </Form>
    );
};
