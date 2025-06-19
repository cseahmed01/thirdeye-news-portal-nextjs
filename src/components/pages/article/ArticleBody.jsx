import LongAdBanner from "@/components/common/AdBanners/LongAdBanner";
import SquareAd from "@/components/common/AdBanners/SquareAd";
import { getFormattedBengaliDate } from "@/lib/utils";
import ImageCarousel from "./ImageCarousel";
import RelatedNews from "./RelatedNews";
import ShareOptions from "./ShareOptions";
import VideoCarousel from "./VideoCarousel";

export default function ArticleBody({ article }) {
  console.log("🚀 ~ ArticleBody ~ article:", article);

  const extractImageUrls =
    article?.data?.externalmedia?.image?.map((media) => media?.original) || [];

  const mainImage = article?.data?.media?.media_url?.original;

  const mergedImageUrls = [
    ...(mainImage ? [mainImage] : []),
    ...(extractImageUrls.length > 0 ? extractImageUrls : []),
  ];

  return (
    <div className="">
      <h1 className="text-[55px] font-bold md:leading-[56px] inline">
        {article?.data?.title}
        <span className="inline-block ml-2 align-middle text-md font-normal whitespace-nowrap">
          — {article?.data?.journalistname?.name}
        </span>
      </h1>
      <p className="text-2xl my-7">
        {getFormattedBengaliDate(article.data.published_date)}
      </p>
      <ShareOptions />
      <div className="grid grid-cols-12 gap-6 mb-[30px]">
        <div className="lg:col-start-2 col-span-7">
          <ImageCarousel items={mergedImageUrls} />
        </div>
        <div className="col-span-3 flex flex-col  items-center justify-between">
          <VideoCarousel items={article?.data?.externalmedia?.video} />
          <SquareAd />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-9 mb-8">
        <div
          className="col-span-12 lg:col-span-9 text-lg"
          dangerouslySetInnerHTML={{
            __html: article?.data?.content || "<p>No content available</p>",
          }}
        />
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 items-center justify-center">
          <SquareAd />
          <SquareAd />
          <SquareAd />
        </div>
      </div>
      <LongAdBanner />
      <RelatedNews />
    </div>
  );
}
