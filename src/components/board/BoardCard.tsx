import Image from "next/image";
import Temp from "@/public/RSDLogo.webp";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

interface BoardCardProps {
  name: string;
  role: string;
}

const BoardCard = ({ name, role }: BoardCardProps) => {
  return (
    <div className="to-rsd-dark-blue flex h-[615px] w-[504.4px] flex-col place-items-center rounded-[20px] bg-radial from-[#074CB5] via-[#002f74]">
      <div className="mt-19 flex h-[304.82px] w-[375.49px] justify-center">
        <Image src={Temp} alt="Temp" className="rounded-[20px]" />
      </div>
      <p className="font-rsd-alt flex h-[75px] pt-8 text-center text-[40px] leading-none font-bold text-[#FFCC61]">
        {name}
      </p>
      <p className="font-rsd-alt flex h-[75px] pt-2 text-center text-[32px] leading-none font-bold text-[#E8ECF1]">
        {role}
      </p>
      <div className="mb-12 ml-72 flex h-[54.53px] w-[143.62px] justify-end">
        <IoIosMail className="-mr-1.5 flex h-[63.7px] w-[57.87px] fill-[#E8ECF1] pt-0" />
        <AiFillInstagram className="mr-0.5 flex h-[63.7px] w-[57.87px] fill-[#E8ECF1] pt-0" />
        <FaDiscord className="-ml-1.5 flex h-[63.7px] w-[57.87px] pt-0 text-[#E8ECF1]" />
      </div>
    </div>
  );
};

export default BoardCard;
