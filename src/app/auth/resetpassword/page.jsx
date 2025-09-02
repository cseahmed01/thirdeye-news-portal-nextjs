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
              পাসওয়ার্ড নির্ধারণ করুন
            </h1>
            <div className="flex flex-col justify-center items-center mt-8">
              <div className="w-full relative">
                <Label className="text-lg font-normal mb-3">
                  নতুন পাসওয়ার্ড
                </Label>

                <Input
                  className="py-4 px-4 h-full lg:w-[572px] lg:h-16 rounded-none focus-visible:ring-0"
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
              <div className="w-full relative mt-4">
                <Label className="text-lg  font-normal mb-3">
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
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
