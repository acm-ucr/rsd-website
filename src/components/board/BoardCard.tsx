import Image from "next/image";
import Temp from "@/public/RSDLogo.webp";
import { Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

interface BoardCardProps {
  name: string;
  role: string;
}

const BoardCard = ({ name, role }: BoardCardProps) => {
  return (
    <div className="to-rsd-dark-blue from-rsd-title-blue flex h-4/5 w-4/12 flex-col place-items-center rounded-3xl bg-radial p-15">
      <Image
        src={Temp}
        alt="Temp"
        className="flex aspect-square h-80 w-96 flex-shrink-0 justify-center rounded-2xl object-fill"
      />
      <div className="font-rsd-alt flex flex-col items-center p-5 text-center font-bold">
        <div className="text-rsd-yellow flex text-4xl">{name}</div>
        <div className="flex text-center text-3xl text-white">{role}</div>
      </div>
      <div className="ml-72 flex flex-row place-items-end justify-end p-2">
        <Mail className="flex h-12 w-12 text-white" />
        <AiFillInstagram className="flex text-5xl text-white" />
        <FaDiscord className="flex text-5xl text-white" />
      </div>
    </div>
  );
};

export default BoardCard;
