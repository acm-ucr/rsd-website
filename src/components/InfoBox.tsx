"use client";
import { motion } from "motion/react";
interface InfoBoxProps {
  text: React.ReactNode;
}

const Animation = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  className: "m-10 flex w-full max-w-screen items-center justify-center",
};

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <motion.div {...Animation}>
      <div className="my-10 w-11/12 px-2 text-left md:my-12 xl:px-8">
        <div className="font-rsd-alt bg-rsd-dark-blue flex h-full justify-center rounded-4xl px-16 py-8 text-base font-bold text-white lg:px-20 lg:py-10 lg:text-2xl 2xl:text-3xl">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoBox;
