"use client";
import GalleryCard from "./Card";
import Image from "next/image";
import wave from "@/public/wave.webp";
import practices from "@/public/gallery/practice.webp";
import socials from "@/public/gallery/socials.webp";
import { motion } from "motion/react";

const waveAnimation = {
  initial: { opacity: 0, skewX: 10, scaleY: 0.5 },
  whileInView: { opacity: 1, skewX: 0, scaleY: 1 },
  transition: { duration: 0.5 },
  className: "absolute bottom-0 w-screen",
};
const textAnimation = {
  initial: { opacity: 0.5, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const OtherEvents = () => {
  return (
    <div className="relative flex w-full flex-col items-center pb-10">
      <motion.div {...waveAnimation}>
        <Image src={wave} alt="wave" className="absolute bottom-0 w-screen" />
      </motion.div>

      <div className="relative z-10 w-3/4">
        <motion.div {...textAnimation}>
          <div className="text-rsd-button-blue font-rsd-alt flex justify-center pb-10 text-center text-3xl font-bold md:text-5xl">
            Other Events
          </div>
        </motion.div>
        <div className="items-center justify-center gap-15 space-y-10 pb-10 md:flex md:space-y-0">
          <GalleryCard
            photoName="Practices"
            link="https://photos.google.com/share/AF1QipMqGiMXsa4ibCJ_aR_lAOmBpNfLxbyMfgYF1nSDfr2fN6E1v0AJbAd8e97d-f2o7Q?key=VkpuWTVndEFPdHFYT09rNVQ5NGdfUk03UXp2alln"
            image={practices}
          />
          <GalleryCard
            photoName="Socials"
            link="https://photos.google.com/share/AF1QipMqGiMXsa4ibCJ_aR_lAOmBpNfLxbyMfgYF1nSDfr2fN6E1v0AJbAd8e97d-f2o7Q?key=VkpuWTVndEFPdHFYT09rNVQ5NGdfUk03UXp2alln"
            image={socials}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
