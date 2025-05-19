import Image from "next/image";
import Award from "@/public/doublePaddle.webp";
interface AwardCardProps {
  AwardName: string;
}
const AwardCard = ({ AwardName }: AwardCardProps) => {
  return (
    <div className="font-rsd-main flex h-80 w-64 flex-col items-center gap-10 p-10 text-xl">
      <Image
        src={Award}
        alt="Award"
        className="bg-rsd-light-blue mask-radial-at-center h-30 w-30 -translate-y-4 rounded-full"
      />
      <p className="font-rsd-alt text-rsd-title-blue -mt-10 text-center text-2xl font-bold">
        {AwardName}
      </p>
    </div>
  );
};

export default AwardCard;
