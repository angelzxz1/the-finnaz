"use client";

import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement, JSXElementConstructor } from "react";
import { Input } from "../ui/input";
const formSchema = z.object({
  "first name": z.string().min(1, {
    message: "First name is required",
  }),
  "last name": z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  "phone number": z.string().min(8, {
    message: "Last name is required",
  }),
  message: z.string().min(1, {
    message: "Last name  is required",
  }),
});
export const Contactform = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "first name": "",
      "last name": "",
      email: "",
      "phone number": "",
      message: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("clicked");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#D9D9D9] px-[4rem]">
        <FormField
          control={form.control}
          name="first name"
          render={({field}) => (
            <FormItem>
              <FormLabel>first name</FormLabel>
              <FormControl>
                <Input
                    placeholder=""
                    {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
