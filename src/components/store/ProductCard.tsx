import Image from "next/image";
import product from "@/public/singlePaddle.webp";


const ProductCard = (props: { productName: string; productPrice: string }) => {
 return (
   <div className="font-rsd-alt flex-col items-center p-10 text-xl">
     <div className="bg-rsd-light-blue rounded-2xl h-96 w-full min-w-0">
      <Image className="max-h-96" src={product} alt="product" />
     </div>
     <div className="p-2 text-center text-3xl">{props.productName}</div>
     <div className="text-center text-2xl">{props.productPrice}</div>
   </div>
 );
};


export default ProductCard;
