import Image from "next/image";
import DragonFrame from "@/public/store/dragonFrame.webp";
import stickerWave from "@/public/store/stickersWave.webp";
import star from "@/public/4pointStar.webp";

const StickersBox = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-fit items-center justify-center">
        <Image src={DragonFrame} alt="Outer Dragon Frame" />
        <div className="bg-rsd-mid-blue absolute flex h-3/4 w-fit items-center rounded-3xl bg-radial from-white px-3 md:mx-24 md:px-64">
          <p className="font-rsd-main text-center font-bold lg:text-4xl">
            Come visit us at tabling for stickers!
          </p>
          <Image
            src={stickerWave}
            alt="sticker wave background"
            className="absolute bottom-0 left-0 z-10 w-full rounded-3xl object-cover"
          />
        </div>
        <Image
          src={star}
          alt="sticker wave background"
          className="absolute top-13 left-17 z-10 w-1/8 object-cover"
        />
      </div>
    </div>
  );
};

export default StickersBox;
