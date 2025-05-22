import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function SpecialFeatured() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted cursor-pointer group overflow-hidden my-6"
    >
      <div className="relative w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1550533105-d412cbf5bfcc?q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full object-cover group-hover:scale-101 transition-transform duration-300"
          priority
        />
        <div
          className="absolute inset-0 flex justify-center items-start gap-5 pt-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #292D32 100%)",
          }}
        >
          <div className="text-white text-center w-full max-w-[785px]">
            <h1 className="text-5xl font-normal leading-[56px]">
              {
                "যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা বলেন"
              }
            </h1>
            <div className="flex items-center justify-center gap-10 py-3">
              <p className="whitespace-nowrap text-md font-normal">
                — {"এলেন জোশের প্রতিবেদন"}
              </p>
              <p className="text-xs whitespace-nowrap">{"৯ই জুন, ২০২৫"}</p>
            </div>
            <p className="text-lg">
              {
                "গাজার ওপর ব্যাপক বিমান হামলা চালিয়েছে ইসরায়েল। হামলায় অন্তত ২২০ ফিলিস্তিনির মৃত্যুর খবর পাওয়া গেছে। মৃতের মধ্যে অনেক নারী ও শিশু রয়েছে। ইসরায়েল ডিফেন্স ফোর্স (আইডিএফ) জানিয়েছে"
              }
            </p>
          </div>
        </div>
      </div>
    </AspectRatio>
  );
}
