import Image from "next/image";
import product from "@/public/singlePaddle.webp";

const ProductCard = (props: { text1: string; text2: string }) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-10 text-xl">
      <div className="bg-rsd-light-blue rounded-2xl">
        <Image src={product} alt="product" />
      </div>
      <div className="p-2 text-center text-3xl">{props.text1}</div>
      <div className="text-center text-2xl">{props.text2}</div>
    </div>
  );
};

export default ProductCard;
