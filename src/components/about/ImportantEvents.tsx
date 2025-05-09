"use client";
import Header from "@/components/Header";
import InfoBox from "@/components/InfoBox";
import {motion} from "motion/react";

const ImportantEvents = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center">
      <Header text="Important Events" />
      <motion.div className="flex w-5/6 justify-center" whileInView={{opacity: 1, skewX: 0}} transition={{duration: 0.5}} whileHover={{scale: 1.05}} initial={{opacity: 0, scale: 1, skewX: -50}}>
        <InfoBox
          text={
            <div className="flex flex-col items-center gap-10">
              <div className="text-rsd-yellow flex text-4xl font-bold">
                Fall Quarter Race
              </div>
              College Cup in San Francisco, California
              <div className="text-rsd-yellow flex text-4xl font-bold">
                Winter Quarter Race
              </div>
              Tempe Dragon Boat Festival in Tempe, Arizona
              <div className="text-rsd-yellow flex text-4xl font-bold">
                Spring Quarter Race
              </div>
              Baby Long Beach Race in Long Beach, California
            </div>
          }
        />
      </motion.div>
    </div>
  );
};

export default ImportantEvents;
