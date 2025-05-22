import GalleryCard from "@/components/gallery/GalleryCard";
import Paddle from "@/public/doublePaddle.webp";
import Dragon from "@/public/gallery/dragonBody.webp";
import Image from "next/image";

const QuarterlyRaces = () => {
  return (
    <div className="relative w-full">
      <div className="text-rsd-button-blue font-rsd-alt flex justify-center pb-10 text-5xl font-bold">
        Quarterly Races
      </div>

      <Image
        src={Dragon}
        alt="dragon"
        className="absolute top-80 left-0 -z-10 w-full"
      />
      <Image
        src={Paddle}
        alt="double paddle"
        className="absolute -top-40 left-30 -z-10 w-145"
      />

      <div className="relative z-10 flex justify-center">
        <div className="grid grid-cols-1 gap-12 px-20 py-2">
          <div className="w-955 px-151">
            <GalleryCard photoName="Fall '24" link="" image={Paddle} />
          </div>
          <div className="w-650">
            <GalleryCard photoName="Winter '25" link="" image={Paddle} />
          </div>
          <div className="w-955 px-151">
            <GalleryCard photoName="Spring '25" link="" image={Paddle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuarterlyRaces;
