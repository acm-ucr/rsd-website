"use client";
import { motion } from "motion/react";

interface ComponentProps {
  month: string;
  date: string;
  name: string;
  desc: string;
}

const UpcomingCard = ({ month, date, name, desc }: ComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="bg-rsd-dark-blue font-rsd-alt flex h-1/2 w-11/12 justify-center rounded-4xl p-10 text-white shadow-md md:w-4/5"
    >
      <div className="flex w-2/5 shrink-0 flex-col items-center justify-center gap-y-8 rounded-3xl bg-white p-4 text-center text-black md:w-2/7 md:p-10">
        <div className="text-2xl md:text-4xl">{month}</div>
        <div className="text-5xl md:text-7xl">{date}</div>
      </div>
      <div className="my-4 flex h-full w-2/3 shrink-0 flex-col items-start gap-y-8 p-5 text-left text-white md:p-10">
        <div className="text-xl font-bold md:text-5xl">{name}</div>
        <div className="text-sm font-bold md:text-xl">{desc}</div>
      </div>
    </motion.div>
  );
};

export default UpcomingCard;
