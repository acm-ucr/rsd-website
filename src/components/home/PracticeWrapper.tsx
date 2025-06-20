"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Wave from "@/public/wave.svg";
import InfoBox from "@/components/InfoBox";
import PracticeShuttle from "@/components/home/PracticeShuttle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const PracticeWrapper = () => {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <Header text="Practice Info" />
      </div>
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Image src={Wave} alt="wave" className="-mb-1 w-full" />
      </motion.div>
      <div className="bg-rsd-wave-blue w-screen">
        <motion.div
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative flex w-full flex-col md:flex-row"
        >
          <div className="flex justify-center md:w-3/4">
            <InfoBox
              text={
                <div className="flex items-center text-center">
                  RSD holds weekend practices at Mother's Beach in Long Beach
                  every Saturday and Sunday. The first two weeks of every
                  quarter are open for everyone to try out the sport, but the
                  following weeks are exclusive to paying members only. Sign ups
                  for practice can be found on our Discord!
                </div>
              }
            />
          </div>
          <div className="flex items-center justify-center md:w-1/3">
            <InfoBox
              text={
                <ul className="marker-text-xl flex list-outside list-[square] flex-col pl-2 marker:text-white md:pl-10 md:marker:text-2xl lg:marker:text-3xl xl:gap-2 2xl:marker:text-4xl">
                  <li>Sunscreen</li>
                  <li>Water</li>
                  <li>Change of clothes</li>
                  <li>Open-toed shoes</li>
                  <li>Towel</li>
                </ul>
              }
            />
          </div>
        </motion.div>
        <div className="flex flex-col items-center pb-10">
          <PracticeShuttle />
          <motion.div whileHover={{ scale: 1.05 }} className="p-6">
            <Button className="bg-rsd-gold hover:bg-rsd-yellow font-rsd-alt rounded-full p-10 text-center text-2xl font-bold text-black md:text-3xl">
              <Link href="/">more events!</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Image src={Wave} alt="wave" className="-mt-1 w-full scale-y-[-1]" />
      </motion.div>
    </div>
  );
};

export default PracticeWrapper;
