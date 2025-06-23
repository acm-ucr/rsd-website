"use client";
import GalleryCard from "@/components/gallery/Card";
import Paddle from "@/public/doublePaddle.webp";
import Dragon from "@/public/gallery/dragonBody.webp";
import Image from "next/image";
import { motion } from "motion/react";
import Tempe from "@/public/events/tempe.webp";
import CollegeCup from "@/public/events/collegeCup.webp";
import BBLB from "@/public/events/bblb.webp";

const subHeaderAnimations = {
  initial: { opacity: 0.5, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const paddleAnimations = {
  initial: { x: -50, rotateZ: -50 },
  animate: { x: 0, rotateZ: 0 },
  transition: { duration: 0.5 },
  className: "absolute -top-40 -rotate-45 -left-20 -z-10 hidden w-145 md:flex",
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
        <Image src={Paddle} alt="double paddle" className="" />
      </motion.div>

      <motion.div {...dragonAnimations}>
        <Image src={Dragon} alt="dragon" className="w-full" />
      </motion.div>

      <div className="z-10 w-3/4 grid-cols-3 grid-rows-3 gap-15 space-y-10 py-10 md:grid md:space-y-0">
        <div className="col-span-2 col-start-2 row-start-1">
          <GalleryCard
            photoName="Fall"
            link="https://photos.google.com/share/AF1QipMqGiMXsa4ibCJ_aR_lAOmBpNfLxbyMfgYF1nSDfr2fN6E1v0AJbAd8e97d-f2o7Q?key=VkpuWTVndEFPdHFYT09rNVQ5NGdfUk03UXp2alln"
            image={CollegeCup}
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <GalleryCard
            photoName="Winter"
            link="https://photos.google.com/share/AF1QipMqGiMXsa4ibCJ_aR_lAOmBpNfLxbyMfgYF1nSDfr2fN6E1v0AJbAd8e97d-f2o7Q?key=VkpuWTVndEFPdHFYT09rNVQ5NGdfUk03UXp2alln"
            image={Tempe}
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <GalleryCard
            photoName="Spring"
            link="https://photos.google.com/share/AF1QipMqGiMXsa4ibCJ_aR_lAOmBpNfLxbyMfgYF1nSDfr2fN6E1v0AJbAd8e97d-f2o7Q?key=VkpuWTVndEFPdHFYT09rNVQ5NGdfUk03UXp2alln"
            image={BBLB}
          />
        </div>
      </div>
    </div>
  );
};

export default QuarterlyRaces;
