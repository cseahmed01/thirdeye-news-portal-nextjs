import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import Container from "../common/Container";

export default function TopAppBar() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-3 border-b-[0.5px] border-white">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Link href="/" className="">
            <p className="text-[40px] font-bold">পত্রিকার নাম</p>
          </Link>
          {/* <Select defaultValue="bangla">
            <SelectTrigger className="w-[100x] bg-transparent px-4 py-2 text-xs shadow-none border-none ring-0 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangla">বাংলা</SelectItem>
              <SelectItem value="hindi">हिन्दी</SelectItem>
              <SelectItem value="arabic">العربية</SelectItem>
            </SelectContent>
          </Select> */}

          {/* <p className="text-xs">বুধবার, ২৬ ফেব্রুয়ারি ২০২৫</p> */}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center border border-white gap-2 px-2 py-2.5">
            <Search size="16" />
            <input
              type="text"
              name=""
              id=""
              className="w-[145px] outline-0 text-xs placeholder:text-white/80 bg-transparent"
              placeholder="অনুসন্ধান..."
            />
          </div>

          <Link
            href="/auth/signin"
            className="flex items-center gap-1.5 p-1 cursor-pointer"
          >
            <p className="text-[16px]">অ্যাকাউন্ট</p>
            <UserRound size={26} />
          </Link>
        </div>
      </div>
    </Container>
  );
}
