"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApartementType, apartmentSchema } from "@/lib/validation";

export default function ApartmentForm() {
  const form = useForm<ApartementType>({
    resolver: zodResolver(apartmentSchema),
  });

  const {control, formState : {isSubmitting, isSubmitSuccessful}} = form

  return (
    <Form {...form}>
      <form action="">
        <FormField
          name="..."
          render={() => (
            <FormItem>
              <FormLabel />
              <FormControl></FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
