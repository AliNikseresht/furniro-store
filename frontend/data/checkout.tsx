import { TCheckout } from "@/types/checkout";

export const checkoutData: TCheckout = {
  formTitle: "Billing details",
  inputFields: [
    { name: "firstName", label: "First Name", required: true },
    { name: "lastName", label: "Last Name", required: true },
    { name: "companyName", label: "Company Name (Optional)", required: false },
    { name: "country", label: "Country / Region", required: true },
    { name: "streetAddress", label: "Street Address", required: true },
    { name: "city", label: "Town / City", required: true },
    { name: "province", label: "Province", required: true },
    { name: "zipCode", label: "ZIP Code", required: true },
    { name: "phone", label: "Phone", required: true },
    { name: "email", label: "Email Address", required: true },
  ],
  product: "Product",
  subtotal: "Subtotal",
  paymentOptions: [
    {
      id: 1,
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: 2,
      label: "Cash on Delivery",
      description:
        "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.",
    },
  ],
};
