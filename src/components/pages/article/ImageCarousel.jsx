"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ImageCarousel({ items, className }) {
  // const data = [
  //   {
  //     image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1749920937484-a61e6a9566a9?q=80",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1749920937484-a61e6a9566a9?q=80",
  //   },
  //   {
  //     image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
  //   },
  // ];
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
          {items?.map((item, index) => (
            <CarouselItem key={index} className="cursor-grab">
              <Image
                src={item}
                alt={`Carousel item ${index + 1}`}
                className="h-full w-full object-cover"
                width={788}
                height={450}
              />
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
