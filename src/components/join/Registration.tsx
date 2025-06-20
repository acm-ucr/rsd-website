"use client";
import InfoBox from "../InfoBox";
import Image from "next/image";
import Star4Point from "@/public/4pointStar.webp";
import items from "@/data/FeeLabels";
import Header from "@/components/Header";
import { motion } from "motion/react";

const Registration = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Header text="Fee Information" />
      <div className="relative flex justify-center">
        <motion.div
          transition={{ duration: 0.7, delay: 0.2 }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          className="absolute top-[15%] left-[3%] size-10 md:size-20"
        >
          <Image src={Star4Point} alt="Four Point Star" />
        </motion.div>

        <motion.div
          transition={{ duration: 0.7, delay: 0.2 }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, rotate: 360 }}
          className="absolute right-[4%] bottom-[10%] size-10 md:size-20"
        >
          <Image src={Star4Point} alt="Four Point Star" />
        </motion.div>

        <InfoBox
          text={
            <ul className="marker:text-rsd-gold list-outside list-disc">
              {items.map((item, index) => (
                <li key={index}>
                  <span className="text-rsd-gold">{item.label}:</span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Registration;
