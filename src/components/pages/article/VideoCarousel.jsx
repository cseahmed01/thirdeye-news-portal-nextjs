"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function VideoCarousel({ items, className }) {
  return (
    <div className={cn("w-full select-none", className)}>
      <Carousel
        className="w-full relative"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="aspect-video">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-full md:basis-full lg:basis-full"
            >
              <video src={item?.url} controls></video>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <div className="absolute top-[50%] md:top-[50%] left-2 flex items-center">
          <CarouselPrevious
            className="relative left-0 translate-x-0 text-white cursor-pointer"
            variant="ghost"
          />
        </div>
        <div className="absolute top-[50%] md:top-[50%] right-2 flex items-center">
          <CarouselNext
            className="relative right-0 translate-x-0 text-white cursor-pointer"
            variant="ghost"
          />
        </div>
      </Carousel>
    </div>
  );
}
