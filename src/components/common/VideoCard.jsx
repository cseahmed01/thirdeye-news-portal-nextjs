import Image from "next/image";

export default function VideoCard() {
  return (
    <div className="h-[245px] relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80"
        alt="Video Thumbnail"
        width={400}
        height={245}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className="absolute bottom-0 bg-[linear-gradient(180deg,rgba(217,217,217,0)_0%,rgba(41,45,50,0.7)_100%)]"
      >
        <div className="relative text-white p-2.5">
          <h1 className="text-md font-normal leading-snug inline">
            যুক্তরাষ্ট্র ও ইউক্রেন খনিজ সম্পদ চুক্তিতে সম্মত হয়েছে, কর্মকর্তারা
            বলেন
            <span className="inline-block ml-2 align-middle text-xsm font-normal whitespace-nowrap">
              — {"এলেন জোশের প্রতিবেদন"}
            </span>
          </h1>

          <span className="absolute right-2.5 bottom-2.5 text-xsm whitespace-nowrap">
            {"৯ই জুন, ২০২৫"}
          </span>
        </div>
      </div>
    </div>
  );
}
