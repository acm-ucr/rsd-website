<<<<<<< HEAD
const PastCard = () => {
  return <div>PastCard</div>;
=======
import Image, { StaticImageData } from "next/image";
interface ComponentProps {
  image: StaticImageData;
  eventName: string;
}

const PastCard = ({ eventName, image }: ComponentProps) => {
  return (
    <div className="font-rsd-alt flex h-1/2 w-1/4 flex-col">
      <div className="aspect-[4/3] h-4/5 rounded-t-2xl bg-gray-300">
        <Image
          src={image}
          alt="Image of past event"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex h-1/5 items-center justify-center rounded-b-2xl bg-white">
        <div className="py-4 text-4xl">{eventName}</div>
      </div>
    </div>
  );
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
};

export default PastCard;
