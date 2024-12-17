export type TCheckout = {
  formTitle: string;
  inputFields: {
    name: string;
    label: string;
    required: boolean;
  }[];
  product: string;
  subtotal: string;
  paymentOptions: {
    id: number;
    label: string;
    description?: string;
  }[];
};
