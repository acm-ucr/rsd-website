"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slides, slide } from "@/data/GalleryImages";
import Image from "next/image";

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
    <div className="relative mt-6 flex w-full flex-wrap items-center justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
        className="flex w-[90vw]"
      >
        <CarouselContent className="relative w-[95vw]">
          {slides.map((slide: slide, index: number) => (
            <CarouselItem
              key={index}
              className={`basis-full lg:basis-1/3 ${
                current === (index - 1 + totalSlides) % totalSlides ||
                current === (index + 1) % totalSlides ||
                current === index
                  ? "visible flex justify-center"
                  : "invisible"
              } `}
            >
              <Card
                className={`w-11/12 ${current === index ? "scale-[100%]" : "scale-[75%]"}`}
              >
                <Image
                  src={slide.image}
                  alt="gallery preview"
                  className="h-full rounded-lg object-cover"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex justify-center py-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-8 w-8 rounded-full 2xl:h-12 2xl:w-12 ${current === index ? "bg-rsd-dark-blue" : "bg-rsd-mid-blue"}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
