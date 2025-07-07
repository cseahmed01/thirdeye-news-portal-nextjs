import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/common/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchData } from "@/lib/fetchData";

export default async function VideoGallery() {
  const videoGallery = await fetchData(`videos/list?page=1`, {
    revalidate: 10,
  });

  return (
    <>
      <SectionTitle title="ভিডিও গ্যালারি" bt={true} />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full pb-9"
      >
        <CarouselContent className="">
          {videoGallery?.data?.map((video, index) => (
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
        <div className="absolute left-[48%] inset-y-0 flex items-center">
          <CarouselPrevious className="relative left-0 translate-x-0 h-6 w-6 cursor-pointer" />
        </div>
        <div className="absolute right-[48%]  inset-y-0 flex items-center">
          <CarouselNext className="relative right-0 translate-x-0 h-6 w-6 cursor-pointer" />
        </div>
      </Carousel>
    </>
  );
}
