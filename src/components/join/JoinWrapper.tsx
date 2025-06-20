"use client";
import { motion } from "motion/react";
import Image from "next/image";
import JoinDragon from "@/public/join/joinDragon.webp";
import Cloud from "@/public/cloud.webp";
import InfoBox from "@/components/InfoBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Registration from "@/components/join/Registration";
import Header from "@/components/Header";
const JoinWrapper = () => {
  return (
    <div className="bg-rsd-light-blue flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Header text="Registration" />

      <div className="relative flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=":sm:-top-[12vh] invisible absolute -top-[10vh] -left-[16vw] sm:visible sm:-left-[35vw] sm:scale-70 md:-top-[10vh] md:scale-80 lg:-top-[12vh] lg:-left-[25vw] xl:-left-[16vw] xl:scale-90 2xl:-top-[10vh] 2xl:scale-100"
        >
          <Image src={Cloud} alt="Cloud" />
        </motion.div>

        <InfoBox
          text={
            <div className="flex flex-col items-center justify-center text-center">
              Join RSD as we take on the waves! Membership fees are $60 per
              quarter and a discounted $150 for a yearly membership. Join our
              discord for more information about how to register for membership!
              <Button className="bg-rsd-mid-blue hover:bg-rsd-title-blue mt-5 rounded-4xl p-7 text-lg sm:text-xl xl:p-8 xl:text-3xl">
                <Link href="/">Join Our Discord!</Link>
              </Button>
            </div>
          }
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="invisible absolute -right-[10vw] -bottom-6 sm:visible sm:-right-[35vw] sm:scale-70 md:-right-[30vw] md:scale-80 lg:-right-[10vw] xl:scale-90 2xl:-right-[5vw]"
        >
          <Image src={Cloud} alt="Cloud" />
        </motion.div>
      </div>

      <Registration />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="-mt-15 hidden w-full overflow-hidden sm:block"
      >
        <Image
          src={JoinDragon}
          alt="Dragon Riding a Wave"
          className="h-auto w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default JoinWrapper;
