import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import CategoryTitle from "@/components/common/CategoryTitle";
import Container from "@/components/common/Container";
import VideoCard from "@/components/common/VideoCard";

export default function page() {
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

  // first three items for the data
  const firstThreeItems = videoData.slice(0, 3);
  // next six items for the data
  const nextSixItems = videoData.slice(3, 9);
  // rest of the items for the data
  const restItems = videoData.slice(9);

  return (
    <Container>
      <LongAdBanner />
      <CategoryTitle title="ভিডিও" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {firstThreeItems?.map((video, index) => (
          <div key={index} className="space-y-4">
            <VideoCard
              title={video.title}
              author={video.author}
              date={video.date}
              image={video.image}
              videoUrl={video.videoUrl}
              youtubeId={video.youtubeId}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-5">
        <RecAdBanner />
        <RecAdBanner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {nextSixItems?.map((video, index) => (
          <div key={index} className="space-y-4">
            <VideoCard
              title={video.title}
              author={video.author}
              date={video.date}
              image={video.image}
              videoUrl={video.videoUrl}
              youtubeId={video.youtubeId}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-5">
        <SquareAd />
        <SquareAd />
        <SquareAd />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {restItems?.map((video, index) => (
          <div key={index} className="space-y-4">
            <VideoCard
              title={video.title}
              author={video.author}
              date={video.date}
              image={video.image}
              videoUrl={video.videoUrl}
              youtubeId={video.youtubeId}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
