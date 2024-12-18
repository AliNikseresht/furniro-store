"use client";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React from "react";

const NewCollectionBox = () => {
  const static_data = useAppSelector((state) => state.dataReducer);

  return (
    <div className="hidden md:block absolute top-52 right-52 w-[33rem] p-6 rounded bg-[#FFF3E3]">
      <h3 className="text-xs text-[#000]">{static_data.homeData.HeaderCollectionBox.title}</h3>
      <h4 className="text-[#B88E2F] font-bold text-6xl">{static_data.homeData.HeaderCollectionBox.subTitle}</h4>
      <p className="text-sm text-[#000]">{static_data.homeData.HeaderCollectionBox.description}</p>
      <button className="bg-[#B88E2F] mt-8 text-[#fff] px-7 py-2.5 text-sm">
        <Link href={static_data.homeData.HeaderCollectionBox.BuyButton.link}>
          {static_data.homeData.HeaderCollectionBox.BuyButton.name}
        </Link>
      </button>
    </div>
  );
};

export default NewCollectionBox;
