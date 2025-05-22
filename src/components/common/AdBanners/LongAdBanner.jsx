import Image from "next/image";

function LongAdBanner() {
  return (
    <div className="hidden lg:block w-[980px] h-[90px] mx-auto my-6">
      <Image
        src="/assets/adImages/longbanner.png"
        alt="Long Ad Banner"
        width={980}
        height={90}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export { LongAdBanner as default };
