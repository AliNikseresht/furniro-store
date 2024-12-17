"use client";
import getHttp from "@/services/getHttp";
import { TGallery, TGalleryItem } from "@/types/home";
import Image from "next/image";
import React from "react";

const GalleryItems = () => {
  const {
    data: productItems,
    isPending,
    error,
  } = getHttp<TGallery>({
    queryKey: ["galleries"],
    service: `/api/galleries?populate=*`,
  });

  if (isPending) return <div className="loading loading-ball"></div>;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className="py-4 w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-2">
        {productItems?.data.map((item: TGalleryItem) => (
          <div
            key={item.id}
            className={`relative ${
              item.id === 5
                ? "col-span-2 row-span-2 col-start-2 row-start-2"
                : "col-span-1"
            }`}
          >
            <Image
              src={
                item.image?.url.startsWith("http")
                  ? item.image.url
                  : `https://devoted-beauty-69cb4a011e.strapiapp.com${item.image?.url}`
              }
              alt={item.image?.name || "Gallery Item"}
              priority
              className="object-cover w-full"
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryItems;
