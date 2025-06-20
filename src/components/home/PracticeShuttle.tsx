"use client";
import { motion } from "motion/react";

const PracticeShuttle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex h-1/3 w-full flex-col bg-transparent bg-radial px-3"
    >
      <div className="font-rsd-alt flex flex-col items-center p-6 text-3xl font-normal text-white lg:text-4xl">
        <p>Saturday & Sunday</p>
        <p>10:00 am - 12:00 pm</p>
      </div>

      <p className="font-rsd-alt text-rsd-yellow flex justify-center px-14 py-8 text-center text-3xl font-bold lg:text-4xl">
        *Shuttling starts at 8:30 am!
      </p>
    </motion.div>
  );
};

export default PracticeShuttle;
