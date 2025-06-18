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
        <div className="bg-rsd-dark-blue mb-10 flex w-[60vw] flex-col items-center rounded-4xl px-5 py-15">
          <Carousel
            opts={{
              loop: false,
            }}
            className="w-[60vw]"
          >
            <CarouselContent>
              {slides.map(({ year, title, subtitle }, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="bg-rsd-dark-blue border-none shadow-none">
                    <CardContent className="font-rsd-alt flex aspect-square flex-col items-center justify-center font-bold">
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
            <CarouselPrevious className="text-rsd-light-blue absolute left-2 bg-transparent" />
            <CarouselNext className="text-rsd-light-blue absolute right-2 bg-transparent" />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default RaceResults;
