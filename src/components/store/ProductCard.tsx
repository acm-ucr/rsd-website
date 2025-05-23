import Image from "next/image";
import product from "@/public/RSDLogo.webp";

interface ProductTypes {
  productName: string;
  productPrice: string;
}

const ProductCard = ({ productName, productPrice }: ProductTypes) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-2 text-xl md:p-5 lg:p-10">
      <div className="flex h-43 w-37 min-w-0 items-center justify-center rounded-2xl bg-gray-200 md:h-87 md:w-75 lg:h-145 lg:w-125">
        <Image className="object-cover" src={product} alt="product" />
      </div>
      <div className="text-center text-xl md:text-3xl lg:p-2">
        {productName}
      </div>
      <div className="text-center text-lg md:text-2xl">{productPrice}</div>
    </div>
  );
};

export default ProductCard;
