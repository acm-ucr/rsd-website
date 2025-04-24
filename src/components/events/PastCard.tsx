import Image, { StaticImageData } from "next/image"
interface ComponentProps {
  image: StaticImageData;
  eventName: string;
}

const PastCard = ( {eventName, image}: ComponentProps) => {
  return (
    <div className="flex flex-col w-1/4 h-1/2 font-rsd-alt">
      <div className="h-4/5 bg-gray-300 rounded-t-2xl aspect-[4/3]">
        <Image 
        src={image}
        alt="Image of past event"
        className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center bg-white h-1/5 rounded-b-2xl">
        <div className="text-4xl">{eventName}</div>
      </div>
    </div>
  );
};

export default PastCard;
