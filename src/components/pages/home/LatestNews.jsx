"use client";

import NewsCard from "@/components/common/NewsCard";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function LatestNews({ data }) {
  return (
    <>
      <SectionTitle title="সাম্প্রতিক" />
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full pb-9 relative"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/article/${item?.id}`} className="block">
                <NewsCard item={item} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-14 top-[40%] flex items-center">
          <CarouselPrevious
            className="relative h-10 w-10 cursor-pointer border rounded-full border-white text-white"
            variant="ghost"
          />
        </div>
        <div className="absolute right-14 top-[40%] flex items-center">
          <CarouselNext
            className="relative h-10 w-10 cursor-pointer border rounded-full border-white text-white"
            variant="ghost"
          />
        </div>
      </Carousel>
    </>
  );
}
