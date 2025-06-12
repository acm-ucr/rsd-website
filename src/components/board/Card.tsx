"use client";
import Image, { StaticImageData } from "next/image";
import RSDLogo from "@/public/RSDLogo.webp";
import { Mail } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { motion } from "motion/react";

interface BoardCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  email: string;
  instagram: string;
}

const iconAnimation = {
  hidden: { opacity: 0 },
  display: { opacity: 1 },
};

const BoardCard = ({ name, role, image, email, instagram }: BoardCardProps) => {
  return (
    <div className="to-rsd-dark-blue from-rsd-title-blue flex flex-col items-center rounded-3xl bg-radial p-10 md:w-[30vw] lg:p-15">
      <Image
        src={image || RSDLogo}
        alt={name}
        className="flex aspect-square h-3/4 w-full justify-center rounded-2xl object-cover"
      />
      <div className="font-rsd-alt flex flex-col items-center p-5 text-center font-bold">
        <div className="text-rsd-yellow flex text-3xl lg:text-4xl">{name}</div>
        <div className="flex text-center text-xl text-white lg:text-3xl">
          {role}
        </div>
      </div>
      <div className="flex w-full flex-row place-items-end justify-end">
        <motion.div
          variants={iconAnimation}
          initial="hidden"
          whileInView="display"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={email}>
            <Mail className="flex h-12 w-12 text-white" />
          </Link>
        </motion.div>
        <motion.div
          variants={iconAnimation}
          initial="hidden"
          whileInView="display"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={instagram}>
            <AiFillInstagram className="flex text-5xl text-white" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BoardCard;
