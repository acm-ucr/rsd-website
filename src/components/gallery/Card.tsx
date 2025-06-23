"use client";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface GalleryInfo {
  photoName: string;
  link: string;
  image: StaticImageData;
}

const wrapAnimation = {
  initial: { opacity: 0.5, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  className: "w-full",
};

const GalleryCard = ({ photoName, link, image }: GalleryInfo) => {
  return (
    <motion.div {...wrapAnimation}>
      <Link
        href={link}
        target="_blank"
        className="font-rsd-alt flex w-full flex-col drop-shadow-lg"
      >
        <div className="relative h-80 rounded-t-2xl bg-gray-200">
          <Image
            className="rounded-t-2xl object-cover"
            src={image}
            alt="product"
            fill
          />
        </div>
        <div className="rounded-b-2xl bg-white p-2 text-center text-xl">
          {photoName}
        </div>
      </Link>
    </motion.div>
  );
};

export default GalleryCard;
