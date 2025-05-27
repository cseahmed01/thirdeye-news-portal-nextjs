import SectionTitle from "@/components/common/SectionTitle";
import VideoCard from "@/components/common/VideoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VideoGallery() {
  const videoData = [
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1622864352372-a68fa7dac64e?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "আল-জাজিরা নিউজ",
      date: "May 21, 2025",
      youtubeId: "AsrDK5VCHOw",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1622864352372-a68fa7dac64e?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "আল-জাজিরা নিউজ",
      date: "May 21, 2025",
      youtubeId: "AsrDK5VCHOw",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1622864352372-a68fa7dac64e?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "আল-জাজিরা নিউজ",
      date: "May 21, 2025",
      youtubeId: "AsrDK5VCHOw",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1622864352372-a68fa7dac64e?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "আল-জাজিরা নিউজ",
      date: "May 21, 2025",
      youtubeId: "AsrDK5VCHOw",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1622864352372-a68fa7dac64e?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "আল-জাজিরা নিউজ",
      date: "May 21, 2025",
      youtubeId: "AsrDK5VCHOw",
    },
    {
      title:
        "ইসরাইলের বিরুদ্ধে কঠোর নিষেধাজ্ঞার হুঁশিয়ারী, একাট্টা ইউরোপ-আরব জোট!",
      author: "এলেন জোশের",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ];

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
          {videoData?.map((video, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <VideoCard
                title={video.title}
                author={video.author}
                date={video.date}
                image={video.image}
                videoUrl={video.videoUrl}
                youtubeId={video.youtubeId}
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
