"use client";
import { LogOut, Search, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../common/Container";

export default function TopAppBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const token =
          localStorage.getItem("authToken") ||
          sessionStorage.getItem("authToken");
        setIsAuthenticated(!!token);
      }
      setLoading(false);
    };

    checkAuth();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => checkAuth();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    // Remove tokens from both storages
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Remove userid cookie
    document.cookie = "userid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Update state
    setIsAuthenticated(false);

    // Redirect to signin page
    router.push("/auth/signin");
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-3 pb-2 border-b-[0.5px] border-white">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Link href="/" className="select-none">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={180}
              height={100}
              className="object-contain"
            />
            {/* <Image
              src="/assets/logo-en.png"
              alt="Logo"
              width={320}
              height={140}
              className="object-contain"
            /> */}
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

          {!loading && (
            <>
              {isAuthenticated ? (
                // Authenticated user - show logout button
                <div className="flex items-center gap-3">
                  <Link
                    href="/account"
                    className="flex items-center gap-1.5 p-1 cursor-pointer hover:opacity-80"
                  >
                    {/* <p className="text-[16px]">অ্যাকাউন্ট</p> */}
                    <UserRound size={20} />
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 p-1 cursor-pointer hover:opacity-80"
                  >
                    {/* <p className="text-[16px]">লগআউট</p> */}
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                // Not authenticated - show signin button
                <Link
                  href="/auth/signin"
                  className="flex items-center gap-1.5 p-1 cursor-pointer hover:opacity-80"
                >
                  {/* <p className="text-[16px]">অ্যাকাউন্ট</p> */}
                  <UserRound size={20} />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
