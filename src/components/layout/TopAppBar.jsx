import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, UserRound } from "lucide-react";
import Container from "../common/Container";

export default function TopAppBar() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-3 border-b">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="text-xs">
            <p>বুধবার, ২৬ ফেব্রুয়ারি ২০২৫</p>
            <p>আজকের পত্রিকা</p>
          </div>
          <div className="flex items-center border gap-2 px-2 py-2.5">
            <Search size="16" />
            <input
              type="text"
              name=""
              id=""
              className="w-[145px] outline-0 text-xs placeholder:text-[#7C7C7C] bg-transparent"
              placeholder="অনুসন্ধান..."
            />
          </div>
        </div>
        <p className="text-[40px] font-bold">পত্রিকার নাম</p>
        <div className="flex items-center ">
          <Select defaultValue="bangla">
            <SelectTrigger className="w-[100x] bg-transparent px-4 py-2 text-xs shadow-none border-none ring-0 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangla">বাংলা</SelectItem>
              <SelectItem value="hindi">हिन्दी</SelectItem>
              <SelectItem value="arabic">العربية</SelectItem>
            </SelectContent>
          </Select>

          <button className="flex items-center gap-1.5 px-3 py-2.5">
            <UserRound size={26} />
            <p className="text-[16px]">অ্যাকাউন্ট</p>
          </button>
        </div>
      </div>
    </Container>
  );
}
