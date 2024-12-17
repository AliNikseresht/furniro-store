import React from "react";
import Link from "next/link";
import HeadOfPages from "../components/ui/HeadOfPages";
import Image from "next/image";
import productImg from "@/public/assets/shop-bg.png";
import DeleteIcon from "../components/icons/DeleteIcon";

const CartPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Cart" PreviousPage="Home" />
      <div className="flex flex-col md:flex-row w-full justify-between md:p-[3em]">
        <div className="p-4 md:w-[55rem] flex-col flex gap-5">
          <ul className="bg-[#F9F1E7] flex items-center justify-between w-full px-[3em] h-[3.4rem]">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <ul className="flex items-center justify-between w-full px-2">
            <li>
              <Image
                src={productImg}
                alt="product image"
                className="w-20 h-20 object-cover rounded-md"
              />
            </li>
            <li>Asgaard sofa</li>
            <li>Rs. 250,000.00</li>
            <li className="border border-[#696969] py-1 px-4 rounded-md">1</li>
            <li>Rs. 250,000.00</li>
            <li>
              <DeleteIcon />
            </li>
          </ul>
        </div>
        <div className="bg-[#F9F1E7] md:w-[30rem] p-4 flex flex-col items-center">
          <ul className="flex flex-col w-64">
            <li className="mb-6 text-center md:text-3xl font-bold">
              Cart Totals
            </li>
            <li className="flex items-center justify-between w-full">
              <span className="text-[#000]">Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
            </li>
            <li className="flex items-center justify-between w-full mt-4">
              <span className="text-[#000]">Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </li>
            <li className="flex justify-center w-full my-8">
              <Link
                className="border-[#212221] border text-[#000] rounded-lg px-8 py-2 hover:bg-gray-100
              duration-200"
                href="/checkout"
              >
                Check Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
