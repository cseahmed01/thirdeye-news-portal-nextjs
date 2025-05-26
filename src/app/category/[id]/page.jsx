import RecAdBanner from "@/components/common/AdBanners/RecAdBanner";
import SmallRecAdBanner from "@/components/common/AdBanners/SmallRecAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import BannerNews from "@/components/common/BannerNews";
import Container from "@/components/common/Container";
import FeaturedNewsCard from "@/components/common/FeaturedNewsCard";
import VideoGallery from "@/components/common/VideoGallery";
import CategoryTitle from "@/components/pages/category/CategoryTitle";
import ReelsCarousel from "@/components/pages/home/ReelsCarousel";

export default async function page({ params }) {
  const { id } = await params;
  console.log("🚀 ~ page ~ id:", id);

  const data = {
    news: [
      {
        heading:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        description:
          "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
        author: "এলেন জোশের প্রতিবেদন",
        image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
        date: "৯ই জুন, ২০২৫",
      },
      {
        heading:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        description:
          "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
        author: "এলেন জোশের প্রতিবেদন",
        image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
        date: "৯ই জুন, ২০২৫",
      },
      {
        heading:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        description:
          "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
        author: "এলেন জোশের প্রতিবেদন",
        image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
        date: "৯ই জুন, ২০২৫",
      },
      {
        heading:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        description:
          "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
        author: "এলেন জোশের প্রতিবেদন",
        image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
        date: "৯ই জুন, ২০২৫",
      },
      {
        heading:
          "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন",
        description:
          "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে",
        author: "এলেন জোশের প্রতিবেদন",
        image: "https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80",
        date: "৯ই জুন, ২০২৫",
      },
    ],
    reels: [
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
      <CategoryTitle title={"সর্বশেষ"} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4.5 mb-6 items-center">
        <div className="md:col-span-7">
          <FeaturedNewsCard item={data?.news[0]} />
        </div>
        <div className="md:col-span-3 flex flex-col gap-3 items-center justify-center">
          <SquareAd />
          <SmallRecAdBanner />
        </div>
        <div className="md:col-span-2">
          <ReelsCarousel items={data?.reels} titleInside={true} />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4 mb-6">
        <RecAdBanner />
        <RecAdBanner />
      </div>
      <VideoGallery />
      <div className="flex flex-col w-full gap-6 my-6">
        {data?.news?.slice(1).map((item, index) => (
          <BannerNews key={index + 1} item={item} fullWidth />
        ))}
      </div>
    </Container>
  );
}
