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
import Link from "next/link";

export default function RelatedNews({ data }) {
  return (
    <>
      <SectionTitle title="সংক্রান্ত সংবাদ" bt notAll />
      {data && data.length > 3 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full pb-9 relative"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Link href={`/article/${item.id}`} className="block">
                  <NewsCard item={item} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-[40%] lg:left-[48%] inset-y-0 flex items-center">
            <CarouselPrevious className="relative left-0 translate-x-0 h-6 w-6 cursor-pointer" />
          </div>
          <div className="absolute right-[40%] lg:right-[48%]  inset-y-0 flex items-center">
            <CarouselNext className="relative right-0 translate-x-0 h-6 w-6 cursor-pointer" />
          </div>
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <Link href={`/article/${item.id}`} key={index} className="block">
              <NewsCard item={item} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
