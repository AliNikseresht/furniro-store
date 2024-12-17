import Image from "next/image";
import React from "react";
import FurniroLogo from "@/public/assets/logo/Furniro-Logo.png";

type PropsSize = {
  fontSize?: string;
};

const LogoComponent = ({ fontSize }: PropsSize) => {
  return (
    <div className="flex items-center">
      <Image
        src={FurniroLogo}
        alt="Furniro logo"
        width={40}
        height={40}
        priority
      />
      <h1 className={`font-bold text-3xl ${fontSize}`}>Furniro</h1>
    </div>
  );
};

export default LogoComponent;
