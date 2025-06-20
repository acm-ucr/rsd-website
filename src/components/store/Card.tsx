import Image, { StaticImageData } from "next/image";

interface ProductTypes {
  productName: string;
  productPrice: string;
  productImg: StaticImageData;
}

const Card = ({ productName, productPrice, productImg }: ProductTypes) => {
  return (
    <div className="font-rsd-alt flex-col items-center p-3 text-xl md:p-10">
      <div className="flex h-[45vh] w-[70vw] items-center justify-center rounded-2xl bg-white lg:h-[55vh] lg:w-[25vw]">
        <Image className="object-cover" src={productImg} alt="product" />
      </div>
      <div className="text-center text-xl md:p-2 md:text-3xl">
        {productName}
      </div>
      <div className="text-center text-lg md:text-2xl">{productPrice}</div>
    </div>
  );
};

export default Card;
