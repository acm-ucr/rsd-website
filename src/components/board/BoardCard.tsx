import Image, { StaticImageData } from "next/image";
import RSDLogo from "@/public/RSDLogo.webp";
import { Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  email: string;
  discord: string;
  instagram: string;
}

const BoardCard = ({
  name,
  role,
  image,
  email,
  discord,
  instagram,
}: BoardCardProps) => {
  return (
    <div className="to-rsd-dark-blue from-rsd-title-blue xs:max-w-xs flex w-full max-w-[95vw] flex-col items-center overflow-hidden rounded-3xl bg-radial p-4 transition-all duration-300 sm:max-w-sm sm:p-6 md:max-w-md md:p-10 lg:max-w-lg xl:max-w-xl xl:p-12 2xl:max-w-2xl">
      <Image
        src={image || RSDLogo}
        alt={name}
        className="xs:w-40 xs:h-40 aspect-square h-32 w-32 rounded-2xl object-cover sm:h-48 sm:w-48 md:h-56 md:w-56 xl:h-64 xl:w-64 2xl:h-72 2xl:w-72"
      />
      <div className="font-rsd-alt flex flex-col items-center p-2 text-center font-bold break-words sm:p-4">
        <div className="text-rsd-yellow xs:text-2xl text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
          {name}
        </div>
        <div className="xs:text-lg text-base text-white sm:text-xl md:text-2xl xl:text-3xl">
          {role}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-3 p-2 sm:gap-4">
        <Link href={email}>
          <Mail className="xs:h-7 xs:w-7 h-6 w-6 text-white sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </Link>
        <Link href={instagram}>
          <AiFillInstagram className="xs:text-2xl text-xl text-white sm:text-3xl md:text-4xl" />
        </Link>
        <Link href={discord}>
          <FaDiscord className="xs:text-2xl text-xl text-white sm:text-3xl md:text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default BoardCard;
