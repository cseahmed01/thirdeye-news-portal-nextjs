"use client";

import { fallbackImage, getFormattedBengaliDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";

export default function FeaturedNewsCard({ item }) {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted cursor-pointer group overflow-hidden select-none"
    >
      <Link href={`/article/${item?.id}`}>
        <div className="relative w-full h-full">
          <Image
            src={item?.media?.media_url?.image?.original || fallbackImage}
            alt="Featured News Image"
            fill
            className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-300"
            priority
          />
          <div
            className="absolute inset-0 flex items-end justify-end gap-5 p-4 text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #292D32 100%)",
            }}
          >
            <div>
              <h1 className="text-xl md:text-3xl font-extrabold leading-snug inline">
                {item?.title}
                <span className="whitespace-nowrap inline-block ml-2 align-middle text-sm font-normal">
                  — {item?.journalist_name}
                </span>
              </h1>
              <p className="text-sm">{item?.short_description}</p>
            </div>
            <p className="text-xs whitespace-nowrap">
              {getFormattedBengaliDate(item?.published_date)}
            </p>
          </div>
        </div>
      </Link>
    </AspectRatio>
  );
}
