import Image from "next/image";

export default function RecAdBanner() {
  return (
    <div className="w-[600px] h-[160px]">
      <Image
        src="/assets/adImages/smallRectangle.png"
        alt="Long Ad Banner"
        width={600}
        height={160}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
