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
  const leadNews = await fetchData(`articles/single-lead-news`, {
    revalidate: 10, // Revalidate every 10 seconds (ISR)
  });

  const latestNews = await fetchData(`articles/latest?page=1`, {
    revalidate: 10,
  });

  const breakingNews = await fetchData(`articles/breaking-news?page=1`, {
    revalidate: 10,
  });

  const specialNews = await fetchData(`articles/exclusive?page=1`, {
    revalidate: 10,
  });

  const reels = await fetchData(`reels/list?page=1`, {
    revalidate: 10,
  });

  return (
    <Container>
      <LongAdBanner />
      <div className="grid grid-cols-12 gap-5 min-h-[430px] items-center">
        <div className="col-span-12 md:col-span-12 lg:col-span-7">
          <FeaturedNewsCard item={leadNews?.data} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <ReelsContainer items={reels?.data} />
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
      <VideoGallery />
      <LongAdBanner />
      <SpecialNews data={specialNews?.data} />
    </Container>
  );
}
