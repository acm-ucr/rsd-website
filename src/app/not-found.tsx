"use client";
import cloud from "@/public/cloud.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="bg-rsd-dark-blue overflow-x-hidden">
      <div className="bg-rsd-dark-blue relative flex h-screen w-full flex-col items-center justify-center">
        <Image
          src={cloud}
          alt="cloud"
          className="invisible absolute top-[30vh] left-[12vw] w-1/3 sm:visible md:top-[27vh] md:left-[13vw] lg:top-[28vh] xl:top-[23vh] xl:left-[13vw] 2xl:top-[28vh]"
        />
        <div className="text-rsd-gold mb-1 text-4xl font-semibold sm:text-5xl lg:mb-2 lg:text-6xl xl:mb-3 xl:text-7xl 2xl:mb-4 2xl:text-8xl">
          404
        </div>
        <div className="font-rsd-alt mb-3 text-center text-sm text-white sm:text-base md:text-lg lg:mb-5 lg:text-2xl xl:mb-6 xl:text-3xl 2xl:mb-8 2xl:text-4xl">
          Sorry, the page you were looking for is not found!
        </div>
        <Button
          asChild
          className="bg-rsd-button-blue flex h-1/16 w-1/7 rounded-full px-14 text-sm shadow-xl hover:bg-blue-900 sm:px-16 sm:text-base md:px-18 md:text-lg lg:px-25 lg:py-8 lg:text-2xl xl:px-30 xl:text-3xl 2xl:px-35 2xl:text-4xl"
        >
          <Link href="/">Go Back Home</Link>
        </Button>

        <Image
          src={cloud}
          alt="cloud"
          className="invisible absolute right-[14vw] bottom-[28vh] w-1/3 sm:visible md:right-[15vw] md:bottom-[26vh] lg:right-[14vw] xl:right-[14vw] xl:bottom-[21vh] 2xl:bottom-[27vh]"
        />
      </div>
    </div>
  );
};

export default NotFound;
