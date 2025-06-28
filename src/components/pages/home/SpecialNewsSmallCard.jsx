import { getFormattedBengaliDate } from "@/lib/utils";

export default function SpecialNewsSmallCard({ item }) {
  return (
    <div className="">
      <div className="relative">
        <h1 className="text-xl md:text-4xl font-normal inline">
          {item?.header}
          <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
            — {item?.journalist_name}
          </span>
        </h1>

        <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
          {getFormattedBengaliDate(item?.published_date)}
        </span>
      </div>
      <p className="text-md mt-4">
        {item?.short_description}
      </p>
    </div>
  );
}
