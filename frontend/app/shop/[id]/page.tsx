"use client";

import getHttp from "@/services/getHttp";
import { TProduct } from "@/types/home";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { renderRating } from "@/functions/RenderRating";
import FaceBookIcon from "@/app/components/icons/FaceBookIcon";
import LinkedinIcon from "@/app/components/icons/LinkedinIcon";
import TwitterIcon from "@/app/components/icons/TwitterIcon";
import ProductsItems from "@/app/components/ui/ProductsItems";
import Link from "next/link";
import Tabs from "@/app/components/ui/tabs/Tabs";
import { useAppSelector } from "@/store/store";

const ProductPage = () => {
  const tabsData = useAppSelector((state) => state.dataReducer.tabsData);

  // state
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // hooks
  const params = useParams();
  const productId = params.id;

  // service
  const {
    data: productResponse,
    isPending,
    error,
  } = getHttp<TProduct>({
    queryKey: ["product", productId],
    service: `/api/products/${productId}?populate=*`,
  });

  // loading
  if (isPending) return <div className="loading loading-ball"></div>;

  // error
  if (error) return <p>Error loading product data.</p>;

  const product = productResponse?.data;

  return (
    <div className="flex justify-center flex-col items-center w-full">
      {product ? (
        <div className="md:mt-4 flex flex-col md:flex-row justify-between md:w-[55rem] mb-6">
          {product.Image?.formats?.thumbnail?.url ? (
            <Image
              src={`${product.Image.formats.thumbnail.url}`}
              alt={product.name || "Product Image"}
              width={700}
              height={700}
              className="w-full md:w-[25rem] md:h-[403px] object-cover rounded-md"
              priority
            />
          ) : (
            <p>No Image Available</p>
          )}
          <div className="md:w-[25rem] px-4 py-5">
            <h1 className="text-4xl font-bold">
              {product.name || "Unnamed Product"}
            </h1>
            <div className="flex items-center gap-2">
              <p className="mt-2 text-2xl font-semibold text-[#696969]">
                Rs. {product.price || "N/A"}
              </p>
              {product.Discounted && (
                <p className="mt-1 text-xs bg-[#E97171] w-9 rounded-full py-1.5 px-1 text-[#fff]">
                  {product.Discounted}%
                </p>
              )}
            </div>
            {product.DiscountedPrice && (
              <p className="mt-2 text-[#E97171] line-through text-sm">
                Rs. {product.DiscountedPrice}
              </p>
            )}
            {product.isNew && (
              <p className="mt-2 text-sm bg-[#2EC1AC] w-9 rounded-full py-1.5 px-1.5 text-[#fff]">
                new
              </p>
            )}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex border-r-2 border-[#696969] pr-2">
                {renderRating(product.rating)}
              </div>
              <p className="text-sm pt-1">{product.rating} Customer Review</p>
            </div>
            <p className="mt-4 text-[#2f2f2f]">
              {product.Description || "No Description Available"}
            </p>

            <p className="my-2 text-[#696969]">Size</p>
            <div className="flex items-center gap-2">
              {["L", "XL", "XS"].map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedSize(item)}
                  className={`w-8 h-8 flex justify-center items-center text-center rounded-md pt-0.5 cursor-pointer ${
                    selectedSize === item
                      ? "bg-[#B88E2F] text-[#fff]"
                      : "bg-[#F9F1E7] text-[#000]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="my-2 text-[#696969]">Color</p>
            <ul className="flex items-center gap-2">
              {["#816DFA", "#000", "#B88E2F"].map((color, index) => (
                <li
                  key={index}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>

            <div className="flex flex-row items-center gap-2 mt-5 justify-between w-full">
              <ul className="flex items-center justify-between gap-1 border border-[#9F9F9F] py-1.5 px-3 rounded-lg md:w-52">
                <button className="text-base md:text-xl px-1 md:px-2">-</button>
                <li>1</li>
                <button className="text-base md:text-xl px-1 md:px-2">+</button>
              </ul>
              <Link
                href="/cart"
                className="text-sm md:text-base text-center border border-[#000] py-2 px-2 md:px-0 rounded-lg md:w-full"
              >
                Add To Cart
              </Link>
              <button className="text-sm md:text-base border border-[#000] py-1 md:py-1.5 px-2 md:px-0 rounded-lg md:w-full">
                <span className="text-xl">+</span> Compare
              </button>
            </div>

            <div className="md:w-full bg-[#D9D9D9] h-[0.07rem] my-[2em]"></div>

            <div className="flex flex-col w-[17rem]">
              <ul className="flex items-center justify-between w-[8.65rem]">
                <li>SKU:</li>
                <li>SS001</li>
              </ul>
              <ul className="flex items-center justify-between w-[8.4rem]">
                <li>Category:</li>
                <li>Sofas</li>
              </ul>
              <ul className="flex items-center justify-between w-full">
                <li>Tags:</li>
                <li>Sofa, Chair, Home, Shop</li>
              </ul>
              <ul className="flex items-center justify-between w-[11.5rem]">
                <li>Share:</li>
                <li className="flex items-center gap-5">
                  <FaceBookIcon /> <LinkedinIcon /> <TwitterIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
      <Tabs tabs={tabsData} initialActiveTabId="description" />

      <div className="flex items-center flex-col w-full p-4 gap-2 border-t my-7">
        <h3 className="text-[#000] font-bold text-xl md:text-3xl">
          Related Products
        </h3>
        <ProductsItems cols={4} displayType="limited" />
        <Link
          href="/shop"
          className="mt-4 px-8 py-2 border border-[#B88E2F] text-[#B88E2F]"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
