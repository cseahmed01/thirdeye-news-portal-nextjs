"use client";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [eye, setEye] = useState(true);

  const handleEye = () => {
    setEye(!eye);
  };
  return (
    <Container>
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="shadow-lg p-8 lg:p-16">
          <div className=" max-w-[572px]">
            <h1 className="text-[32px] font-bold text-center">প্রবেশ করুন</h1>
            <div className="flex flex-col justify-center items-center gap-4  mt-8">
              <div className="w-full">
                <Label className="text-lg font-normal">ই-মেইল ঠিকানা</Label>
                <Input
                  className="py-4 px-2 mt-3 w-full h-full lg:h-16 rounded-none focus-visible:ring-0"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="w-full relative">
                <Label className="text-lg font-normal mb-3">পাসওয়ার্ড</Label>

                <Input
                  className="py-4 px-2 h-full lg:h-16 rounded-none focus-visible:ring-0"
                  type={eye ? "password" : "text"}
                  placeholder="your password"
                />
                <button
                  className="absolute bottom-4 lg:bottom-5 right-4"
                  onClick={handleEye}
                >
                  {eye ? <LucideEyeOff /> : <Eye />}
                </button>
              </div>
              <div className="flex justify-between items-center w-full h-full lg:w-[572px] lg:h-6">
                <div className="flex items-center  space-x-2">
                  <Checkbox id="terms" className="" />
                  <Label htmlFor="terms">লগইন মনে রাখুন</Label>
                </div>
                <p className="text-red-500 underline text-lg font-bold">
                  পাসওয়ার্ড ভুলে গেছেন?
                </p>
              </div>
              <Button className="w-full h-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none cursor-pointer">
                প্রবেশ করুন
              </Button>
            </div>
            <p className="text-lg font-normal text-center mt-6">
              আপনার কোনো অ্যাকাউন্ট নেই?{" "}
              <Link href="/auth/signup">
                <span className="underline">অ্যাকাউন্ট তৈরি করুন!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
