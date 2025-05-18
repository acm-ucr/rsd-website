import GalleryCard from "./GalleryCard";
import Image from "next/image";
import wave from "@/public/wave.webp";
import logo from "@/public/RSDLogo.webp";

const OtherEvents = () => {
  return (
    <div className="relative pb-10">
      <Image src={wave} alt="wave" className="absolute bottom-0 w-screen" />
      <div className="relative z-10">
        <div className="text-rsd-button-blue font-rsd-alt flex justify-center pb-10 text-5xl font-bold">
          Other Events
        </div>
        <div className="flex items-center justify-center gap-15 pb-10">
          <GalleryCard photoName="Practices ‘24-’25" link="/" image={logo} />
          <GalleryCard photoName="Socials ‘24-’25" link="/" image={logo} />
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
