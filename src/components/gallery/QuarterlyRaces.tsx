import GalleryCard from "@/components/gallery/GalleryCard";
import Paddle from "@/public/doublePaddle.webp";
import Logo from "@/public/RSDLogo.webp";
import Dragon from "@/public/gallery/dragonBody.webp";
import Image from "next/image";

const QuarterlyRaces = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
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

      <div className="z-10 grid w-3/4 grid-cols-3 grid-rows-3 gap-15 py-10">
        <div className="col-span-2 col-start-2 row-start-1">
          <GalleryCard photoName="Fall '24" link="" image={Logo} />
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <GalleryCard photoName="Winter '25" link="" image={Logo} />
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <GalleryCard photoName="Spring '25" link="" image={Logo} />
        </div>
      </div>
    </div>
  );
};

export default QuarterlyRaces;
