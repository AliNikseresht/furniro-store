import { TCheckout } from "./checkout";
import { TContact } from "./contact";
import { THome } from "./home";
import { TLayoutData } from "./layout";
import { TTab } from "./tabs";

export type TData = {
  layoutData: TLayoutData;
  homeData: THome;
  contactData: TContact;
  checkoutData: TCheckout;
  tabsData: TTab
};
