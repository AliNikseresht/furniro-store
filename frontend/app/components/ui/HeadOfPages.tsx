"use client";
import Image from "next/image";
import React from "react";
import headBg from "@/public/assets/shop-bg.png";
import { usePathname } from "next/navigation";
import RightIcon from "@/app/components/icons/RightIcon";

type Props = {
  title: string;
  PreviousPage: string;
};

const HeadOfPages = ({ title, PreviousPage }: Props) => {
  const pathname = usePathname();

  const breadcrumbParts = pathname.split("/").filter(Boolean);
  const breadcrumbText = breadcrumbParts.join(" > ");

  return (
    <div className="w-full relative">
      <Image
        src={headBg}
        alt="background image"
        width={700}
        height={700}
        priority
        className="w-full h-[130px] md:h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
        <div className="flex items-center gap-1">
          <p className="font-bold text-xs md:text-base"> {PreviousPage}</p> <RightIcon />
          {breadcrumbText}
        </div>
      </div>
    </div>
  );
};

export default HeadOfPages;
