"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Wave from "@/public/home/wave.webp";
import InfoBox from "@/components/InfoBox";
import PracticeShuttle from "@/components/home/PracticeShuttle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const PracticeWrapper = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center xl:mb-4">
        <Header text="Practice Info" />
      </div>
      <div className="relative w-full">
        <Image
          src={Wave}
          alt="Wave"
          className="absolute -z-10 flex h-full w-full object-fill xl:-top-[20vh] xl:h-fit"
        />
        <div className="flex w-full flex-row flex-wrap px-8 xl:flex-nowrap xl:px-10">
          <div className="flex w-full justify-center xl:w-3/4">
            <InfoBox
              text={
                <div className="text-center text-base xl:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              }
            />
          </div>

          <div className="flex w-full justify-center xl:w-1/3">
            <InfoBox
              text={
                <ul className="flex list-[square] flex-col text-center text-base marker:text-3xl marker:text-white xl:gap-8 xl:text-3xl">
                  <li>Sunscreen</li>
                  <li>Water</li>
                  <li>Change of clothes</li>
                  <li>Open-toed shoes</li>
                  <li>Towel</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-30 xl:gap-30">
        <PracticeShuttle />
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="bg-rsd-gold hover:bg-rsd-yellow font-rsd-alt rounded-full p-8 text-center text-3xl font-bold text-black xl:p-15 xl:text-5xl">
            <Link href="/">more events!</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeWrapper;
