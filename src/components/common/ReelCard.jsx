import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function ReelCard({ item }) {
  return (
    <div className="">
      <AspectRatio ratio={9 / 16} className="">
        <Image
          src="https://images.unsplash.com/photo-1697911339694-c46ce894fe3f?q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col gap-1 justify-between pt-1">
        <h1 className="text-[10px] font-bold leading-snug inline ">
          {item?.title}
          <span className="inline-block ml-2 align-middle text-xxs font-normal">
            — {item?.author}
          </span>
        </h1>
        <div className="mt0.5 flex items-center justify-between w-full">
          <button className="text-xxs cursor-pointer hover:underline">
            আরও দেখুন
          </button>
          <p className="text-xxs whitespace-nowrap">{item?.date}</p>
        </div>
      </div>
    </div>
  );
}
