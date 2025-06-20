"use client";
import StickersBox from "@/components/store/StickersBox";
import Header from "@/components/Header";
import { motion } from "motion/react";
const Sticker = () => {
  return (
    <div className="relative m-10 flex flex-col items-center md:m-25">
      <Header text="Stickers?" />
      <motion.div
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <StickersBox />
      </motion.div>
    </div>
  );
};

export default Sticker;
