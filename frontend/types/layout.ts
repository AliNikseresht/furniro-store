import { ReactElement } from "react";

export type TLayoutData = {
  navbar: {
    name: string;
    title: string;
    link: string;
  }[];
  userActions: {
    key: string;
    icon: React.ReactElement;
    modal?: {
      type: "search" | "favorite";
      buttons: { action: () => void }[];
    };
    links?: { href: string }[];
  }[];
  brand: {
    name: string;
    address: string;
  };
  sections: {
    title: string;
    links: {
      name: String;
      href: string;
    }[];
  }[];
  newsletter: {
    placeholder: string;
    buttonText: string;
  };
  copyRight: string;
};
