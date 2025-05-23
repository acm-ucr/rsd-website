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
          className="invisible absolute top-[28vh] left-[11vw] w-3/10 sm:visible md:top-[25vh] md:left-[12vw] lg:top-[20vh] lg:left-[10vw] xl:top-[20vh] xl:left-[12vw] 2xl:top-[22vh] 2xl:left-[10vw]"
        />
        <div className="text-rsd-gold mb-1 text-5xl font-semibold sm:text-6xl lg:mb-2 lg:text-7xl xl:mb-3 xl:text-8xl 2xl:mb-4 2xl:text-9xl">
          404
        </div>
        <div className="font-rsd-alt mb-3 text-center text-base text-white sm:text-lg md:text-xl lg:mb-5 lg:text-3xl xl:mb-6 xl:text-4xl 2xl:mb-8 2xl:text-5xl">
          Sorry, the page you were looking for is not found!
        </div>
        <Button
          asChild
          className="bg-rsd-button-blue flex h-1/16 w-1/7 rounded-full px-15 text-base shadow-xl hover:bg-blue-900 sm:px-18 sm:text-lg md:px-20 md:text-xl lg:px-30 lg:py-10 lg:text-3xl xl:px-35 xl:text-4xl 2xl:w-1/4 2xl:px-45 2xl:py-12 2xl:text-5xl"
        >
          <Link href="/">Go Back Home</Link>
        </Button>

        <Image
          src={cloud}
          alt="cloud"
          className="invisible absolute right-[13vw] bottom-[28vh] w-3/10 sm:visible md:right-[14vw] md:bottom-[25vh] lg:right-[10vw] lg:bottom-[20vh] xl:right-[13vw] xl:bottom-[20vh] 2xl:right-[10vw] 2xl:bottom-[20vh]"
        />
      </div>
    </div>
  );
};

export default NotFound;
