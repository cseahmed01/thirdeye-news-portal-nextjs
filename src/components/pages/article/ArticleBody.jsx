import { getFormattedBengaliDate } from "@/lib/utils";

export default function ArticleBody({ article }) {
  return (
    <div className="">
      <h1 className="text-[55px] font-bold md:leading-[56px] inline">
        {article?.data?.title}
        <span className="inline-block ml-2 align-middle text-md font-normal whitespace-nowrap">
          — {article?.data?.author}
        </span>
      </h1>
      <p className="text-2xl my-7">
        {getFormattedBengaliDate(article.data.published_date)}
      </p>
      <div className="flex items-center gap-7 mb-10">
        <button className="cursor-pointer">
          <img src="/assets/icons/bookmark.svg" alt="" className="w-9 h-9" />
        </button>
        <button className="cursor-pointer">
          <img src="/assets/icons/share.svg" alt="" className="w-9 h-9" />
        </button>
        <button className="cursor-pointer">
          <img src="/assets/icons/facebook.svg" alt="" className="w-9 h-9" />
        </button>
        <button className="cursor-pointer">
          <img src="/assets/icons/whatsapp.png" alt="" className="w-9 h-9" />
        </button>
        <button className="cursor-pointer">
          <img src="/assets/icons/twitter.svg" alt="" className="!w-9 h-9" />
        </button>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: article?.data?.content || "<p>No content available</p>",
        }}
      />
    </div>
  );
}
