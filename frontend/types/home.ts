export type THome = {
  HeaderCollectionBox: {
    title: string;
    subTitle: string;
    description: string;
    BuyButton: {
      name: string;
      link: string;
    };
  };
  AboutSection: {
    Icon: React.JSX.Element;
    title: string;
    description: string;
  }[];
};

export type TCategoryItem = {
  id: number;
  categoriesImage: {
    url: string;
  };
  imageName: string;
};

export type TCategory = {
  data: TCategoryItem[];
};

export type TProductsItem = {
  id: number;
  documentId: number;
  name: string;
  Description: string;
  price: number;
  DiscountedPrice: number | null;
  Discounted: number | null;
  isNew: boolean;
  Image: {
    url: string;
  };
};

export type TProducts = {
  data: TProductsItem[];
};

export type TProductItem = {
  id: number;
  documentId: number;
  name: string;
  Description: string;
  price: number;
  DiscountedPrice: number | null;
  Discounted: number | null;
  isNew: boolean;
  Image: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  rating: number;
};

export type TProduct = {
  data: TProductItem;
};

export type TGalleryItem = {
  id: number;
  image: {
    name: string;
    url: string;
  };
};

export type TGallery = {
  data: TGalleryItem[];
};
