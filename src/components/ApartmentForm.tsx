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
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import UploadImage from "./UploadImage";
import { useStore } from "@/lib/store";
import { Textarea } from "./ui/textarea";

export default function ApartmentForm() {
  const images = useStore((state: any) => state.images);

  const form = useForm<ApartementType>({
    resolver: zodResolver(apartmentSchema),
  });

  const {
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  //function that wraps the server action

  const onSubmit = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });
  };

  return (
    <Form {...form}>
      <form action="" className="mx-auto my-4 max-w-2xl px-4 md:px-0">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="rooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="number" {...field} min={1} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-5">
          <FormField
            control={control}
            name="wifi"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="pt-2">Wifi</FormLabel>
                <FormControl>
                  <Checkbox {...field} checked={field.value} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="tv"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel className="pt-2">TV</FormLabel>
                <FormControl>
                  <Checkbox {...field} checked={field.value} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-4">
          <UploadImage />
        </div>
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="h-44 max-h-96 resize-none md:h-96" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
