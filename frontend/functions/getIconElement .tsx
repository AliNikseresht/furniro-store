import CustomerSupport from "@/app/components/icons/CustomerSupport";
import GuaranteeIcon from "@/app/components/icons/GuaranteeIcon";
import HearthIconBlack from "@/app/components/icons/HeartIconBlack";
import LocationIcon from "@/app/components/icons/LocationIcon";
import PhoneIcon from "@/app/components/icons/PhoneIcon";
import SearchIcon from "@/app/components/icons/searchIcon";
import ShopIcon from "@/app/components/icons/shopIcon";
import ShoppingIcon from "@/app/components/icons/ShoppingIcon";
import TimeBlackIcon from "@/app/components/icons/TimeBlackIcon";
import TrophyIcon from "@/app/components/icons/TrophyIcon";
import UserIcon from "@/app/components/icons/userIcon";
import React, { ReactElement } from "react";

export const getIconElement = (iconName: string): ReactElement | null => {
  switch (iconName) {
    case "user":
      return <UserIcon />;
    case "search":
      return <SearchIcon />;
    case "heart":
      return <HearthIconBlack />;
    case "shop":
      return <ShopIcon />;

    case "TrophyIcon":
      return <TrophyIcon size="40" />;
    case "GuaranteeIcon":
      return <GuaranteeIcon size="40" />;
    case "ShoppingIcon":
      return <ShoppingIcon size="40" />;
    case "CustomerSupport":
      return <CustomerSupport size="40" />;

    case "LocationIcon":
      return <LocationIcon size="17" />;
    case "PhoneIcon":
      return <PhoneIcon size="17" />;
    case "TimeBlackIcon":
      return <TimeBlackIcon size="17" />;

    default:
      return null;
  }
};
