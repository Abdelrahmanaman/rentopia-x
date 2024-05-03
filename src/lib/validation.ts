import { z } from "zod";

const requireString = z.string().min(1, "Required");
const RoomSchema = z
  .number()
  .int()
  .positive()
  .max(10)
  .min(1, { message: "Room number can't be less than 1" });

export const apartmentSchema = z.object({
  address: requireString.max(50),
  city: requireString.max(50),
  rooms: RoomSchema,
  wifi: z.coerce.boolean().optional(),
  tv: z.coerce.boolean().optional(),
  description: requireString.max(3048),
});

export type ApartmentType = z.infer<typeof apartmentSchema>;
