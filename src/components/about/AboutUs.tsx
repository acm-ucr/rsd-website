"use client";
import { motion } from "motion/react";
import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import Paddles from "@/public/doublePaddle.webp";
import Star4Point from "@/public/4pointStar.svg";

const AboutUs = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center overflow-hidden px-6 text-center">
      <Header text="About Us" />
      <div className="relative flex w-full flex-col items-center">
        <InfoBox
          text="Dragon Boat is a team sport with 18-20 paddlers, a drummer, and a steer. The drummer sits at the front, drumming to set the pace and make calls when necessary. The steer stands at the back of the boat (the stern) and guides the boat through the water, keeping it on course. 
    Riverside Surging Dragons is UCR’s competitive dragon boat team, where competition meets community! We push each other to be stronger on the water while creating a tight-knit community through team socials, bonding events, and shared experiences. Whether you’re here to compete, make friends, or try something new, our boat is always open to you!"
        />
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          className="absolute top-6 left-[12%] size-10 rotate-45 md:top-20 md:left-17 md:size-10"
        >
          <Image src={Star4Point} alt="Four Point Star" />
        </motion.div>
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          className="absolute top-12 left-[8%] size-8 md:top-[12%] md:size-15"
        >
          <Image src={Star4Point} alt="Four Point Star" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="scale-x-[-1]-rotate-35 absolute -top-[5%] -right-[5%] hidden size-60 md:block xl:right-0"
        >
          <Image src={Paddles} alt="Paddles" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
