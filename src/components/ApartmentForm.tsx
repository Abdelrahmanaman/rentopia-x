// "use client";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ApartmentType, apartmentSchema } from "@/lib/validation";
// import { Input } from "./ui/input";
// import { Checkbox } from "./ui/checkbox";
// import UploadImage from "./UploadImage";
// import { useStore } from "@/lib/store";
// import { Textarea } from "./ui/textarea";
// import { Button } from "./ui/button";

// export default function ApartmentForm() {
//   const images = useStore((state: any) => state.images);

//   const form = useForm<ApartmentType>({
//     resolver: zodResolver(apartmentSchema),
//   });

//   const {
//     control,
//     formState: { isSubmitting, isSubmitSuccessful },
//     handleSubmit,
//   } = form;

//   //function that wraps the server action

//   const onSubmit = async (values: ApartmentType) => {
//     const formData = new FormData();

//     Object.entries(values).map(([key, value]) => {
//       if (value && typeof value === "object") {
//         formData.append(key, JSON.stringify(value));
//       } else {
//         formData.append(key, value as string);
//       }
//     });
//     alert(JSON.stringify(formData.get("tv")));
//   };

//   return (
//     <Form {...form}>
//       <form
//         action=""
//         onSubmit={handleSubmit(onSubmit)}
//         className="mx-auto my-4 max-w-2xl px-4 md:px-0"
//       >
//         <FormField
//           control={control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Address</FormLabel>
//               <FormControl>
//                 <Input type="text" {...field} />
//               </FormControl>
//               <FormDescription />
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={control}
//           name="city"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>City</FormLabel>
//               <FormControl>
//                 <Input type="text" {...field} />
//               </FormControl>
//               <FormDescription />
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={control}
//           name="rooms"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Rooms</FormLabel>
//               <FormControl>
//                 <Input
//                   type="number"
//                   {...field}
//                   value={field.value || ""}
//                   onChange={(e) => field.onChange(parseInt(e.target.value, 10))} // Parse the value as a number
//                   min={1}
//                 />
//               </FormControl>
//               <FormDescription />
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex items-center gap-5">
//           <FormField
//             control={control}
//             name="wifi"
//             render={({ field }) => (
//               <FormItem className="flex items-center gap-2">
//                 <FormLabel className="pt-2">Wifi</FormLabel>
//                 <FormControl>
//                   <Checkbox {...field} />
//                 </FormControl>
//                 <FormDescription />
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={control}
//             name="tv"
//             render={({ field }) => (
//               <FormItem className="flex items-center gap-2">
//                 <FormLabel className="pt-2">TV</FormLabel>
//                 <FormControl>
//                   <Checkbox
//                     {...field}
//                     onCheckedChange={() => field.onChange(!field.value)}
//                   />
//                 </FormControl>
//                 <FormDescription />
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="my-4">
//           <UploadImage />
//         </div>
//         <FormField
//           control={control}
//           name="description"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Description</FormLabel>
//               <FormControl>
//                 <Textarea
//                   className="h-44 max-h-96 resize-none md:h-96"
//                   {...field}
//                 />
//               </FormControl>
//               <FormDescription />
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button>Enter</Button>
//       </form>
//     </Form>
//   );
// }
