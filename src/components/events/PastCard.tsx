import Image, { StaticImageData } from "next/image";
interface ComponentProps {
  image: StaticImageData;
  eventName: string;
}

const PastCard = ({ eventName, image }: ComponentProps) => {
  return (
    <div className="font-rsd-alt flex h-1/2 flex-col">
      <div className="aspect-[4/3] h-4/5 rounded-t-2xl bg-gray-300">
        <Image
          src={image}
          alt="Image of past event"
          className="size-full object-contain rounded-t-2xl"
        />
      </div>
      <div className="flex h-1/5 items-center justify-center rounded-b-2xl bg-white">
        <div className="py-4 text-xl md:text-2xl lg:text-4xl">{eventName}</div>
      </div>
    </div>
  );
};

export default PastCard;
