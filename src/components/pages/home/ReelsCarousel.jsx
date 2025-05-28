"use client";

import ReelCard from "@/components/common/ReelCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export default function ReelsCarousel({
  items,
  className,
  titleInside = false,
}) {
  const [api, setApi] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Initial position
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Handle manual navigation
  const handleSlideChange = useCallback(
    (index) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  // Handle mute toggle
  const handleMuteToggle = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <div className={cn("w-full select-none", className)}>
      <Carousel
        setApi={setApi}
        className="w-full relative"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-full md:basis-full lg:basis-full"
            >
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-80 scale-95"
                )}
              >
                <ReelCard
                  item={item}
                  isActive={index === activeIndex}
                  index={index}
                  isMuted={isMuted}
                  onMuteToggle={handleMuteToggle}
                  titleInside={titleInside}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <div className="absolute top-[48%] md:top-[45%] left-2 flex items-center">
          <CarouselPrevious
            className="relative left-0 translate-x-0 text-white cursor-pointer"
            variant="ghost"
          />
        </div>
        <div className="absolute top-[48%] md:top-[45%] right-2 flex items-center">
          <CarouselNext
            className="relative right-0 translate-x-0 text-white cursor-pointer"
            variant="ghost"
          />
        </div>
      </Carousel>
    </div>
  );
}
