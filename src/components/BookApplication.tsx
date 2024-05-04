"use client";

import * as React from "react";
import { addDays, format, isAfter } from "date-fns";
import { Calendar as CalendarIcon, Minus, Plus } from "lucide-react";
import { DateRange } from "react-day-picker";
import { useState } from "react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <div className={cn("grid gap-2 overflow-hidden", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "h-12 w-64 justify-start text-left font-normal md:w-[300px]",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

interface BookApplicationProps {
  price: number;
}

export default function BookApplication({ price }: BookApplicationProps) {
  const [nights, setNights] = useState(1);

  const total = price * nights;
  return (
    <article className="grid h-80 w-full place-content-center space-y-4 rounded-md border  p-4 sm:w-96">
      <h2 className="text-center font-semibold">Start Booking</h2>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-500 text-white"
          onClick={() => {
            if (nights < 2) {
              return;
            }
            setNights((prev) => prev - 1);
          }}
        >
          <Minus className="size-8" />
        </button>
        <Input
          name="nights"
          disabled
          value={nights}
          min={0}
          className="max-h-8 max-w-28 rounded-none text-center text-2xl font-bold outline-none focus-visible:ring-transparent"
        />
        <button
          className="block bg-green-800 text-white"
          onClick={() => {
            setNights((prev) => prev + 1);
          }}
        >
          <Plus className="size-8" />
        </button>
      </div>
      <span className="block text-center font-semibold text-main">
        {formatCurrency(price)} <span className="text-muted-foreground">per night</span>
      </span>
      <DatePicker />
      <p className="font-semibold text-muted-foreground">
        You will pay {formatCurrency(total)} per {nights} {nights === 1 ? "night" : "nights"}
      </p>
      <Button className="h-12 bg-main hover:bg-main/90">
        Continue to Book
      </Button>
    </article>
  );
}
