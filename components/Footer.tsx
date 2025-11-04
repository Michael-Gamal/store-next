"use client";
import { FaArrowRight } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F231E] text-white px-4 sm:px-6 lg:px-12 py-10">
      {/* القسم العلوي */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* الاشتراك */}
        <div className="flex-1">
          <p className="text-2xl sm:text-3xl font-semibold pb-5">
            Join our club, get 15% off for your Birthday
          </p>
          <div className="flex border border-white rounded-md overflow-hidden w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 p-2 bg-transparent text-white placeholder-white outline-none border-none"
            />
            <button className="p-2 bg-white text-black flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
          <div className="flex items-start gap-2 pt-5 max-w-lg">
            <input type="checkbox" id="d" className="mt-1" />
            <label htmlFor="d" className="text-xs sm:text-sm">
              By Submitting your email, you agree to receive advertising emails
              from Modimal.
            </label>
          </div>
          <div className="flex gap-5 text-2xl mt-8">
            <GrInstagram />
            <CiFacebook />
            <FaTiktok />
          </div>
        </div>

        {/* الأقسام الثلاثة */}
        <div className="flex-1 flex flex-col sm:flex-row gap-10 lg:gap-20">
          {["About Modimal", "About Modimal", "About Modimal"].map((title, index) => (
            <div key={index}>
              <h3 className="pb-5 font-semibold">{title}</h3>
              <ul className="flex flex-col gap-3 text-sm sm:text-base">
                <li>Collection</li>
                <li>Sustainability</li>
                <li>Privacy Policy</li>
                <li>Support System</li>
                <li>Terms & Condition</li>
                <li>Copyright Notice</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* النص النهائي */}
      <div className="mt-10 text-center text-sm sm:text-base">
        2023 Modimal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
