import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import SmallRecAdBanner from "@/components/common/AdBanners/SmallRecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import Container from "@/components/common/Container";
import FeaturedNewsCard from "@/components/common/FeaturedNewsCard";
import SectionTitle from "@/components/common/SectionTitle";
import VideoGallery from "@/components/common/VideoGallery";
import BreakingNews from "@/components/pages/home/BreakingNews";
import LatestNews from "@/components/pages/home/LatestNews";
import LocalNewsFilter from "@/components/pages/home/LocalNewsFilter";
import ReelsContainer from "@/components/pages/home/ReelsCarousel";
import SpecialNews from "@/components/pages/home/SpecialNews";
import { fetchData } from "@/lib/fetchData";

export default async function Home() {
  const featuredItems = {
    reels: [
      {
        title: "Direct Video Example",
        author: "Sample Author",
        date: "May 22, 2025",
        image:
          "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        title: "YouTube Video Example",
        author: "YouTube Creator",
        date: "May 21, 2025",
        youtubeId: "ogfYd705cRs",
      },
      {
        title: "Another Direct Video",
        author: "Video Creator",
        date: "May 20, 2025",
        image:
          "https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      {
        title: "Another YouTube Video",
        author: "Content Creator",
        date: "May 19, 2025",
        youtubeId: "aqz-KE-bpKQ",
      },
    ],
  };

  const leadNews = await fetchData(`articles/lead-news/1`, {
    revalidate: 10, // Revalidate every 10 seconds (ISR)
  });

  const latestNews = await fetchData(`articles/latest?page=1`, {
    revalidate: 10,
  });

  const breakingNews = await fetchData(`articles/breaking-news/4`, {
    revalidate: 10,
  });

  const videoGallery = await fetchData(`videos/list?page=1`, {
    revalidate: 10,
  });
  console.log("🚀 ~ Home ~ videoGallery:", videoGallery);

  const specialNews = await fetchData(`articles/exclusive/9`, {
    revalidate: 10,
  });

  return (
    <Container>
      <LongAdBanner />
      <div className="grid grid-cols-12 gap-5 min-h-[430px] items-center">
        <div className="col-span-12 md:col-span-12 lg:col-span-7">
          <FeaturedNewsCard item={leadNews?.data?.[0]} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <ReelsContainer items={featuredItems?.reels} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3 items-center justify-center">
          <SmallRecAdBanner />
          <SquareAd />
        </div>
      </div>
      <LatestNews data={latestNews?.data} />
      <SectionTitle title="ব্রেকিং" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-9">
          <BreakingNews data={breakingNews?.data} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6 items-center justify-center">
          <LocalNewsFilter />
          <SquareAd />
          <SquareAd />
        </div>
      </div>
      <VideoGallery data={videoGallery?.data} />
      <LongAdBanner />
      <SpecialNews data={specialNews?.data} />
    </Container>
  );
}
