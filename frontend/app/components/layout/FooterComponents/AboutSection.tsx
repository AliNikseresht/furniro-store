"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/store";

const AboutSection = () => {
  //state
  const static_data = useAppSelector((state) => state.dataReducer);

  // hooks
  const pathname = usePathname();

  const isCartOrHomePage = pathname === `/`;

  if (isCartOrHomePage) {
    return null;
  }

  return (
    <div className="flex items-center bg-[#FAF3EA] justify-between p-[1.5em] md:p-[3em] flex-col md:flex-row gap-4 md:gap-0">
      {static_data.homeData.AboutSection.map((feature, index) => (
        <ul key={index} className="flex items-center gap-2 w-full md:w-auto">
          <li>{feature.Icon}</li>
          <div className="flex flex-col">
            <li className="font-bold md:text-lg">{feature.title}</li>
            <li className="text-[#696969] text-xs md:text-base">
              {feature.description}
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default AboutSection;
