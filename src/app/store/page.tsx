import StickersBox from "@/components/store/StickersBox";
import Header from "@/components/Header";
import ProductCard from "@/components/store/ProductCard";
import { Button } from "@/components/ui/button"
import Image from "next/image"; 
import storeWave from "@/public/store/storeWave.webp"

const Store = () => {
  return (
    <div>
      <div className="relative flex w-screen flex-col items-center justify-center pb-43">
        <Header text="Featured Products" />
        <div className="flex items-center justify-center">
          <ProductCard productName="Shirt" productPrice="17.99$" />
          <ProductCard productName="Jacket" productPrice="29.99$" />
        </div>
        <Image
          src={storeWave}
          alt="store wave background"
          className="absolute bottom-0 left-0 z-0 w-full object-cover"
        />
        <Button />
      </div>
      <div>
        <Header text="Stickers?" />
        <StickersBox />
      </div>
    </div>
  );
};

export default Store;
