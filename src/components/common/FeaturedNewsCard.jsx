import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function FeaturedNewsCard({ item }) {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted cursor-pointer group overflow-hidden select-none"
    >
      <div className="relative w-full h-full">
        <Image
          src={item.image}
          alt="Photo by Drew Beamer"
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
              {item?.heading}
              <span className="whitespace-nowrap inline-block ml-2 align-middle text-sm font-normal">
                — {item?.author}
              </span>
            </h1>
            <p className="text-sm">{item?.description}</p>
          </div>
          <p className="text-xs whitespace-nowrap">{item?.date}</p>
        </div>
      </div>
    </AspectRatio>
  );
}
