import Header from "@/components/Header"
import InfoBox from "@/components/InfoBox"
import Image from "next/image";
import background from "@/public/about/dragon.webp"

interface ComponentProps {
  title: string;
  text: string;

}


const History = ({ title, text }: ComponentProps) => {
  return (
    <div className="relative w-full h-3/4 flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={background}
          alt="Dragon Boat Background"
          fill
          className="object-cover translate-y-20 absolute top-0 left-0 z-0"
        />  
      <div className="z-10 px-6 py-14 w-full flex flex-col items-center text-center">
        <Header text={title} />
        <InfoBox text={text}/>
      </div>
    </div>
  )
};

export default History;
