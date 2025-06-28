import { fallbackImage, getFormattedBengaliDate } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function SpecialFeatured({ data }) {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted cursor-pointer group overflow-hidden my-6"
    >
      <div className="relative w-full h-full">
        <Image
          src={
            data?.media?.media_type == "Image"
              ? data?.media?.media_url?.image?.thumbnail
              : fallbackImage
          }
          alt="Featured News Image"
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
              {data?.header}
            </h1>
            <div className="flex items-center justify-center gap-10 py-3">
              <p className="whitespace-nowrap text-md font-normal">
                — {data?.journalist_name}
              </p>
              <p className="text-xs whitespace-nowrap">
                {getFormattedBengaliDate(data?.published_date)}
              </p>
            </div>
            <p className="text-lg">{data?.short_description}</p>
          </div>
        </div>
      </div>
    </AspectRatio>
  );
}
