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

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex-wrap">
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
<<<<<<< HEAD
        className="w-[60vw] outline"
=======
        className="w-[60vw]"
>>>>>>> cdd9360d4c6b9edf36b0f1466862060ef4cdc7e2
      >
        <CarouselContent>
          {slides.map((slide: slide) => (
            <CarouselItem
              key={slide.id}
              className={`md:basis-1/3 ${current === slide.id ? "scale-[100%]" : "scale-[60%]"} ${current === slide.id - 1 || current === slide.id + 1 || current === slide.id ? "visible" : "invisible"}`}
            >
              <Card className="bg-rsd-yellow">
                <CardContent className="flex aspect-square items-center justify-center text-5xl">
                  {slide.id}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center space-x-4 py-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-5 w-5 rounded-full ${current === index ? "bg-rsd-dark-blue" : "bg-rsd-mid-blue"}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
