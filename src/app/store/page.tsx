"use client";
import StickersBox from "@/components/store/StickersBox";
import Header from "@/components/Header";
import ProductCard from "@/components/store/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import storeWave from "@/public/store/storeWave.webp";
import Cloud from "@/public/cloud.webp";
import Link from "next/link";
import { motion } from "motion/react";

const Store = () => {
  return (
    <div>
      <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
        <Header text="Featured Products" />
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0.3, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center pt-4 md:flex-row md:pt-0"
        >
          <ProductCard productName="Shirt" productPrice="$17.99" />
          <ProductCard productName="Jacket" productPrice="$29.99" />
        </motion.div>
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0.3, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex w-screen items-center justify-center pt-7.5 md:pb-[22vh]"
        >
          <Image
            src={storeWave}
            alt="store wave background"
            className="absolute bottom-4 left-0 -z-10 hidden w-full object-cover md:block"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute bottom-0 -left-32 -z-10 hidden w-1/5 md:bottom-20 md:-left-25 md:block"
          />
          <Image
            src={Cloud}
            alt="store wave background"
            className="absolute -right-32 bottom-0 -z-10 hidden w-1/6 scale-x-[-1] md:-right-20 md:bottom-60 md:block lg:bottom-83"
          />
          <Button className="font-rsd-alt bg-rsd-title-blue rounded-full p-10 text-center text-xl font-bold text-white hover:bg-blue-900 md:p-12 md:text-3xl lg:p-15 lg:text-5xl">
            <Link href="/">order form!</Link>
          </Button>
        </motion.div>
      </div>
      <div className="relative m-10 flex flex-col items-center md:m-25">
        <Header text="Stickers?" />
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0.3, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <StickersBox />
        </motion.div>
      </div>
    </div>
  );
};

export default Store;
