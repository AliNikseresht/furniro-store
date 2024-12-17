"use client";

import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const static_footer_data = useAppSelector((state) => state.dataReduser);

  return (
    <footer className="border-t border-[#9F9F9F] px-4 py-3 md:px-8 md:py-6">
      <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl">
            {static_footer_data.layoutData.brand.name}
          </h1>
          <p className="text-sm w-60 leading-6 text-[#9F9F9F]">
            {static_footer_data.layoutData.brand.address}
          </p>
        </div>
        {static_footer_data.layoutData.sections.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold mb-4 text-[#9F9F9F] text-sm">
              {section.title}
            </h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.name as string} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-[#000] hover:underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold mb-4 text-[#9F9F9F] text-sm">Newsletter</h3>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder={static_footer_data.layoutData.newsletter.placeholder}
              className="border-b-2 border-[#000] bg-transparent py-2 outline-none text-sm"
            />
            <button className="bg-transparent border-b-2 border-[#000] text-[#000] font-bold py-2 text-sm">
              {static_footer_data.layoutData.newsletter.buttonText}
            </button>
          </div>
        </div>
      </div>
      <p className="mt-8 border-t pt-3 border-[#9F9F9F] text-sm text-[#000]">
        {static_footer_data.layoutData.copyRight}
      </p>
    </footer>
  );
};

export default Footer;
