import Image from "next/image";
import product from "@/public/singlePaddle.webp";

interface ProductTypes {
  productName: string;
  productPrice: string;
}

const ProductCard = ({ productName, productPrice }: ProductTypes) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-10 text-xl">
      <div className="bg-rsd-light-blue h-96 w-full min-w-0 rounded-2xl">
        <Image className="max-h-96" src={product} alt="product" />
      </div>
      <div className="p-2 text-center text-3xl">{productName}</div>
      <div className="text-center text-2xl">{productPrice}</div>
    </div>
  );
};

export default ProductCard;
