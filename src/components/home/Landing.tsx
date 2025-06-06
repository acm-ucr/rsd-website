"use client";
import { motion } from "motion/react";
import Image from "next/image";
import dragon from "@/public/home/dragon2.webp";
import fourStar from "@/public/4pointStar.webp";
import fiveStar from "@/public/5pointStar.webp";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="bg-rsd-mid-blue relative m-10 flex w-11/12 items-center justify-center rounded-4xl p-5 text-center sm:w-9/12 md:w-8/12 lg:rounded-[75px]"
    >
      <div className="bg-rsd-dark-blue rounded-4xl lg:rounded-[75px]">
        <Image
          src={dragon}
          alt="dragon outline"
          className="invisible rounded-4xl object-cover py-3 md:visible md:py-0 lg:rounded-[75px]"
        />
      </div>
      <Image
        src={fourStar}
        alt="star"
        className="absolute top-[18%] left-[21%] hidden size-10 sm:block lg:size-13 xl:size-16"
      />
      <Image
        src={fourStar}
        alt="star"
        className="absolute right-[25%] bottom-[10%] hidden size-10 sm:block md:bottom-[16%] lg:size-13 xl:size-16"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute bottom-[13%] left-[20%] hidden size-7 sm:block md:bottom-[18%] lg:size-9 xl:size-12"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-[50%] left-[8%] hidden size-7 lg:block lg:size-9 xl:size-12"
      />
      <Image
        src={fiveStar}
        alt="star"
        className="absolute top-[50%] right-[10%] hidden size-7 lg:block lg:size-9 xl:size-12"
      />

      <div className="absolute inset-y-0 flex w-4/5 flex-col items-center justify-center md:pt-4 lg:w-2/3">
        <div className="font-rsd-main text-rsd-yellow text-center text-xl font-bold sm:text-2xl lg:text-4xl xl:text-5xl">
          Riverside <br />
          Surging Dragons
        </div>
        <div className="font-rsd-alt item-center pt-2 text-center text-sm text-white sm:text-lg md:text-base xl:pt-4 xl:text-xl 2xl:text-2xl">
          Riverside Surging Dragons is a dragon boat club at UCR, rooted in the
          traditions of Chinese sport: dragon boat racing. We are a devoted team
          of college students, eager to thrive in the water and build
          everlasting friendships whilst fostering an inclusive and welcoming
          environment.
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
