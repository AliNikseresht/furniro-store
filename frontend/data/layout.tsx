import HearthIcon from "@/app/components/icons/HeartIconBlack";
import SearchIcon from "@/app/components/icons/searchIcon";
import ShopIcon from "@/app/components/icons/shopIcon";
import UserIcon from "@/app/components/icons/userIcon";
import { TLayoutData } from "@/types/layout";

export const layoutData: TLayoutData = {
  navbar: [
    {
      title: "Home",
      name: "Home",
      link: "/",
    },
    {
      title: "Shop",
      name: "Shop",
      link: "/shop",
    },
    {
      title: "Blog",
      name: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      name: "Contact",
      link: "/contact",
    },
  ],
  userActions: [
    {
      icon: <UserIcon />,
      modal: [{ button: "" }],
    },
    {
      icon: <SearchIcon />,
      modal: [{ button: "" }],
    },
    {
      icon: <HearthIcon />,
      modal: [{ button: "" }],
    },
    {
      icon: <ShopIcon />,
      modal: [{ button: "" }],
    },
  ],
  brand: {
    name: "Funiro.",
    address: "400 University Drive Suite 200 Coral Gables,\nFL 33134 USA",
  },
  sections: [
    {
      title: "Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Payment Options", href: "/payment-options" },
        { name: "Returns", href: "/returns" },
        { name: "Privacy Policies", href: "/privacy-policies" },
      ],
    },
  ],
  newsletter: {
    placeholder: "Enter Your Email Address",
    buttonText: "SUBSCRIBE",
  },
  copyRight: "2023 Funiro. All rights reserved",
};
