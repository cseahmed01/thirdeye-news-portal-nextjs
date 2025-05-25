import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import SmallRecAdBanner from "@/components/common/AdBanners/SmallRecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import CategoryHeader from "@/components/common/CategoryHeader";
import Container from "@/components/common/Container";
import FeaturedNewsCard from "@/components/common/FeaturedNewsCard";
import BreakingNews from "@/components/pages/home/BreakingNews";
import LatestNews from "@/components/pages/home/LatestNews";
import LocalNewsFilter from "@/components/pages/home/LocalNewsFilter";
import ReelsContainer from "@/components/pages/home/ReelsContainer";
import SpecialNews from "@/components/pages/home/SpecialNews";
import VideoGallery from "@/components/pages/home/VideoGallery";

export default function Home() {
  const featuredItems = {
    news: {
      heading:
        "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
      description:
        "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
      author: "এলেন জোশের প্রতিবেদন",
      image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
      date: "৯ই জুন, ২০২৫",
    },
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

  return (
    <Container>
      <LongAdBanner />
      <div className="grid grid-cols-12 gap-5 min-h-[430px]">
        <div className="col-span-12 md:col-span-12 lg:col-span-7">
          <FeaturedNewsCard item={featuredItems?.news} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2">
          <ReelsContainer items={featuredItems?.reels} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-3 items-center justify-center">
          <SmallRecAdBanner />
          <SquareAd />
        </div>
      </div>
      <LatestNews />
      <CategoryHeader title="ব্রেকিং" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-9">
          <BreakingNews />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-6 items-center justify-center">
          <LocalNewsFilter />
          <SquareAd />
          <SquareAd />
        </div>
      </div>
      <VideoGallery />
      <LongAdBanner />
      <SpecialNews />
    </Container>
  );
}
