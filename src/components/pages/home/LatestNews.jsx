import NewsCard from "@/components/common/NewsCard";
import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LatestNews() {
  const data = [
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
  ];
  return (
    <>
      <SectionTitle title="সাম্প্রতিক" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full pb-9 relative"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <NewsCard item={item} />
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
