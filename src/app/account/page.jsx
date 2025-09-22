"use client";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CircleHelp, SquarePen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [userToken, setUserToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (!token) {
      // Not authenticated, redirect to signin
      router.push("/auth/signin");
      return;
    }

    setUserToken(token);
    setIsAuthenticated(true);
  }, [router]);

  const handleLogout = () => {
    // Clear tokens
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Remove userid cookie
    document.cookie = "userid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Trigger storage event to update other components
    window.dispatchEvent(new Event("storage"));

    // Redirect to signin
    router.push("/auth/signin");
  };

  if (!isAuthenticated) {
    return (
      <Container>
        <div className="py-20 text-center">
          <p className="text-lg">লোড হচ্ছে...</p>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="py-[18px] lg:py-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b pb-4 mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-lg lg:text-3xl font-bold">প্রোফাইল</h1>
            <p className="text-sm lg:text-base text-gray-600 mt-1">
              আপনার অ্যাকাউন্টের তথ্য পরিচালনা করুন
            </p>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors cursor-pointer"
          >
            লগ আউট
          </Button>
        </div>
        {/* Logout Button */}

        {/* Bookmarks Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6 mb-6">
          <h2 className="text-base lg:text-xl font-semibold mb-2">
            বুকমার্ক করা সংবাদ
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            আপনার সংরক্ষিত নিবন্ধসমূহ
          </p>
          <Link
            href="/bookmarks"
            className="text-brand hover:text-brand text-sm font-medium"
          >
            সব দেখুন →
          </Link>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base lg:text-xl font-semibold">
              ব্যক্তিগত তথ্য
            </h2>
            <button className="text-brand cursor-pointer hover:text-brand transition-colors">
              <SquarePen size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">ব্যবহারকারীর নাম</label>
              <p className="text-base lg:text-lg font-medium">Minhaz Sharif</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">ই-মেইল ঠিকানা</label>
              <p className="text-base lg:text-lg">
                minhazsharifofficial@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-lg shadow-sm border p-4 lg:p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base lg:text-xl font-semibold">নিরাপত্তা</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="text-sm lg:text-base">পাসওয়ার্ড</p>
                <p className="text-sm text-gray-500">
                  সর্বশেষ পরিবর্তন: ৩০ দিন আগে
                </p>
              </div>
              <button className="text-brand cursor-pointer hover:text-brand transition-colors">
                <SquarePen size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm lg:text-base">সংযুক্ত অ্যাকাউন্ট</p>
                <p className="text-sm text-gray-500">Google</p>
              </div>
              <button className="text-brand cursor-pointer hover:text-brand transition-colors">
                <SquarePen size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gray-50 rounded-lg p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-4">
            <CircleHelp size={24} className="text-gray-600" />
            <h2 className="text-base lg:text-xl font-semibold">
              সাহায্য ও সহায়তা
            </h2>
          </div>

          <div className="space-y-2">
            <button className="block text-sm lg:text-base text-gray-700 hover:text-brand cursor-pointer transition-colors">
              আমাদের সম্পর্কে
            </button>
            <button className="block text-sm lg:text-base text-gray-700 hover:text-brand cursor-pointer transition-colors">
              গোপনীয়তা নীতি
            </button>
            <button className="block text-sm lg:text-base text-gray-700 hover:text-brand cursor-pointer transition-colors">
              শর্তাবলী ও নিয়মাবলী
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
