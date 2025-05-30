"use client";
import { motion } from "motion/react";

interface HeaderProps {
  text: string;
}
const Header = ({ text }: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="m-10 flex w-full items-center justify-center"
    >
      <div className="font-rsd-main text-rsd-title-blue text-center text-5xl sm:text-6xl xl:text-7xl">
        {text}
      </div>
    </motion.div>
  );
};

export default Header;
