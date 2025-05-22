
import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {


  return (
    <footer className="bg-primary text-white py-4">
      {/* <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getDay()} Your Company Name. All rights
          reserved.
        </p>

      </div> */}

      <Container>
        <div className="flex gap-[100px] justify-center items-center  ">
          <h1 className="text-4xl p-10 font-bold">পত্রিকার নাম</h1>
          <p className="lg:w-3/5">লোরেম ইপসাম ডোলর সিট আমেট, কনসেকটেটুর আদিপিসিং এলিট। সিট এৎ সেদ ইন সেম্পের আর্কু সেদ
            এৎ,
            আইড
            টেল্লুস। এৎ  সেনেকটুস কুম স্যাগিটিস ফাউসিবুস সিট আলট্রিসিয়েস। আমেট কনসেকটেটুর অ্যান্টি ডায়াম ফাউসিবুস ইন আর্কু।
            আলট্রিসিয়েস পেলেনটেস্কু রঙ্কুস এস্ত আলিকাম। তুর্পিস প্রেটিয়াম মোরবি পেনাটিবাস আউটর ম্যাটিস মারুরস
            উট
            সিট।</p>
        </div>
        <div className="flex border-t border-b my-5">
          <div className="w-[50%] flex justify-around border-r py-5">
            <div className="flex flex-col space-y-5 text-xs">
              <h6 className=" text-2xl">সর্বশেষ সংবাদ</h6>
              <Link  href={'/'}>বিশ্ব সংবাদ</Link>
              <Link  href={'/'}>জনপ্রিয় সংবাদ</Link>
              <Link  href={'/'}>ক্রিকেট</Link>
              <Link  href={'/'}>পণ্য ফেরত</Link>
              <Link  href={'/'}>বিশ্ব সংবাদ</Link>
              <Link  href={'/'}>জনপ্রিয় সংবাদ</Link>
              <Link  href={'/'}>ক্রিকেট</Link>
              <Link  href={'/'}>পণ্য ফেরত</Link>
            </div>
            <div className="flex flex-col space-y-5 text-xs">
              <h6 className=" text-2xl ">লাইফস্টাইল</h6>
              <Link  href={'/'}>স্বাস্থ্য</Link>
              <Link  href={'/'}>ভাল</Link>
              <Link  href={'/'}>খাবার</Link>
              <Link  href={'/'}>রেস্টুরেন্ট</Link>
              <Link  href={'/'}>ভালোবাসা</Link>
              <Link  href={'/'}>ফ্যাশন</Link>
              <Link  href={'/'}>ক্রিকেট</Link>
              <Link  href={'/'}>রিয়েল এস্টেট</Link>
            </div>
            <div className="flex flex-col space-y-5 text-xs">
              <h6 className=" text-2xl">সর্বশেষ সংবাদ</h6>
              <Link  href={'/'}>বিশ্ব সংবাদ</Link>
              <Link  href={'/'}>জনপ্রিয় সংবাদ</Link>
              <Link  href={'/'}>ক্রিকেট</Link>
              <Link  href={'/'}>পণ্য ফেরত</Link>
              <Link  href={'/'}>বিশ্ব সংবাদ</Link>
              <Link  href={'/'}>জনপ্রিয় সংবাদ</Link>
              <Link  href={'/'}>ক্রিকেট</Link>
              <Link  href={'/'}>পণ্য ফেরত</Link>
            </div>

          </div>
          <div className="p-7 space-x-2">
            <input className="border p-5 h-[55px] w-[397px] " type="email" placeholder="enter your email address"></input>
            <button className="btn  h-[55px] w-[120px] border bg-[rgba(161,161,161,1)]"> Submit</button>
          </div>
        </div>

        {/* copy right  */}
        <div className="flex w-[50%] justify-around px-8 my-5">
          <p className="text-sm">
            &copy; {new Date().getDay()} Your Company Name
          </p>
          <h1>আমাদের সম্পর্কে</h1>
          <h1>গোপনীয়তা নীতি</h1>
          <h1>ব্যবহারের শর্তাবলী</h1>
        </div>
      </Container>

    </footer>
  );
}
