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
    <div className="to-rsd-dark-blue from-rsd-title-blue flex h-10/12 w-4/12 flex-col place-items-center rounded-2xl bg-radial">
      <div className="mt-18 flex h-7/12 w-9/12 flex-col items-center pt-4">
        <Image
          src={Temp}
          alt="Temp"
          className="h-11/12 w-12/12 flex-shrink-0 justify-center rounded-2xl"
        />
      </div>
      <p className="font-rsd-alt text-rsd-yellow flex justify-center pt-1 text-center text-4xl leading-none font-bold">
        {name}
      </p>
      <p className="font-rsd-alt flex pt-2 text-center text-3xl leading-none font-bold text-white">
        {role}
      </p>
      <div className="flex w-5/6 place-items-end justify-end gap-0 pt-4">
        <Mail className="flex h-11/12 w-1/8 text-white" />
        <AiFillInstagram className="flex text-5xl text-white" />
        <FaDiscord className="flex text-5xl text-white" />
      </div>
    </div>
  );
};

export default BoardCard;
