"use client";
import Container from "@/components/common/Container";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function page() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <Container>
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="shadow-lg p-8 lg:p-16">
          <div className=" max-w-[572px]">
            <h1 className="text-[32px] font-bold text-center">ওটিপি যাচাই</h1>

            <p className="mb-[30px] mt-8 text-lg">
              কোডটি abc@gmail.com-এ পাঠানো হয়েছে
            </p>
            <div className="flex justify-center items-center w-full">
              <InputOTP maxLength={6}>
                <InputOTPGroup className="">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex items-center justify-center mt-[30px] text-lg text-center">
              {count == 0 ? (
                <p className="text-red-700 underline">পুনরায় পাঠানো যাবে</p>
              ) : (
                <p>
                  কোডটি <span>{count}</span> সেকেন্ডে পুনরায় পাঠানো হবে
                </p>
              )}
            </div>
            <Button className="w-full lg:w-[572px] h-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none cursor-pointer">
              চালিয়ে যান
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
