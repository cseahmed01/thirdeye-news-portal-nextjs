import SquareAd from "@/components/common/AdBanners/SquareAd";
import BannerNews from "@/components/common/BannerNews";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import SpecialFeatured from "./SpecialFeatured";
import SpecialNewsSmallCard from "./SpecialNewsSmallCard";

export default function SpecialNews({ data }) {
  const bannerData = data?.slice(1, 5);

  return (
    <>
      <SectionTitle title={"বিশেষ"} />
      <div className="flex flex-col w-full gap-6">
        {bannerData?.map((item, index) => (
          <Link href={`/article/${item.id}`} key={index} className="w-full">
            <BannerNews key={index} item={item} fullWidth />
          </Link>
        ))}
      </div>
      <SpecialFeatured data={data?.[0]} />
      {data?.length > 5 && (
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
          <div className="md:w-[35%] flex flex-col gap-10">
            {data?.slice(5, 7).map((item, index) => (
              <Link href={`/article/${item.id}`} key={index} className="w-full">
                <SpecialNewsSmallCard item={item} />
              </Link>
            ))}
          </div>
          <div className="md:w-[30%] flex flex-col items-center justify-center gap-4">
            <SquareAd />
            <SquareAd />
          </div>
          <div className="md:w-[35%] flex flex-col gap-10">
            {data?.slice(7, 9).map((item, index) => (
              <Link href={`/article/${item.id}`} key={index} className="w-full">
                <SpecialNewsSmallCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
