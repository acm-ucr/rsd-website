import Image from "next/image";
import product from "@/public/RSDLogo.webp";

interface ProductTypes {
  productName: string;
  productPrice: string;
}

const Card = ({ productName, productPrice }: ProductTypes) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-3 text-xl md:p-10">
      <div className="flex h-[45vh] w-[70vw] items-center justify-center rounded-2xl bg-gray-200 lg:h-[55vh] lg:w-[25vw]">
        <Image className="object-cover" src={product} alt="product" />
      </div>
      <div className="text-center text-xl md:p-2 md:text-3xl">
        {productName}
      </div>
      <div className="text-center text-lg md:text-2xl">{productPrice}</div>
    </div>
  );
};

export default Card;
