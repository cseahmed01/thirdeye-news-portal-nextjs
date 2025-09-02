"use client";

import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/common/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function VideoGallery({ data }) {
  return (
    <>
      <SectionTitle title="ভিডিও গ্যালারি" bt={true} />
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
        className="w-full pb-9"
      >
        <CarouselContent className="">
          {data?.data?.map((video, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <VideoCard
                title={video.title}
                author={video.source}
                date={video.created_at}
                image={
                  video?.video_type !== "youtube" && video?.video_thumbnail
                }
                videoUrl={video.media_path}
                youtubeId={video.embedded_link}
              />
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
