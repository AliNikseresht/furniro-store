"use client";
import getHttp from "@/services/getHttp";
import { TProducts, TProductsItem } from "@/types/home";
import Image from "next/image";
import React from "react";
import ShareIcon from "../icons/ShareIcon";
import CompareIcon from "../icons/CompareIcon";
import HeartIconWhite from "../icons/HeartIconWhite";
import Link from "next/link";

type Props = {
  displayType: "limited" | "all";
  cols: number;
};

const ProductsItems = ({ displayType, cols }: Props) => {
  const {
    data: productItems,
    isPending,
    error,
  } = getHttp<TProducts>({
    queryKey: ["products"],
    service: `/api/products?populate=*`,
  });

  if (isPending) return <div className="loading loading-ball"></div>;
  if (error) return <p>Error loading data...</p>;

  const productsToShow =
    displayType === "limited"
      ? productItems.data.slice(0, 4)
      : productItems.data;

  return (
    <div className="flex items-center justify-between h-full">
      {productItems && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-4 py-4 md:p-4`}
        >
          {productsToShow.map((item: TProductsItem) => (
            <div
              key={item.id}
              className="group bg-[#f1f1f1] rounded-lg shadow-md relative overflow-hidden"
            >
              <Image
                width={700}
                height={700}
                priority
                src={
                  item.Image?.url?.startsWith("http")
                    ? item.Image.url
                    : `https://devoted-beauty-69cb4a011e.strapiapp.com${item.Image?.url}`
                }
                alt={item.name}
                className="w-full h-[280px] object-cover rounded-t-lg"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col gap-2">
                <h4 className="font-bold text-lg text-[#000]">{item.name}</h4>
                <p className="text-sm text-[#898989]">{item.Description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Rp {item.price}</p>
                  {item.DiscountedPrice && (
                    <p className="text-xs line-through text-[#898989]">
                      Rp {item.DiscountedPrice}
                    </p>
                  )}
                </div>
                {item.Discounted && (
                  <p className="text-xs bg-[#E97171] rounded-[50%] py-[0.6em] px-[0.3em] text-[#fff] absolute top-3 right-3">
                    {item.Discounted}%
                  </p>
                )}
                {item.isNew && (
                  <p className="text-xs bg-[#2EC1AC] rounded-full py-2 px-1 text-[#fff] absolute top-3 right-3">
                    New
                  </p>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex-col bg-[#3A3A3A] bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/shop/${item.documentId}`}
                  className="bg-white text-[#B88E2F] px-8 py-2 hover:bg-gray-100 duration-200"
                >
                  Add to Cart
                </Link>
                <div className="flex items-center w-full gap-2 justify-center">
                  <button className="text-[#fff] p-2 flex items-center gap-0.5 duration-200">
                    <ShareIcon />
                    Share
                  </button>
                  <button className="text-[#fff] p-2 flex items-center gap-0.5 duration-200">
                    <CompareIcon />
                    Compare
                  </button>
                  <button className="text-[#fff] p-2 flex items-center gap-0.5 duration-200">
                    <HeartIconWhite />
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsItems;
