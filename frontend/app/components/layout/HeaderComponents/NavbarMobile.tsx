import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React from "react";

const NavbarMobile = () => {
  const static_navbar_data = useAppSelector((state) => state.dataReducer);

  return (
    <ul className="flex flex-col items-end gap-3.5">
      {static_navbar_data.layoutData.navbar.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMobile;
