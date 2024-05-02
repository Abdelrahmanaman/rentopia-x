"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import { Button } from "./ui/button";
import { useStore } from "@/lib/store";

export default function UploadImage() {
  const handleImageUpdate = useStore((state: any) => state.handleImageUpdate);

  return (
    <CldUploadWidget
      uploadPreset="rentopia"
      onSuccess={(result) => {
        handleImageUpdate(result?.info);
      }}
    >
      {({ open }) => {
        function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
          e.preventDefault();
          open();
        }
        return <Button onClick={handleOnClick}>Upload an Image</Button>;
      }}
    </CldUploadWidget>
  );
}
