import { array, boolean, z } from "zod";

const requireString = z.string().min(1, "Required");
const RoomSchema = z.number().int().positive();

export const apartmentSchema = z.object({
  address: requireString.max(50),
  city: requireString.max(50),
  rooms: RoomSchema.refine((value) => value < 1, {
    message: "Please provide rooms number",
  }),
  wifi: boolean().default(false),
  tv: boolean().default(false),
  images: array(requireString),
  description: requireString.max(3048),
});

export type ApartementType = z.infer<typeof apartmentSchema>;
