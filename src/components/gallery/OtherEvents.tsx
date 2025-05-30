import GalleryCard from "./GalleryCard";
import Image from "next/image";
import wave from "@/public/wave.webp";
import logo from "@/public/RSDLogo.webp";

const OtherEvents = () => {
  return (
    <div className="relative flex w-full flex-col items-center pb-10">
      <Image src={wave} alt="wave" className="absolute bottom-0 w-screen" />
      <div className="relative z-10 w-3/4">
        <div className="text-rsd-button-blue font-rsd-alt flex justify-center pb-10 text-center text-3xl font-bold md:text-5xl">
          Other Events
        </div>
        <div className="items-center justify-center gap-15 space-y-10 pb-10 md:flex md:space-y-0">
          <GalleryCard photoName="Practices ‘24-’25" link="/" image={logo} />
          <GalleryCard photoName="Socials ‘24-’25" link="/" image={logo} />
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
