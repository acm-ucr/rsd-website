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
          className="absolute top-[28vh] left-[11vw] hidden w-3/10 sm:block md:top-[20vh] md:left-[10vw]"
        />
        <div className="text-rsd-gold mb-1 text-5xl font-semibold md:text-7xl">
          404
        </div>
        <div className="font-rsd-alt mb-3 text-center text-xl text-white md:text-2xl">
          Sorry, the page you were looking for is not found!
        </div>
        <Button
          asChild
          className="bg-rsd-button-blue flex h-1/16 w-1/7 rounded-full px-15 text-base shadow-xl hover:bg-blue-900 md:px-20 md:text-xl"
        >
          <Link href="/">Go Back Home</Link>
        </Button>

        <Image
          src={cloud}
          alt="cloud"
          className="absolute right-[13vw] bottom-[28vh] hidden w-3/10 sm:block md:right-[10vw] md:bottom-[20vh]"
        />
      </div>
    </div>
  );
};

export default NotFound;
