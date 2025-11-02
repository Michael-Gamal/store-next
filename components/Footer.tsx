import { FaArrowRight } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F231E] text-white px-15">
      <div className="flex gap-15 py-10  justify-between ">
        <div className="flex-2">
        <p className="h3 pb-5 text-2xl">Join our club, get 15% off for your Birthday</p>
        <div className="border border-white flex justify-between items-center p-2 text-2xs w-[496px] ">
          <input type="email" placeholder="Enter Your Email Address" className="w-full h-full border-none outline-none" />
          <FaArrowRight />
        </div>
        <div className="pt-5 w-[496px] flex">
          <input className="w-5" type="checkbox" name="" id="d"  />
          <label className="p-2" htmlFor="d">By Submittng your email, you agree to receive advertising emails  from Modimal.</label>
        </div>
        <div className=" flex gap-5 text-2xl mt-[50px]">
          <GrInstagram />
          <CiFacebook />
          <FaTiktok />

        </div>
      </div>
      <div className="flex flex-2 justify-end gap-15 ">
          <div className="">
            <h3 className="pb-5">About Modimal</h3>
            <ul className="flex flex-col gap-3">
              <li>Collection</li>
              <li>Sustainability</li>
              <li>Privacy Policy</li>
              <li>Support System</li>
              <li>Terms & Condition</li>
              <li>Copyright Notice</li>
            </ul>
          </div>
          <div className="">
            <h3 className="pb-5" >About Modimal</h3>
            <ul className="flex flex-col gap-3">
              <li>Collection</li>
              <li>Sustainability</li>
              <li>Privacy Policy</li>
              <li>Support System</li>
              <li>Terms & Condition</li>
              <li>Copyright Notice</li>
            </ul>
          </div>
          <div className="">
            <h3 className="pb-5">About Modimal</h3>
            <ul className="flex flex-col gap-3">
              <li>Collection</li>
              <li>Sustainability</li>
              <li>Privacy Policy</li>
              <li>Support System</li>
              <li>Terms & Condition</li>
              <li>Copyright Notice</li>
            </ul>
          </div>
      </div>
      </div>
      <div className="flex flex-1 pb-10"> 2023 modimal. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer
