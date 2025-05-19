"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slides, slide } from "@/data/GalleryImages";

const GalleryPreview = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    if (!api) {
      console.log("Initialize API");
      return;
    }
    api.on("select", () => {
      console.log("API initialized");
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative flex-wrap">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
        className="left-4 flex w-[90vw] lg:left-0"
      >
        <CarouselContent className="relative w-[95vw]">
          {slides.map((slide: slide, index: number) => (
            <CarouselItem
              key={slide.id}
              className={`lg:basis-1/3 ${
                current === (index - 1 + totalSlides) % totalSlides ||
                current === (index + 1) % totalSlides ||
                current === index
                  ? "visible flex justify-center"
                  : "invisible"
              } `}
            >
              <Card
                className={`bg-rsd-yellow w-11/12 ${current === index ? "scale-[100%]" : "scale-[75%]"}`}
              >
                <CardContent className="flex aspect-square items-center justify-center text-6xl">
                  {slide.id}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex justify-center space-x-4 py-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-10 w-10 rounded-full lg:h-5 lg:w-5 ${current === index ? "bg-rsd-dark-blue" : "bg-rsd-mid-blue"}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
