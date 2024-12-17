import React from "react";
import HeadOfPages from "../components/ui/HeadOfPages";
import ProductsItems from "../components/ui/ProductsItems";
import FilterIcon from "../components/icons/FilterIcon";
import FourCircle from "../components/icons/FourCircle";
import MoreIcon from "../components/icons/MoreIcon";

const ShopPage = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <HeadOfPages title="Shop" PreviousPage="Home" />
      <div className="bg-[#F9F1E7] flex flex-col md:flex-row items-center justify-between h-20 w-full py-2 md:py-0 md:px-[4em]">
        <ul className="w-full justify-between md:w-auto flex items-center gap-3 px-2">
          <li className="flex items-center gap-3 md:gap-5 md:border-r-2 border-black md:pr-3">
            <FilterIcon size="20" />
            <span className="md:text-lg font-bold mt-1">Filter</span>
            <FourCircle size="16" /> <MoreIcon size="17" />
          </li>
          <li className="mt-1 text-xs md:text-base">
            Showing 1–16 of 32 results
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-3 w-full md:w-auto px-4 md:px-0">
          <li className="text-xs md:text-base">
            Show{" "}
            <span className="bg-[#fff] text-[#9F9F9F] text-xs md:text-base p-1 md:p-3">
              16
            </span>
          </li>
          <li className="text-xs md:text-base">
            Short by
            <span className="bg-[#fff] text-[#9F9F9F] text-xs md:text-base ml-1 p-1 md:py-3 md:px-7">
              Default
            </span>
          </li>
        </ul>
      </div>
      <ProductsItems cols={5} displayType="all" />
    </div>
  );
};

export default ShopPage;
