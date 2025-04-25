"use client";
import cloud from "@/public/cloud.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="bg-rsd-dark-blue flex h-screen w-screen flex-col items-center justify-center">
      <Image src={cloud} alt="cloud" className="mr-165 w-1/4" />
      <div className="text-rsd-gold mb-3 text-7xl font-semibold">404</div>
      <div className="font-rsd-alt mb-5 text-2xl text-white">
        Sorry, the page you were looking for is not found!
      </div>
      <Button
        asChild
        className="bg-rsd-mid-blue/40 flex h-1/15 w-1/7 rounded-full px-25 py-5 text-2xl shadow-xl hover:bg-gray-600"
      >
        <Link href="/">Go Back Home</Link>
      </Button>
      <Image src={cloud} alt="cloud" className="ml-165 w-1/4" />
    </div>
  );
};

export default NotFound;
