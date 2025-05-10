import Image from "next/image";
import product from "@/public/RSDLogo.webp";

interface ProductTypes {
  productName: string;
  productPrice: string;
}

const ProductCard = ({ productName, productPrice }: ProductTypes) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-10 text-xl">
      <div className="flex h-145 w-125 min-w-0 items-center justify-center rounded-2xl bg-gray-200">
        <Image className="max-h-145 max-w-125" src={product} alt="product" />
      </div>
      <div className="p-2 text-center text-3xl">{productName}</div>
      <div className="text-center text-2xl">{productPrice}</div>
    </div>
  );
};

export default ProductCard;
