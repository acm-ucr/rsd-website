"use client";
import Awards from "@/data/AwardsInfo";
import AwardCard from "@/components/home/Card";
import Header from "@/components/Header";
import { motion } from "motion/react";

const AwardsMapped = () => {
  return (
    <div className="flex flex-col items-center">
      <Header text="Awards and Recognition" />
      <div className="mb-24 grid grid-cols-1 justify-evenly gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Awards.map(({name, image}, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          >
            <AwardCard
              AwardImage={image}
              key={index}
              AwardName={name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardsMapped;
