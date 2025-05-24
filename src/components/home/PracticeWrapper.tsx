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
      <div className="mb-4 flex justify-center">
        <Header text="Practice Info" />
      </div>
      <div className="bg-rsd-title-blue w-full rounded-4xl xl:bg-transparent">
        <div className="relative w-full">
          <Image
            src={Wave}
            alt="Wave"
            className="absolute -z-10 hidden h-full w-full object-fill lg:h-fit xl:-top-[18vh] xl:flex 2xl:-top-[8vh]"
          />
          <div className="flex flex-col flex-wrap px-2 md:flex-row md:flex-nowrap md:items-center xl:items-stretch xl:px-10 xl:py-10">
            <div className="flex justify-center md:w-3/4">
              <InfoBox
                text={
                  <div className="flex items-center text-center">
                    RSD holds weekend practices at Mother's Beach in Long Beach
                    every Saturday and Sunday. The first two weeks of every
                    quarter are open for everyone to try out the sport, but the
                    following weeks are exclusive to paying members only. Sign
                    ups for practice can be found on our Discord!
                  </div>
                }
              />
            </div>

            <div className="flex items-center justify-center md:w-1/3">
              <InfoBox
                text={
                  <ul className="marker-text-xl flex list-outside list-[square] flex-col pl-8 marker:text-white md:pl-10 md:marker:text-2xl lg:marker:text-3xl xl:gap-4 2xl:marker:text-5xl">
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
          <motion.div whileHover={{ scale: 1.05 }} className="p-10 2xl:pt-40">
            <Button className="bg-rsd-gold hover:bg-rsd-yellow font-rsd-alt rounded-full p-8 text-center text-3xl font-bold text-black xl:p-16 xl:text-5xl 2xl:p-32 2xl:text-7xl">
              <Link href="/">more events!</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PracticeWrapper;
