"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slides } from "@/data/ResultsInfo";
import Header from "@/components/Header";
import { motion } from "motion/react";
import Image from "next/image";
import GalleryWave from "@/public/about/galleryWave.webp";

const carouselAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const RaceResults = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header text="List of Race Results" />
      <motion.div
        variants={carouselAnimation}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5 }}
      >
        <div className="bg-rsd-dark-blue relative mb-10 flex w-[70vw] flex-col items-center rounded-4xl px-5 py-15">
          <Carousel
            opts={{
              loop: false,
            }}
            className="w-[65vw]"
          >
            <CarouselContent>
              {slides.map(({ year, title, subtitle }, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="bg-rsd-dark-blue border-none shadow-none">
                    <CardContent className="font-rsd-alt flex aspect-square flex-col items-center justify-center px-10 text-center font-bold">
                      <span className="text-rsd-yellow text-3xl">{year}</span>
                      <span className="text-lg text-white">{title}</span>
                      <span className="text-rsd-light-blue text-xs">
                        {subtitle}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-rsd-light-blue absolute left-1 z-10 bg-transparent" />
            <CarouselNext className="text-rsd-light-blue absolute right-1 z-10 bg-transparent" />
          </Carousel>
          <Image
            src={GalleryWave}
            alt="wave"
            className="absolute bottom-0 w-full rounded-b-4xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RaceResults;
