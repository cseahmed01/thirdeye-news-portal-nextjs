import Image from "next/image";

export default function RecAdBanner() {
  return (
    <div className="overflow-hidden relative">
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
