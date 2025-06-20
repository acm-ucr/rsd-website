"use client";
import { motion } from "motion/react";
import PastCard from "@/components/events/PastCard";
import Cloud from "@/public/cloud.webp";
import logo from "@/public/RSDLogo.webp";
import Header from "@/components/Header";
import Image from "next/image";

const PastSection = () => {
  return (
    <div className="relative flex w-full max-w-screen flex-col items-center pb-20 md:mt-15">
      <Header text="Past Events" />
      <motion.div
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex w-10/12 flex-col justify-center gap-10 md:w-11/12 md:flex-row md:[&>*:nth-child(even)]:mt-40"
      >
        <PastCard eventName="eventName" image={logo} />
        <PastCard eventName="eventName" image={logo} />
        <PastCard eventName="eventName" image={logo} />
      </motion.div>
      <motion.div
        transition={{
          duration: 0.8,
        }}
        initial={{ scale: 1, opacity: 0, x: -137 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-0 -left-[7%] hidden w-1/4 md:block"
      >
        <Image src={Cloud} alt="cloud" />
      </motion.div>
      <motion.div
        transition={{
          duration: 0.8,
        }}
        initial={{ scale: 1, opacity: 0, x: 137 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute -right-[7%] bottom-0 hidden w-1/4 md:block"
      >
        <Image src={Cloud} alt="cloud" />
      </motion.div>
    </div>
  );
};

export default PastSection;
