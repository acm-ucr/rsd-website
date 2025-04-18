"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slides, slide } from "@/data/ResultsInfo";

const RaceResults = () => {

  return (
    <div className="flex flex-col items-center bg-rsd-dark-blue py-15 px-5 rounded-4xl">
      <Carousel
        opts={{
          loop: false,
        }}
        className="w-[60vw]"
      >
        <CarouselContent>
          {slides.map((slide: slide) => (
            <CarouselItem
              key={slide.id}
              className= "md:basis-1/3"
            >
              <Card className="bg-rsd-dark-blue border-none shadow-none">
                <CardContent className="flex aspect-square items-center justify-center flex-col font-rsd-alt font-bold">
                <span className="text-rsd-yellow text-3xl">{slide.year}</span>
                <span className="text-white text-lg">{slide.title}</span>
                <span className="text-rsd-light-blue text-xs">{slide.subtitle}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 bg-transparent text-rsd-light-blue" />
        <CarouselNext className="absolute right-2 bg-transparent text-rsd-light-blue" />
      </Carousel>
    </div>
  );
};

export default RaceResults;
