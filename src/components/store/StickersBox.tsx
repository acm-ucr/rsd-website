import Image from "next/image";
import DragonFrame from "@/public/store/dragonFrame.webp";

const StickersBox = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-2/3 items-center justify-center">
        <Image src={DragonFrame} alt="Outer Dragon Frame" />
        <div className="bg-rsd-mid-blue absolute flex h-3/4 w-3/4 items-center justify-center rounded-3xl">
          <p className="font-rsd-main text-center text-base font-bold md:text-4xl">
            Come visit us at tabling for stickers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickersBox;
