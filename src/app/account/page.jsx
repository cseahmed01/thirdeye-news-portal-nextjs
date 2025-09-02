import Container from "@/components/common/Container";
import { CircleHelp, SquarePen } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="py-[18px] lg:py-6">
        <h1 className="text-xxs lg:text-5xl border-b p-1">অ্যাকাউন্ট তথ্য</h1>
        <h1 className="text-xs lg:text-[40px] font-bold pt-2 lg:pt-[30px]">
          বুকমার্ক করা সংবাদ
        </h1>
        <div>
          <div className="flex justify-between items-center pt-2 lg:pt-[30px]">
            <div>
              <h2 className="text-xsm lg:text-[32px]">ব্যবহারকারীর নাম</h2>
              <h2 className="text-xxs lg:text-[40px]">Minhaz Sharif</h2>
            </div>
            <button>
              <SquarePen size={36} />
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center pt-2 lg:pt-[30px]">
            <div>
              <h2 className="text-xsm lg:text-[32px]">ই-মেইল ঠিকানা</h2>
              <h2 className="text-xxs lg:text-[40px]">
                minhazsharifofficial@gmail.com
              </h2>
            </div>
            <button>
              <SquarePen size={36} />
            </button>
          </div>
          <div className="flex justify-between items-center pt-2 lg:pt-[30px]">
            <div>
              <h2 className="text-xsm lg:text-[32px]">পাসওয়ার্ড</h2>
              <h2 className="text-xxs lg:text-[40px]">*********</h2>
            </div>
            <button>
              <SquarePen size={36} />
            </button>
          </div>
          <div className="flex justify-between items-center pt-2 lg:pt-[30px]">
            <div>
              <h2 className="text-xsm lg:text-[32px]">
                সংযুক্ত অ্যাকাউন্টসমূহ
              </h2>
              <h2 className="text-xxs lg:text-[40px]">Google</h2>
            </div>
            <button>
              <SquarePen size={36} />
            </button>
          </div>
        </div>
        <div className="flex pt-2 lg:pt-10 items-center lg:gap-3.5">
          <CircleHelp
            size={40}
            className="bg-[#4D4D4D] text-white rounded-full "
          />
          <h1 className="text-xs lg:text-[40px] font-bold">
            সাহায্যের কেন্দ্র
          </h1>
        </div>
        <h2 className="text-xsm lg:text-[32px] pt-2 lg:pt-[30px]">
          আমাদের সম্পর্কে
        </h2>
        <h2 className="text-xsm lg:text-[32px] py-2 lg:py-7 ">গোপনীয়তা নীতি</h2>
        <h2 className="text-xsm lg:text-[32px]">শর্তাবলী ও নিয়মাবলী</h2>
      </div>
    </Container>
  );
};

export default page;
