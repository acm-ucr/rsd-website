import Image from "next/image";
import Award from "@/public/doublePaddle.webp";
interface AwardCardProps {
  AwardName: string;
}
const AwardCard = ({ AwardName }: AwardCardProps) => {
  return (
    <div className="font-rsd-main flex h-55 w-64 flex-col items-center gap-10 p-7 sm:h-65 sm:p-8 md:h-80 md:p-9 lg:h-80 lg:p-10">
      <Image
        src={Award}
        alt="Award"
        className="bg-rsd-light-blue mask-radial-at-center h-30 w-30 -translate-y-4 rounded-full"
      />
      <p className="font-rsd-alt text-rsd-title-blue -mt-10 text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-2xl">
        {AwardName}
      </p>
    </div>
  );
};

export default AwardCard;
