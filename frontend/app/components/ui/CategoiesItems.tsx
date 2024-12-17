"use client";
import getHttp from "@/services/getHttp";
import { TCategory, TCategoryItem } from "@/types/home";
import Image from "next/image";
import React from "react";

const CategoiesItems = () => {
  //service
  const {
    data: catItems,
    isPending,
    error,
  } = getHttp<TCategory>({
    queryKey: ["categories"],
    service: `/api/categories?populate=*`,
  });

  if (isPending) return <div className="loading loading-ball"></div>;
  if (error) return <p>Error loading data...</p>;

  return (
    <>
      {catItems && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6">
          {catItems.data.map((item: TCategoryItem) => (
            <div key={item.id} className="p-6 w-72 md:w-[20rem] md:h-[27rem]">
              <Image
                width={700}
                height={700}
                priority
                src={
                  item.categoriesImage?.url?.startsWith("http")
                    ? item.categoriesImage.url
                    : `https://devoted-beauty-69cb4a011e.strapiapp.com${item.categoriesImage.url}`
                }
                alt={item.imageName}
                className="w-full h-full object-cover rounded-lg"
              />

              <h4 className="text-center mt-3 font-bold">{item.imageName}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoiesItems;
