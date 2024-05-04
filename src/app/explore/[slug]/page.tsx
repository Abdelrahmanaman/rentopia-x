import ApartmentReviews, {
  ApartmentReviewForm,
} from "@/components/ApartmentReviews";
import BookApplication from "@/components/BookApplication";
import GoogleMaps from "@/components/GoogleMaps";
import { ImageSlider } from "@/components/ImageSlider";
import React from "react";
import prisma from "@/lib/prisma";
const images = ["/apt1.jpg", "/apt2.jpg", "/apt3.jpg"];

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function page({ params: { slug } }: PageProps) {
  const apartment = await prisma.apartment.findUnique({ where: { slug } });
  return apartment ? (
    <section className="mx-auto mb-4 max-w-6xl px-4 md:px-0">
      <h1 className="my-2 text-center text-lg font-semibold text-muted-foreground">
        Le Mans, France
      </h1>
      {apartment.images.length > 0 && (
        <div className="flex justify-center">
          <ImageSlider images={apartment.images} />
        </div>
      )}
      <div className="flex flex-col justify-between md:flex-row-reverse md:items-center">
        <BookApplication price={apartment.price} />
        <div className="max-w-xl">
          <h4>About the place</h4>
          <p>{apartment.description}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <GoogleMaps />
        <ApartmentReviewForm />
      </div>
      <ApartmentReviews />
    </section>
  ) : (
    <div>Apartment not found</div>
  );
}
