<<<<<<< HEAD
import Image from "next/image";
import Award from "@/public/doublePaddle.webp";
interface AwardCardProps {
  AwardName: string;
}
const AwardCard = ({ AwardName }: AwardCardProps) => {
  return (
    <div className="font-rsd-main flex h-60 w-50 flex-col items-center gap-10 bg-blue-200 p-10 text-xl">
      <div className="h-30 w-30 -translate-y-4 rounded-full bg-neutral-400">
        <Image src={Award} alt="Award" className="mask-radial-at-center" />
      </div>
      <p className="font-rsd-alt -mt-10 text-center text-2xl font-bold text-blue-700">
        {AwardName}
      </p>
    </div>
  );
=======
const AwardCard = () => {
  return <div>AwardCard</div>;
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
};

export default AwardCard;
