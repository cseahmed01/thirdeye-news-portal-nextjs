"use client";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { baseUrl } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Zod validation schema
const schema = z
  .object({
    name: z.string().min(1, "নাম আবশ্যক"),
    email: z.string().email("বৈধ ই-মেইল দিন"),
    password: z.string().min(6, "কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিন"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "পাসওয়ার্ড মিলছে না",
    path: ["password_confirmation"],
  });

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [eye, setEye] = useState(true);
  const [confirmEye, setConfirmEye] = useState(true);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${baseUrl}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Signup failed");

      alert("Signup successful!");
      reset();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-6 flex flex-col items-center justify-center">
          <div className="shadow-lg p-8 lg:p-16 max-w-[572px] w-full">
            <h1 className="text-[32px] font-bold text-center">
              অ্যাকাউন্ট তৈরি করুন
            </h1>
            <div className="flex flex-col gap-4 mt-8">
              {/* Name */}
              <div>
                <Label className="text-lg font-normal">নাম</Label>
                <Input
                  className="py-4 px-4 mt-3 lg:h-16 rounded-none focus-visible:ring-0"
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label className="text-lg font-normal">ই-মেইল ঠিকানা</Label>
                <Input
                  className="py-4 px-4 mt-3 lg:h-16 rounded-none focus-visible:ring-0"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Label className="text-lg font-normal">নতুন পাসওয়ার্ড</Label>
                <Input
                  className="py-4 px-4 mt-3 lg:h-16 rounded-none focus-visible:ring-0"
                  type={eye ? "password" : "text"}
                  placeholder="your password"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute bottom-4 right-4"
                  onClick={() => setEye(!eye)}
                >
                  {eye ? <LucideEyeOff /> : <Eye />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Label className="text-lg font-normal">
                  নতুন পাসওয়ার্ড নিশ্চিত
                </Label>
                <Input
                  className="py-4 px-4 mt-3 lg:h-16 rounded-none focus-visible:ring-0"
                  type={confirmEye ? "password" : "text"}
                  placeholder="confirm password"
                  {...register("password_confirmation")}
                />
                <button
                  type="button"
                  className="absolute bottom-4 right-4"
                  onClick={() => setConfirmEye(!confirmEye)}
                >
                  {confirmEye ? <LucideEyeOff /> : <Eye />}
                </button>
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                className="w-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "লোড হচ্ছে..." : "চালিয়ে যান"}
              </Button>

              {/* Divider */}
              <div className="flex items-center w-full my-8 px-11">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-sm text-muted-foreground">OR</span>
                <div className="flex-grow border-t border-gray-300" />
              </div>

              {/* Social Buttons */}
              {[
                {
                  src: "/assets/icons/google.png",
                  label: "গুগলের মাধ্যমে চালিয়ে যান",
                },
                {
                  src: "/assets/icons/facebook.png",
                  label: "ফেসবুকের মাধ্যমে চালিয়ে যান",
                },
                {
                  src: "/assets/icons/twitter.png",
                  label: "টুইটারের মাধ্যমে চালিয়ে যান",
                },
              ].map((item, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="w-full py-6 px-5 text-sm flex rounded-none"
                >
                  <img
                    className="w-[34px] h-[34px]"
                    src={item.src}
                    alt="social icon"
                  />
                  <p className="flex-grow py-4 text-center">{item.label}</p>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
}
