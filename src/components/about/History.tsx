import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import background from "@/public/about/dragon.webp";

interface ComponentProps {
  title: string;
  text: string;
}

const History = ({ title, text }: ComponentProps) => {
  return (
    <div className="relative flex h-3/4 w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src={background}
        alt="Dragon Boat Background"
        fill
        className="absolute top-0 left-0 z-0 translate-y-20 object-cover"
      />
      <div className="z-10 flex w-full flex-col items-center px-6 py-14 text-center">
        <Header text={title} />
        <InfoBox text={text} />
      </div>
    </div>
  );
};

export default History;
