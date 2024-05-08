"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface ImageSliderProps {
  images: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderRef = useRef<HTMLUListElement>(null);

  const handleSlideChange = (index: number) => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    setSlideIndex(index);
    sliderRef.current?.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative flex w-full flex-col">
      <ul
        ref={sliderRef}
        className="flex w-full snap-x overflow-x-hidden text-sm md:text-base"
      >
        {images.map((image, index) => (
          <li
            className="h-56 w-full shrink-0 flex-grow snap-start space-y-4 md:h-[500px] "
            key={index}
          >
            <div className="relative h-full w-full">
              <Image
                priority
                className=" object-cover"
                src={image}
                fill
                sizes="100"
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-1/2 flex w-full translate-y-1/2 justify-between px-4 md:absolute">
        <button
          className=" rounded-full bg-white/50 text-main hover:border-none hover:bg-white "
          onClick={() => handleSlideChange(slideIndex - 1)}
        >
          <ChevronLeft className="size-14" />
        </button>
        <button
          className=" rounded-full bg-white/50 text-main hover:border-none hover:bg-white "
          onClick={() => handleSlideChange(slideIndex + 1)}
        >
          <ChevronRight className="size-14" />
        </button>
      </div>
      <span className="text-xs font-semibold text-muted-foreground ">
        Image {slideIndex + 1}/{images.length}
      </span>
    </div>
  );
}

export function Slider({ images }: ImageSliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleSlideChange = (index: number) => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    setSlideIndex(index);
    sliderRef.current?.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative h-full w-[300px]">
      <ul
        ref={sliderRef}
        className=" flex w-full snap-x overflow-x-hidden text-sm md:text-base"
      >
        {images.map((image, index) => (
          <li className="  w-full shrink-0 flex-grow snap-start  " key={index}>
            <div className="relative h-full w-full">
              <Image
                priority
                className=" rounded-t-md object-cover"
                src={image}
                width={300}
                height={300}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="sr-only text-black">
        Image {slideIndex + 1} of {images.length}
      </p>

      <div className="absolute top-1/2 flex w-full  justify-between px-4 md:absolute">
        <button
          aria-label="Next Image Slide"
          className=" rounded-full bg-white/50 text-main hover:border-none hover:bg-white "
          onClick={() => handleSlideChange(slideIndex - 1)}
        >
          <ChevronLeft className="size-10" />
        </button>
        <button
          aria-label="Next Image Slide"
          className=" rounded-full bg-white/50 text-main hover:border-none hover:bg-white "
          onClick={() => handleSlideChange(slideIndex + 1)}
        >
          <ChevronRight className="size-10" />
        </button>
      </div>
    </div>
  );
}
