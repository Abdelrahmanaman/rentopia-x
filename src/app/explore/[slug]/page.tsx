import BookApplication from "@/components/BookApplication";
import { ImageSlider } from "@/components/ImageSlider";
import React from "react";

const images = ["/apt1.jpg", "/apt2.jpg", "/apt3.jpg"];

export default function page() {
  return (
    <section className="mx-auto max-w-6xl">
      <h1 className="my-2 text-center text-lg font-semibold text-muted-foreground">
        Le Mans, France
      </h1>
      <div className="flex justify-center">
        <ImageSlider images={images} />
      </div>
      <BookApplication />
      <div>
        <h4>About the place</h4>
        <p>
          Design is a plan or specification for the construction of an object or
          system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process. The national agency for design: enabling Singapore
          to use design for economic growth and to make lives better. Minimal
          techno is a minimalist subgenre of techno music. It is characterized
          by a stripped-down aesthetic that exploits the use of repetition and
          understated development. Minimal techno is thought to have been
          originally developed in the early 1990s by Detroit-based producers
          Robert Hood and Daniel Bell.
        </p>
      </div>
    </section>
  );
}
