import Image from "next/image";

export default function SquareAd() {
  return (
    <div className="w-[300px] h-[250px] bg-amber-400 mx-auto my-6">
      <Image
        src="/assets/adImages/square.png"
        alt="Square Ad Banner"
        width={300}
        height={250}
        className="object-cover w-full h-full"
      />
    </div>
  );
}