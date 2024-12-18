"use client";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  const static_navbar_data = useAppSelector((state) => state.dataReducer);

  return (
    <ul className="hidden md:flex items-center md:gap-6 lg:gap-20">
      {static_navbar_data.layoutData.navbar.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarComponent;
