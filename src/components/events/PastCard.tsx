import Image, { StaticImageData } from "public/RSDLogo"
interface ComponentProps {
  image: StaticImageData;
  eventName: string;
}

const PastCard = ( {eventName, image}: ComponentProps) => {
  return (
  <div> className="bg-rsd-light-blue"</div>
  );
};

export default PastCard;
