"use client";
import GalleryCard from "@/components/gallery/GalleryCard";
import Paddle from "@/public/doublePaddle.webp";
import Logo from "@/public/RSDLogo.webp";
import Dragon from "@/public/gallery/dragonBody.webp";
import Image from "next/image";
import { motion } from "motion/react";

const subHeaderAnimations = {
  initial: { opacity: 0.5, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const paddleAnimations = {
  initial: { x: -50, rotateZ: -50 },
  animate: { x: 0, rotateZ: 0 },
  transition: { duration: 0.5 },
  className: "absolute -top-40 left-30 -z-10 hidden w-145 xl:flex",
};
const dragonAnimations = {
  initial: { opacity: 0.5 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
  className: "absolute top-80 left-0 -z-10 hidden w-full md:flex",
};

const QuarterlyRaces = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <motion.div {...subHeaderAnimations}>
        <div className="text-rsd-button-blue font-rsd-alt flex pt-4 pb-10 text-center text-3xl font-bold md:text-5xl">
          Quarterly Races
        </div>
      </motion.div>

      <motion.div {...paddleAnimations}>
        <Image src={Paddle} alt="double paddle" className="relative" />
      </motion.div>

      <motion.div {...dragonAnimations}>
        <Image src={Dragon} alt="dragon" className="relative w-full" />
      </motion.div>

      <div className="z-10 w-3/4 grid-cols-3 grid-rows-3 gap-15 space-y-10 py-10 md:grid md:space-y-0">
        <div className="col-span-2 col-start-2 row-start-1">
          <GalleryCard photoName="Fall" link="" image={Logo} />
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <GalleryCard photoName="Winter" link="" image={Logo} />
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <GalleryCard photoName="Spring" link="" image={Logo} />
        </div>
      </div>
    </div>
  );
};

export default QuarterlyRaces;
