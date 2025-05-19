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
        <div className="relative flex w-screen items-center justify-center pt-7.5 pb-47">
          <Image
            src={storeWave}
            alt="store wave background"
            className="absolute bottom-4 left-0 -z-10 w-full object-cover"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute bottom-20 -left-25 -z-10 w-1/5"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute -right-20 bottom-83 -z-10 w-1/6 scale-x-[-1]"
          />
          <Button className="font-rsd-alt rounded-full bg-[#485D8A] p-15 text-center text-5xl font-bold text-white">
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
