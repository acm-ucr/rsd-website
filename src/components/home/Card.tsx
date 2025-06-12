import Image, { StaticImageData } from "next/image";
interface AwardCardProps {
  AwardName: string;
  AwardImage: StaticImageData;
}
const AwardCard = ({ AwardName, AwardImage }: AwardCardProps) => {
  return (
    <div className="font-rsd-main mb-15 flex h-55 w-64 flex-col items-center gap-10 p-7 sm:h-65 sm:p-8 md:mb-0 md:h-80 md:p-9 lg:h-80 lg:p-10">
      <Image
        src={AwardImage}
        alt="Award"
        className="bg-rsd-light-blue mask-radial-at-center size-50 -translate-y-4 rounded-full"
      />
      <p className="font-rsd-alt text-rsd-title-blue -mt-10 text-center text-base font-bold sm:text-lg md:text-xl">
        {AwardName}
      </p>
    </div>
  );
};

export default AwardCard;