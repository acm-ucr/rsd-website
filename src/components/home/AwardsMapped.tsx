"use client";
import Award from "@/data/AwardsInfo";
import AwardCard from "@/components/home/AwardCard";
import Header from "@/components/Header";
import { easeInOut, motion } from "motion/react";

const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <Header text="Awards and Recognition" />
      <div className="mb-20 grid grid-cols-1 justify-evenly gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Award.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20, y: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration: 0.7,
                delay: index * 0.2,
                ease: easeInOut,
              },
            }}
            whileHover={{ scale: 1.1 }}
          >
            <AwardCard
              AwardImage={award.image}
              key={index}
              AwardName={award.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
