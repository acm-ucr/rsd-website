"use client";
import GalleryCard from "./GalleryCard";
import Image from "next/image";
import wave from "@/public/wave.webp";
import logo from "@/public/RSDLogo.webp";
import { motion } from "motion/react";

const waveAnimation = {
  initial: { opacity: 0.5 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5 },
  className: "absolute bottom-0 w-screen",
  viewport: { once: true },
};
const textAnimation = {
  initial: { opacity: 0.5 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5 },
  viewport: { once: true },
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
          <GalleryCard photoName="Practices ‘24-’25" link="/" image={logo} />
          <GalleryCard photoName="Socials ‘24-’25" link="/" image={logo} />
        </div>
      </div>
    </div>
  );
};

export default OtherEvents;
