import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <div className="flex flex-col md:flex-row gap-[100px] justify-center items-center">
          <h1 className="text-4xl p-10 font-bold">পত্রিকার নাম</h1>
          <p className="lg:w-3/5">
            লোরেম ইপসাম ডোলর সিট আমেট, কনসেকটেটুর আদিপিসিং এলিট। সিট এৎ সেদ ইন
            সেম্পের আর্কু সেদ এৎ, আইড টেল্লুস। এৎ সেনেকটুস কুম স্যাগিটিস
            ফাউসিবুস সিট আলট্রিসিয়েস। আমেট কনসেকটেটুর অ্যান্টি ডায়াম ফাউসিবুস
            ইন আর্কু। আলট্রিসিয়েস পেলেনটেস্কু রঙ্কুস এস্ত আলিকাম। তুর্পিস
            প্রেটিয়াম মোরবি পেনাটিবাস আউটর ম্যাটিস মারুরস উট সিট।
          </p>
        </div>
        <div className="flex flex-col md:flex-row border-t border-b my-5">
          <div className="w-[50%] flex flex-wrap justify-between border-r pt-10 pb-5.5 pr-20">
            <div className="flex flex-col gap-[60px] text-lg">
              <h6 className="text-2xl font-bold">সর্বশেষ সংবাদ</h6>
              <Link href={"/"}>বিশ্ব সংবাদ</Link>
              <Link href={"/"}>জনপ্রিয় সংবাদ</Link>
              <Link href={"/"}>ক্রিকেট</Link>
              <Link href={"/"}>পণ্য ফেরত</Link>
              <Link href={"/"}>বিশ্ব সংবাদ</Link>
              <Link href={"/"}>জনপ্রিয় সংবাদ</Link>
              <Link href={"/"}>ক্রিকেট</Link>
              <Link href={"/"}>পণ্য ফেরত</Link>
            </div>
            <div className="flex flex-col gap-[60px] text-lg">
              <h6 className="text-2xl font-bold">লাইফস্টাইল</h6>
              <Link href={"/"}>স্বাস্থ্য</Link>
              <Link href={"/"}>ভাল</Link>
              <Link href={"/"}>খাবার</Link>
              <Link href={"/"}>রেস্টুরেন্ট</Link>
              <Link href={"/"}>ভালোবাসা</Link>
              <Link href={"/"}>ফ্যাশন</Link>
              <Link href={"/"}>ক্রিকেট</Link>
              <Link href={"/"}>রিয়েল এস্টেট</Link>
            </div>
            <div className="flex flex-col gap-[60px] text-lg">
              <h6 className="text-2xl font-bold">সর্বশেষ সংবাদ</h6>
              <Link href={"/"}>বিশ্ব সংবাদ</Link>
              <Link href={"/"}>জনপ্রিয় সংবাদ</Link>
              <Link href={"/"}>ক্রিকেট</Link>
              <Link href={"/"}>পণ্য ফেরত</Link>
              <Link href={"/"}>বিশ্ব সংবাদ</Link>
              <Link href={"/"}>জনপ্রিয় সংবাদ</Link>
              <Link href={"/"}>ক্রিকেট</Link>
              <Link href={"/"}>পণ্য ফেরত</Link>
            </div>
          </div>
          <div className="pt-8 pl-7.5 space-x-2">
            <input
              className="border py-[16.5px] px-3.5  w-[397px] outline-0 text-md placeholder:text-[#A1A1A1"
              type="email"
              placeholder="enter your email address"
            ></input>
            <button className="py-4.5 w-[120px] bg-[rgba(161,161,161,1)] text-md">
              Submit
            </button>
          </div>
        </div>

        {/* copy right  */}
        <div className="flex gap-[60px] mt-[62px] mb-[27px] text-xs">
          <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          <p>আমাদের সম্পর্কে</p>
          <p>গোপনীয়তা নীতি</p>
          <p>ব্যবহারের শর্তাবলী</p>
        </div>
      </Container>
    </footer>
  );
}
