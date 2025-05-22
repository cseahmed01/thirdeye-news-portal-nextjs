import Image from "next/image";

export default function BannerNews({ item, fullWidth = false }) {
  return (
    <div className="grid grid-cols-12 gap-3.5 justify-between group cursor-pointer">
      <div className="col-span-12 md:col-span-8 order-2 md:order-1">
        <div className="relative">
          <h1 className="text-xl md:text-4xl font-normal md:leading-[56px] inline">
            {item?.heading}
            <span className="inline-block ml-2 align-middle text-xs font-normal whitespace-nowrap">
              — {item?.author}
            </span>
          </h1>

          <span className="absolute right-0 bottom-0 text-xs whitespace-nowrap">
            {item?.date}
          </span>
        </div>
        <p className="text-md mt-4 md:leading-[28px]">{item?.description}</p>
      </div>
      <div
        className={`${
          fullWidth ? "w-[425px] h-[240px]" : "w-[322px] h-[188px]"
        } col-span-4 order-1 md:order-2 relative overflow-hidden `}
      >
        <Image
          src={item?.image}
          alt="Breaking News"
          width={fullWidth ? 425 : 322}
          height={fullWidth ? 240 : 188}
          className="object-cover group-hover:scale-103 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
