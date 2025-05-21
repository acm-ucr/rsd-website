import GalleryCard from "@/components/gallery/GalleryCard";
import Paddle from "@/public/doublePaddle.webp";
import Dragon from "@/public/gallery/dragonBody.webp";
import Image from "next/image";

const QuarterlyRaces = () => {
  return (
    <div className="relative w-full pb-[1100px]">
      {/* Subtitle */}
      <div className="text-rsd-button-blue font-rsd-alt flex justify-center pb-10 text-5xl font-bold">
        Quarterly Races
      </div>

      {/* Image Assets */}
      <Image
        src={Dragon}
        alt="dragon"
        className="absolute top-80 left-0 w-full"
      />
      <Image
        src={Paddle}
        alt="double paddle"
        className="absolute -top-40 left-30 w-145"
      />

      {/* Gallery Cards */}

      <div className="absolute top-24 right-20 w-1/2">
        <div className="w-650">
          <GalleryCard photoName="Fall '24" link="" image={Paddle} />
        </div>
      </div>
      <div className="absolute top-112 left-20 w-1/2">
        <div className="w-650">
          <GalleryCard photoName="Winter '25" link="" image={Paddle} />
        </div>
      </div>
      <div className="absolute top-200 right-20 w-1/2">
        <div className="w-650">
          <GalleryCard photoName="Spring '25" link="" image={Paddle} />
        </div>
      </div>
    </div>
  );
};

export default QuarterlyRaces;
