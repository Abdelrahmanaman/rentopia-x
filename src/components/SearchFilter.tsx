import { SeachType, searchFilterSchema } from "@/lib/validation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Euro, MapPin, Search } from "lucide-react";
import { Submit } from "./ApartmentReviews";
import { redirect } from "next/navigation";

interface SearchFilterProps {
  searchValue: SeachType;
}

const searchAction = async (formData: FormData) => {
  "use server";
  const values = Object.fromEntries(formData.entries());

  const { price, q, sortBy } = searchFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(price && { price: price.toString() }),
    ...(sortBy && { sortBy }),
  });
  redirect(`explore/?${searchParams.toString()}`);
};

export default function SearchFilter({ searchValue }: SearchFilterProps) {
  return (
    <div className="mx-auto mt-2 flex max-w-4xl items-center justify-center rounded-md border border-main p-4">
      <form
        action={searchAction}
        className="flex flex-col gap-4 md:flex-row md:items-center"
      >
        <div className="relative flex flex-shrink-0 items-center gap-2">
          <Label htmlFor="q" className="sr-only">
            Search
          </Label>
          <Input
            type="text"
            className=" peer focus-visible:ring-main"
            placeholder="e.g. Le Mans"
            name="q"
            id="q"
            defaultValue={searchValue.q || ""}
          />
          <MapPin className=" absolute right-2 size-4 text-muted-foreground peer-focus:text-main " />
        </div>

        <div className="relative flex-shrink-0">
          <Label htmlFor="price" className="sr-only">
            Price
          </Label>
          <Input
            type="number"
            className=" peer focus-visible:ring-main"
            placeholder="e.g. 2000€"
            name="price"
            id="price"
            defaultValue={searchValue.price || ""}
          />
          <Euro className="absolute right-2 top-3 size-4 text-muted-foreground transition-all duration-300 peer-focus:right-8 peer-focus:text-main " />
        </div>
        <div className="w-full">
          <Select name="sortBy" defaultValue={searchValue.sortBy || ""}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort</SelectLabel>

                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Submit
          title="Search"
          className="flex flex-grow justify-center gap-2 bg-main hover:bg-main/95 lg:justify-end"
        >
          <Search className="size-5 text-white" />
        </Submit>
      </form>
    </div>
  );
}
