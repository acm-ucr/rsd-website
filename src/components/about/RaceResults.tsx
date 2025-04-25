<<<<<<< HEAD
const RaceResults = () => {
  return <div>RaceResults</div>;
=======
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
    <div className="bg-rsd-dark-blue flex flex-col items-center rounded-4xl px-5 py-15">
      <Carousel
        opts={{
          loop: false,
        }}
        className="w-[60vw]"
      >
        <CarouselContent>
          {slides.map((slide: slide) => (
            <CarouselItem key={slide.id} className="md:basis-1/3">
              <Card className="bg-rsd-dark-blue border-none shadow-none">
                <CardContent className="font-rsd-alt flex aspect-square flex-col items-center justify-center font-bold">
                  <span className="text-rsd-yellow text-3xl">{slide.year}</span>
                  <span className="text-lg text-white">{slide.title}</span>
                  <span className="text-rsd-light-blue text-xs">
                    {slide.subtitle}
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
  );
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
};

export default RaceResults;
