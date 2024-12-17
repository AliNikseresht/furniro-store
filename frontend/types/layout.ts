import { ReactElement } from "react";

export type TLayoutData = {
  navbar: {
    name: string;
    title: string;
    link: string;
  }[];
  userActions: {
    icon: ReactElement;
    modal: {
      button: string;
    }[];
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
