import StickersBox from "@/components/store/StickersBox";
import Header from "@/components/Header";
import ProductCard from "@/components/store/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import storeWave from "@/public/store/storeWave.webp";
import Cloud from "@/public/cloud.webp";
import Link from "next/link";

const Store = () => {
  return (
    <div>
      <div className="relative flex w-screen flex-col items-center justify-center">
        <Header text="Featured Products" />
        <div className="flex items-center justify-center">
          <ProductCard productName="Shirt" productPrice="17.99$" />
          <ProductCard productName="Jacket" productPrice="29.99$" />
        </div>
        <div className="relative m-10 flex w-screen items-center justify-center pt-7.5 pb-20 md:pb-30 lg:pb-[22vh]">
          <Image
            src={storeWave}
            alt="store wave background"
            className="absolute bottom-4 left-0 -z-10 hidden w-full object-cover lg:block"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute bottom-50 -left-45 -z-10 w-4/5 md:-left-80 md:w-3/4 lg:bottom-20 lg:-left-25 lg:w-1/5"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute -right-45 bottom-50 -z-10 w-4/5 scale-x-[-1] md:-right-80 md:w-3/4 lg:-right-20 lg:bottom-83 lg:w-1/6"
          />
          <Button className="font-rsd-alt bg-rsd-title-blue rounded-full p-15 text-center text-5xl font-bold text-white hover:bg-blue-900">
            <Link href="/">order form!</Link>
            {/* Could not find a current link to merch, only old link */}
          </Button>
        </div>
      </div>
      <div className="relative m-25">
        <Header text="Stickers?" />
        <StickersBox />
      </div>
    </div>
  );
};

export default Store;
