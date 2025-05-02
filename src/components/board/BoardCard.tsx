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
    <div className="to-rsd-dark-blue from-rsd-title-blue flex w-[30vw] flex-col items-center rounded-3xl bg-radial p-15">
      <Image
        src={image || RSDLogo}
        alt={name}
        className="flex aspect-square flex-shrink-0 justify-center rounded-2xl object-fill"
      />
      <div className="font-rsd-alt flex flex-col items-center p-5 text-center font-bold">
        <div className="text-rsd-yellow flex text-4xl">{name}</div>
        <div className="flex text-center text-3xl text-white">{role}</div>
      </div>
      <div className="flex w-full flex-row place-items-end justify-end p-2">
        <Link href={email}>
          <Mail className="flex h-12 w-12 text-white" />
        </Link>
        <Link href={instagram}>
          <AiFillInstagram className="flex text-5xl text-white" />
        </Link>
        <Link href={discord}>
          <FaDiscord className="flex text-5xl text-white" />
        </Link>
      </div>
    </div>
  );
};

export default BoardCard;
