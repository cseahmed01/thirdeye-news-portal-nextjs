"use client";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-select";

export default function page() {
  const [eye, setEye] = useState(true);
  const [neweEye, setNeweEye] = useState(true);

  const handlePassword = () => {
    setEye(!eye);
  };
  const handleConform = () => {
    setNeweEye(!neweEye);
  };
  return (
    <Container>
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="shadow-lg p-8 lg:p-16">
          <div className=" max-w-[572px]">
            <h1 className="text-[32px] font-bold text-center">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
            <div className="flex flex-col justify-center items-center gap-4 mt-8">
              <div className="w-full">
                <Label className="text-lg font-normal">ই-মেইল ঠিকানা</Label>
                <Input
                  className="py-4 px-4 mt-3 w-full h-full lg:w-[572px] lg:h-16 rounded-none focus-visible:ring-0"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="w-full relative">
                <Label className="text-lg font-normal mb-3">
                  নতুন পাসওয়ার্ড
                </Label>

                <Input
                  className="py-4 px-4 h-full lg:h-16 rounded-none focus-visible:ring-0"
                  type={eye ? "password" : "text"}
                  placeholder="your password"
                />
                <button
                  className="absolute bottom-4 lg:bottom-5 right-4"
                  onClick={handlePassword}
                >
                  {eye ? <LucideEyeOff /> : <Eye />}
                </button>
              </div>
              <div className="w-full relative">
                <Label className="text-lg font-normal mb-3">
                  নতুন পাসওয়ার্ড নিশ্চিত
                </Label>

                <Input
                  className="py-4 px-4 h-full lg:h-16 rounded-none focus-visible:ring-0"
                  type={neweEye ? "password" : "text"}
                  placeholder="your password"
                />
                <button
                  className="absolute bottom-4 lg:bottom-5 right-4"
                  onClick={handleConform}
                >
                  {neweEye ? <LucideEyeOff /> : <Eye />}
                </button>
              </div>

              <Button className="w-full h-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none cursor-pointer">
                চালিয়ে যান
              </Button>
              <div className="flex items-center w-full my-8 px-11">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-sm text-muted-foreground">OR</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              <Button
                variant="outline"
                className="w-full py-6 px-5 text-sm flex rounded-none"
              >
                <img
                  className="w-[34px] h-[34px]"
                  src={"/assets/icons/google.png"}
                />
                <p className="flex-grow py-4"> গুগলের মাধ্যমে চালিয়ে যান</p>
              </Button>
              <Button
                variant="outline"
                className="w-full py-6 px-5  text-sm flex rounded-none"
              >
                <img
                  className="w-[34px] h-[34px]"
                  src={"/assets/icons/facebook.png"}
                />
                <p className="flex-grow py-4"> গুগলের মাধ্যমে চালিয়ে যান</p>
              </Button>
              <Button
                variant="outline"
                className="w-full py-6 px-5  text-sm flex rounded-none"
              >
                <img
                  className="w-[34px] h-[34px]"
                  src={"/assets/icons/twitter.png"}
                />
                <p className="flex-grow py-4"> গুগলের মাধ্যমে চালিয়ে যান</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
