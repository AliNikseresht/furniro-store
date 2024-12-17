export type TContact = {
  title: string;
  description: string;
  informations: {
    icon: React.JSX.Element;
    name: string;
    descriptions: string;
  }[];
};
