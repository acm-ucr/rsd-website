import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import Dragon from "@/public/about/dragon.webp";

const History = () => {
  return (
    <div className="relative flex h-3/4 w-full flex-col items-center justify-center overflow-hidden pb-25">
      <Image
        src={Dragon}
        alt="Dragon Boat Background"
        className="absolute bottom-0 left-0 z-0 hidden w-full object-cover sm:bottom-20 sm:block md:bottom-13 lg:bottom-10 xl:bottom-5 2xl:-bottom-5"
      />
      <div className="z-10 flex w-full flex-col items-center px-6 py-14 text-center">
        <Header text="History of Dragon Boat" />
        <InfoBox text="Dragon boat racing dates back over 2,000 years to ancient China, where it originated as a ritual to honor the poet Qu Yuan and bring good fortune through competitive paddling. Over time, it evolved into an international water sport, blending tradition with high-intensity teamwork and endurance. At UCR, the Riverside Surging Dragons continues this legacy, providing students with a unique opportunity to build strength, camaraderie, and school spirit through competitive racing and community engagement." />
      </div>
    </div>
  );
};

export default History;
