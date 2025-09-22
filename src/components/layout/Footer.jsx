import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white">
          <h1 className="text-4xl p-10 pl-0 font-bold">পত্রিকার নাম</h1>
          <div className="lg:w-3/5 flex flex-wrap items-center justify-center space-y-2">
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              বিশ্ব সংবাদ
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              জনপ্রিয় সংবাদ
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ক্রিকেট
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              পণ্য ফেরত
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              বিশ্ব সংবাদ
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              জনপ্রিয় সংবাদ
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ক্রিকেট
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              পণ্য ফেরত
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              স্বাস্থ্য
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ভাল
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              খাবার
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              রেস্টুরেন্ট
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ভালোবাসা
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ফ্যাশন
            </Link>
            <Link href={"/"} className="border-r border-white/50 pr-3 pl-3">
              ক্রিকেট
            </Link>
            <Link href={"/"} className="pl-3 pb-2">
              রিয়েল এস্টেট
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20 py-5 border-b border-white w-full justify-between items-center">
          <div>
            {/* <p className="pb-3">অনুসরণ করুন</p> */}
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-6 h-6 hover:scale-110 transition-transform"
              >
                <img
                  src="/assets/icons/facebook.png"
                  alt="facebook"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-6 h-6 hover:scale-110 transition-transform"
              >
                <img
                  src="/assets/icons/twitter.png"
                  alt="twitter"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-6 h-6 hover:scale-110 transition-transform"
              >
                <img
                  src="/assets/icons/youtube.png"
                  alt="youtube"
                  className="w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-6 h-6 hover:scale-110 transition-transform"
              >
                <img
                  src="/assets/icons/whatsapp.png"
                  alt="whatsapp"
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>
          <div className="space-x-2">
            <input
              className="border border-white py-[15px] px-3.5 w-full md:w-[397px] outline-0 text-md placeholder:text-[#A1A1A1"
              type="email"
              placeholder="Enter your email address"
            ></input>
            <button className="py-4 w-full mt-2 md:mt-0 md:w-[120px] bg-[rgba(161,161,161,1)] text-md cursor-pointer hover:bg-white hover:text-black transition-colors">
              Submit
            </button>
          </div>
        </div>

        {/* copy right  */}
        <div className="flex flex-wrap items-center justify-center gap-[28px] mt-[42px] mb-[27px] text-xs">
          <p className="border-r border-white pr-8">
            &copy; {new Date().getFullYear()} Your Company Name
          </p>
          <p className="border-r border-white pr-8">আমাদের সম্পর্কে</p>
          <p className="border-r border-white pr-8">গোপনীয়তা নীতি</p>
          <p>ব্যবহারের শর্তাবলী</p>
        </div>
      </Container>
    </footer>
  );
}
