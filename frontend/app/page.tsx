import mainBg from "@/public/assets/background.png";
import NewCollectionBox from "./components/ui/NewCollectionBox";
import CategoiesItems from "./components/ui/CategoiesItems";
import ProductsItems from "./components/ui/ProductsItems";
import Link from "next/link";
import GalleryItems from "./components/ui/GalleryItems";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-8">
      <div className="relative w-full">
        <Image src={mainBg} alt="mainBg" priority width={800} height={800} className="w-full h-auto object-cover" />
        <div className="w-full h-full flex justify-center items-center px-4 sm:px-8 md:px-16 absolute top-0">
          <NewCollectionBox />
        </div>
      </div>

      <div className="flex items-center flex-col w-full p-4 gap-2">
        <h3 className="text-[#000] font-bold text-xl md:text-3xl">
          Browse The Range
        </h3>
        <p className="text-[#666666] text-center text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <CategoiesItems />
      </div>

      <div className="flex items-center flex-col w-full p-4 gap-2">
        <h3 className="text-[#000] font-bold text-xl md:text-3xl">
          Our Products
        </h3>
        <ProductsItems cols={4} displayType="limited"/>
        <Link
          href="/shop"
          className="mt-4 px-8 py-2 border border-[#B88E2F] text-[#B88E2F]"
        >
          Show More
        </Link>
      </div>

      <div className="flex items-center flex-col w-full py-4 gap-2">
        <p>Share your setup with</p>
        <h3 className="text-[#000] font-bold text-xl md:text-3xl">
          #FurniroFurniture
        </h3>
        <GalleryItems />
      </div>
    </div>
  );
}
