import Container from "@/components/common/Container";
import { Mail, MapPin, Phone } from "lucide-react";

const page = () => {
  return (
    <Container className="py-6">
      <div></div>
      {/*  যোগাযোগ করুন */}
      <div>
        <h3 className="text-xl lg:text-3xl  font-bold lg:text-center my-6">
          যোগাযোগ করুন
        </h3>
        <div className="grid grid-cols-12 gap-6">
          {/* details */}
          <div className="lg:col-start-2 col-span-12 lg:col-span-5 bg-[#F9FAFB] rounded-2xl py-5 px-3 lg:p-8 h-[231px] lg:h-auto">
            <div className="flex gap-4 pb-5 lg:pb-8">
              <div className="bg-[#E4E4E4] rounded-full w-fit h-fit p-2 lg:p-3.5">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs lg:text-xl">ইমেইল ঠিকানা</h2>
                <a className="text-xs lg:text-md" href="">
                  newsroom@dailychronicle.com
                </a>
                <a className="text-xs lg:text-md" href="">
                  press@dailychronicle.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 pb-5 lg:pb-8">
              <div className="bg-[#E4E4E4] rounded-full w-fit h-fit p-2 lg:-3.5">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs lg:text-xl">ফোন নম্বর</h2>
                <a className="text-xs lg:text-md" href="">
                  +1 (555) 123-4567
                </a>
                <a className="text-xs lg:text-md" href="">
                  +1 (555) 987-6543
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#E4E4E4] rounded-full w-fit h-fit p-2 lg:p-3.5">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs lg:text-xl">অফিসের ঠিকানা</h2>
                <a className="text-xs lg:text-md" href="">
                  ১২৩ নিউজ স্ট্রিট, ডাউনটাউন
                </a>
                <a className="text-xs lg:text-md" href="">
                  জেলা, নিউ ইয়র্ক, এনওয়াই ১০০০১
                </a>
              </div>
            </div>
          </div>
          {/* map */}
          <div className="col-span-12 lg:col-span-5 relative rounded-2xl h-[254px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.31710470925!2d90.41860587602413!3d23.807320386587485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68a06095d26bb2cf%3A0xc603340c6ab8d15f!2sRoni%20Tomas%20company!5e0!3m2!1sen!2sbd!4v1750148972051!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{
                border: 0,
                borderRadius: "16px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
