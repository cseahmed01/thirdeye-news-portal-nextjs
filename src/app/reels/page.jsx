"use client";
import { useState } from "react";

import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import Container from "@/components/common/Container";
import ReelCard from "@/components/common/ReelCard";
import CategoryTitle from "@/components/pages/category/CategoryTitle";
import { useCallback } from "react";

export default function page() {
    
  const [isMuted, setIsMuted] = useState(true);
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
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ];

    // Handle mute toggle
    const handleMuteToggle = useCallback(() => {
      setIsMuted(!isMuted);
    }, [isMuted]);

  return (
    <Container className="">
      <CategoryTitle title="Reels" sorting={false} />
      <div className="flex items-center justify-center gap-4 mb-6">
        <RecAdBanner />
        <RecAdBanner />
      </div>
      <div className="grid grid-cols-3 gap-9">
        {reels.map((item, index) => (
          <ReelCard
            item={item}
            // isActive={index === activeIndex}
            index={index}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}
