"use client";

import React, { useState } from "react";
import LogoComponent from "./HeaderComponents/LogoComponent";
import NavbarComponent from "./HeaderComponents/NavbarComponent";
import UserActionsComponent from "./HeaderComponents/UserActionsComponent";
import MoreIcon from "../icons/MoreIcon";
import NavbarMobile from "./HeaderComponents/NavbarMobile";
import CloseGrayIcon from "../icons/CloseGrayIcon";

const Header = () => {
  //state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-6 sticky top-0 bg-[#fff] z-20">
      <LogoComponent />
      <NavbarComponent />
      <UserActionsComponent />
      <button onClick={toggleMenu} className="md:hidden cursor-pointer">
        <MoreIcon />
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-[#fff] shadow-lg p-4 w-3/4 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <button className="cursor-pointer" onClick={toggleMenu}>
            <CloseGrayIcon />
          </button>
          <LogoComponent fontSize="text-2xl" />
        </div>
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Header;
