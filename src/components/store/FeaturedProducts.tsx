"use client";
import { motion } from "motion/react";
import Card from "@/components/store/Card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import storeWave from "@/public/store/storeWave.webp";
import Cloud from "@/public/cloud.webp";
import Link from "next/link";
import Header from "@/components/Header";
import Logo from "@/public/RSDLogo.webp";
import Jersey from "@/public/store/Jersey1.webp";

const FeaturedProducts = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
      <Header text="Featured Products" />
      <motion.div
        transition={{ duration: 0.7, delay: 0.4 }}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center justify-center pb-4 lg:flex-row lg:pb-15"
      >
        <Card productName="Jersey" productPrice="$46.00" productImg={Jersey} />
        <Card productName="Tank Top" productPrice="$40.00" productImg={Logo} />
      </motion.div>
      <div className="relative flex w-screen items-center justify-center pt-7.5 md:pb-[22vh]">
        <motion.div
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          initial={{ scale: 1, opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-4 left-0 -z-10 hidden w-full object-cover md:block"
        >
          <Image
            src={storeWave}
            alt="store wave background"
            className="w-full"
          />
        </motion.div>

        <motion.div
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          initial={{ scale: 1, opacity: 0, x: -137 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-4 -left-32 -z-10 hidden w-1/5 md:bottom-22 md:-left-25 md:block"
        >
          <Image src={Cloud} alt="cloud 1" />
        </motion.div>
        <motion.div
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          initial={{ scale: 1, opacity: 0, x: -137 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -right-32 bottom-0 -z-10 hidden w-1/6 scale-x-[-1] md:-right-20 md:bottom-60 md:block lg:bottom-83"
        >
          <Image src={Cloud} alt="cloud 2" />
        </motion.div>
        <motion.div
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button className="font-rsd-alt bg-rsd-title-blue rounded-full p-10 text-center text-xl font-bold text-white hover:scale-110 hover:bg-blue-900 md:p-12 md:text-3xl lg:p-15 lg:text-5xl">
            <Link href="https://forms.gle/ND5J6C3FVt3jseaNA">order form!</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
