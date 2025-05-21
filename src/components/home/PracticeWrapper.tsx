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
          className="absolute -z-10 hidden h-full w-full object-fill lg:flex lg:h-fit xl:-top-[20vh]"
        />
        <div className="flex flex-col flex-wrap px-8 md:items-center xl:flex-row xl:flex-nowrap xl:items-stretch xl:px-10">
          <div className="flex justify-center xl:w-3/4">
            <InfoBox
              text={
                <div className="flex h-full items-center text-center">
                  RSD holds weekend practices at Mother's Beach in Long Beach
                  every Saturday and Sunday. The first two weeks of every
                  quarter are open for everyone to try out the sport, but the
                  following weeks are exclusive to paying members only. Sign ups
                  for practice can be found on our Discord!
                </div>
              }
            />
          </div>

          <div className="flex items-center justify-center sm:w-full md:w-2/3 xl:w-1/3">
            <InfoBox
              text={
                <ul className="flex list-inside list-[square] flex-col marker:text-4xl marker:text-white xl:gap-8 xl:pl-2">
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

      <div className="flex flex-col items-center">
        <PracticeShuttle />
        <motion.div whileHover={{ scale: 1.05 }} className="pt-30 xl:pt-30">
          <Button className="bg-rsd-gold hover:bg-rsd-yellow font-rsd-alt rounded-full p-8 text-center text-3xl font-bold text-black xl:p-15 xl:text-5xl">
            <Link href="/">more events!</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeWrapper;
