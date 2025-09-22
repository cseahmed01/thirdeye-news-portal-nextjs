"use client";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { baseUrl } from "@/lib/utils";
import { Eye, LucideEyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eye, setEye] = useState(true);
  const router = useRouter();

  const handleEye = () => {
    setEye(!eye);
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "ই-মেইল আবশ্যক";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "বৈধ ই-মেইল দিন";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "পাসওয়ার্ড আবশ্যক";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${baseUrl}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Login failed");

      // Store token based on remember me option
      if (formData.rememberMe) {
        localStorage.setItem("authToken", result.data.token);
      } else {
        sessionStorage.setItem("authToken", result.data.token);
      }

      const maxAge = formData.rememberMe ? 7 * 24 * 60 * 60 : null; // 7 days or session
      document.cookie = `userid=${result.data.userid}; path=/; max-age=${maxAge}; secure; samesite=strict`;

      // Trigger custom event to update other components
      window.dispatchEvent(new Event("storage"));

      // Redirect to home page
      router.push("/");

      // Reset form
      setFormData({
        email: "",
        password: "",
        rememberMe: false,
      });
    } catch (err) {
      console.error("Login error:", err);
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="w-full relative">
                  <Label className="text-lg font-normal mb-3">পাসওয়ার্ড</Label>

                  <Input
                    className="py-4 px-2 h-full lg:h-16 rounded-none focus-visible:ring-0"
                    type={eye ? "password" : "text"}
                    placeholder="your password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    className="absolute bottom-4 lg:bottom-5 right-4"
                    onClick={handleEye}
                  >
                    {eye ? <LucideEyeOff /> : <Eye />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <div className="flex justify-between items-center w-full h-full lg:w-[572px] lg:h-6">
                  <div className="flex items-center  space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        handleInputChange("rememberMe", checked)
                      }
                    />
                    <Label htmlFor="rememberMe">লগইন মনে রাখুন</Label>
                  </div>
                  <Link href="/auth/forgetpassword">
                    <p className="text-red-500 underline text-lg font-bold">
                      পাসওয়ার্ড ভুলে গেছেন?
                    </p>
                  </Link>
                </div>
                <Button
                  className="w-full h-full mt-8 lg:h-16 bg-black text-white text-lg rounded-none cursor-pointer"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "লোড হচ্ছে..." : "প্রবেশ করুন"}
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
      </form>
    </Container>
  );
}
