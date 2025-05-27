"use client";
import { useCallback, useState } from "react";

import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import CategoryTitle from "@/components/common/CategoryTitle";
import Container from "@/components/common/Container";
import ReelCard from "@/components/common/ReelCard";

export default function page() {
  const [isMuted, setIsMuted] = useState(true);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const reels = [
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "YouTube Creator",
      date: "May 21, 2025",
      youtubeId: "ogfYd705cRs",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "YouTube Creator",
      date: "May 19, 2025",
      youtubeId: "aqz-KE-bpKQ",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      author: "Sample Author",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ];

  // Handle mute toggle
  const handleMuteToggle = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Handle video play - pause all other videos and set this one as playing
  const handleVideoPlay = useCallback((index) => {
    setPlayingVideoIndex(index);
  }, []);

  // Handle video pause
  const handleVideoPause = useCallback(
    (index) => {
      // Only clear the playing index if this video was the one playing
      if (playingVideoIndex === index) {
        setPlayingVideoIndex(null);
      }
    },
    [playingVideoIndex]
  );

  // Only show the first 3 reels
  const firstThreeReels = reels?.slice(0, 3);
  // next 6 reels will be shown in the carousel
  const nextSixReels = reels?.slice(3, 9);
  // rest of the reels will be shown in the carousel
  const remainingReels = reels?.slice(9);

  return (
    <Container className="">
      <CategoryTitle title="Reels" sorting={false} />
      <div className="flex items-center justify-center gap-4 mb-6">
        <RecAdBanner />
        <RecAdBanner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-6">
        {firstThreeReels?.map((item, index) => (
          <ReelCard
            key={index}
            item={item}
            index={index}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            isPlaying={playingVideoIndex === index}
            onVideoPlay={handleVideoPlay}
            onVideoPause={handleVideoPause}
            titleInside={false}
            onReelsPage
          />
        ))}
      </div>
      <LongAdBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-6">
        {nextSixReels?.map((item, index) => (
          <ReelCard
            key={index}
            item={item}
            index={index}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            isPlaying={playingVideoIndex === index}
            onVideoPlay={handleVideoPlay}
            onVideoPause={handleVideoPause}
            titleInside={false}
            onReelsPage
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 mb-6">
        <SquareAd />
        <SquareAd />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-6">
        {remainingReels?.map((item, index) => (
          <ReelCard
            key={index}
            item={item}
            index={index}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            isPlaying={playingVideoIndex === index}
            onVideoPlay={handleVideoPlay}
            onVideoPause={handleVideoPause}
            titleInside={false}
            onReelsPage
          />
        ))}
      </div>
    </Container>
  );
}
