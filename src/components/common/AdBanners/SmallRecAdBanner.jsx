import Image from "next/image";

export default function SmallRecAdBanner() {
  return (
    <div className="w-[320px] h-[100px] bg-amber-400">
      <Image
        src="/assets/adImages/smallRectangle.png"
        alt="Long Ad Banner"
        width={320}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
