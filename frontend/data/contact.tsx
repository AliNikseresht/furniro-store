import LocationIcon from "@/app/components/icons/LocationIcon";
import PhoneIcon from "@/app/components/icons/PhoneIcon";
import TimeBlackIcon from "@/app/components/icons/TimeBlackIcon";
import { TContact } from "@/types/contact";

export const contactData: TContact = {
  title: "Get In Touch With Us",
  description:
    "For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!",
  informations: [
    {
      icon: <LocationIcon size="17"/>,
      name: "Address",
      descriptions: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      icon: <PhoneIcon size="17"/>,
      name: "Phone",
      descriptions: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789",
    },
    {
      icon: <TimeBlackIcon size="17"/>,
      name: "Working Time",
      descriptions: "Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00",
    },
  ],
};
