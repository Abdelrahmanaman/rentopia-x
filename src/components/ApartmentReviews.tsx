"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { addReview } from "@/app/explore/[slug]/actions";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
export default function ApartmentReviews() {
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleReviewScroll = (direction: string) => {
    const scrollAmount = 400;
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "previous") {
        sliderRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <article>
      <h2>Testimonial</h2>
      <div
        className="mb-3  flex  justify-end
      gap-5"
      >
        <button
          className="flex items-center rounded border border-main px-2 py-1 hover:bg-main hover:text-white"
          onClick={() => handleReviewScroll("previous")}
        >
          <ChevronLeft /> Previous
        </button>

        <button
          className="flex items-center rounded border border-main px-2 py-1 hover:bg-main hover:text-white"
          onClick={() => handleReviewScroll("next")}
        >
          Next <ChevronRight />
        </button>
      </div>
      <ul
        ref={sliderRef}
        className="flex w-full snap-x gap-4 overflow-x-hidden text-sm md:text-base"
      >
        <li className="w-full shrink-0 snap-start space-y-4 rounded border p-4 px-4 md:h-64 md:w-[30rem]">
          <div className="space-y-2">
            <Image
              className="block rounded-full object-cover"
              src="/user.svg"
              alt="user"
              width={38}
              height={38}
            />
            <span className="block font-semibold text-main">Kent Clark</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          </p>
        </li>
        <li className="w-full shrink-0 snap-start space-y-4 rounded border p-4 md:h-64 md:w-[30rem]">
          <div className="space-y-2">
            <Image
              className="block rounded-full object-cover"
              src="/user.svg"
              alt="user"
              width={38}
              height={38}
            />
            <span className="block font-semibold text-main">Kent Clark</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          </p>
        </li>
        <li className="w-full shrink-0 snap-start space-y-4 rounded border p-4 md:h-64 md:w-[30rem]">
          <div className="space-y-2">
            <Image
              className="block rounded-full object-cover"
              src="/user.svg"
              alt="user"
              width={38}
              height={38}
            />
            <span className="block font-semibold text-main">Kent Clark</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          </p>
        </li>
        <li className="w-full shrink-0 snap-start space-y-4 rounded border p-4 md:h-64 md:w-[30rem]">
          <div className="space-y-2">
            <Image
              className="block rounded-full object-cover"
              src="/user.svg"
              alt="user"
              width={38}
              height={38}
            />
            <span className="block font-semibold text-main">Kent Clark</span>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          </p>
        </li>
      </ul>
    </article>
  );
}

export function ApartmentReviewForm() {
  const form = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;
  return (
    <form className=" mb-10 space-y-4" action={addReview}>
      <h6 className="text-2xl font-semibold">Testimonial</h6>
      <span className="block">Write a Testimonial about this place</span>
      <Label className="font-semibold">Leave a review</Label>
      <Textarea
        className="h-64  resize-none focus-visible:ring-main md:w-96"
        maxLength={300}
        name="review"
      />
      <Submit title={"Submit testimonial"} className="bg-main hover:bg-main/90">
        Submit
      </Submit>
    </form>
  );
}

export function Submit({
  children,
  title,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { title: string }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className={className} {...props}>
      {pending ? <Loader className="size-6 animate-spin" /> : title}
      {!pending && children}
    </Button>
  );
}
