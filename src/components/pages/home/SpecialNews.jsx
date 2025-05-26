import SquareAd from "@/components/common/AdBanners/SquareAd";
import BannerNews from "@/components/common/BannerNews";
import CategoryHeader from "@/components/common/CategoryHeader";
import SpecialFeatured from "./SpecialFeatured";

export default function SpecialNews() {
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
  ];
  return (
    <>
      <CategoryHeader title={"বিশেষ"} />
      <div className="flex flex-col w-full gap-6">
        {data?.map((item, index) => (
          <BannerNews key={index} item={item} fullWidth />
        ))}
      </div>
      <SpecialFeatured />
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
        <div className="md:w-[35%]">
          <div className="">
            <div className="relative">
              <h1 className="text-xl md:text-4xl font-normal inline">
                যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে,
                কর্মকর্তারা বলেন
                <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
                  — {"এলেন জোশের প্রতিবেদন"}
                </span>
              </h1>

              <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
                {"৯ই জুন, ২০২৫"}
              </span>
            </div>
            <p className="text-md mt-4">
              গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০
              ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু
              রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে
            </p>
          </div>
          <div className=" mt-10">
            <div className="relative">
              <h1 className="text-xl md:text-4xl font-normal inline">
                যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে,
                কর্মকর্তারা বলেন
                <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
                  — {"এলেন জোশের প্রতিবেদন"}
                </span>
              </h1>

              <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
                {"৯ই জুন, ২০২৫"}
              </span>
            </div>
            <p className="text-md mt-4">
              গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০
              ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু
              রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে
            </p>
          </div>
        </div>
        <div className="md:w-[30%] flex flex-col items-center justify-center gap-4">
          <SquareAd />
          <SquareAd />
        </div>

        <div className="md:w-[35%]">
          <div className="">
            <div className="relative">
              <h1 className="text-xl md:text-4xl font-normal inline">
                যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে,
                কর্মকর্তারা বলেন
                <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
                  — {"এলেন জোশের প্রতিবেদন"}
                </span>
              </h1>

              <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
                {"৯ই জুন, ২০২৫"}
              </span>
            </div>
            <p className="text-md mt-4">
              গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০
              ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু
              রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে
            </p>
          </div>
          <div className=" mt-10">
            <div className="relative">
              <h1 className="text-xl md:text-4xl font-normal inline">
                যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে,
                কর্মকর্তারা বলেন
                <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
                  — {"এলেন জোশের প্রতিবেদন"}
                </span>
              </h1>

              <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
                {"৯ই জুন, ২০২৫"}
              </span>
            </div>
            <p className="text-md mt-4">
              গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০
              ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু
              রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
