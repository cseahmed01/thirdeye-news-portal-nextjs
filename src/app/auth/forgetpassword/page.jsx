"use client";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <Container>
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="shadow-lg p-8 lg:p-16">
          <div className=" max-w-[572px]">
            <h1 className="text-[32px] font-bold text-center">
              পাসওয়ার্ড পুনরুদ্ধার
            </h1>
            <div className="flex flex-col justify-center items-center mt-8">
              <div className="w-full">
                <Label className="text-lg font-normal">ই-মেইল ঠিকানা</Label>
                <Input
                  className="py-4 px-4 mt-3 w-full lg:w-[572px] h-full lg:h-16 rounded-none focus-visible:ring-0"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <Button className="w-full h-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none cursor-pointer">
                প্রবেশ করুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
