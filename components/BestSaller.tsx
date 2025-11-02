"use client"
import Image from "next/image"
import { FaHeart } from "react-icons/fa6";
import product1 from "../public/images/Frame 427319383.png"
const BestSaller = () => {
  return (
    <section className="mt-[30px] mb-5">
      <div className="flex justify-between items-center px-15">
        <h2 className="font-medium">Best Sellers</h2>
        <button className="cursor-pointer text-xl text-primary font-extralight">view all</button>
      </div>
        <div className="px-15 mt-5 grid grid-cols-4 gap-8">
          <div className="shadow relative">
            <FaHeart className="absolute top-[20px] right-[20px] text-2xl text-white cursor-pointer " />
            <Image
            className="w-full"
            src={product1}
              width={300}
              height={250}
              alt="product1"
            />
            <div className="text-xl p-2">
              <div className="font-bold my-2">tailored stretch</div>
              <div className="flex justify-between items-center">
                <p className="font-extralight">turn it up pants</p>
                <p className="font-bold">$180</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-3">
                <span className="w-[24px] h-[24px] bg-black rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-[#7DC3EB] rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-primary rounded-full "></span>
              </div>
            </div>
          </div>
          <div className="shadow relative">
            <FaHeart className="absolute top-[20px] right-[20px] text-2xl text-white cursor-pointer " />
            <Image
            className="w-full"
            src={product1}
              width={300}
              height={250}
              alt="product1"
            />
            <div className="text-xl p-2">
              <div className="font-bold my-2">tailored stretch</div>
              <div className="flex justify-between items-center">
                <p className="font-extralight">turn it up pants</p>
                <p className="font-bold">$180</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-3">
                <span className="w-[24px] h-[24px] bg-black rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-[#7DC3EB] rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-primary rounded-full "></span>
              </div>
            </div>
          </div>
          <div className="shadow relative">
            <FaHeart className="absolute top-[20px] right-[20px] text-2xl text-white cursor-pointer " />
            <Image
            className="w-full"
            src={product1}
              width={300}
              height={250}
              alt="product1"
            />
            <div className="text-xl p-2">
              <div className="font-bold my-2">tailored stretch</div>
              <div className="flex justify-between items-center">
                <p className="font-extralight">turn it up pants</p>
                <p className="font-bold">$180</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-3">
                <span className="w-[24px] h-[24px] bg-black rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-[#7DC3EB] rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-primary rounded-full "></span>
              </div>
            </div>
          </div>
          <div className="shadow relative">
            <FaHeart className="absolute top-[20px] right-[20px] text-2xl text-white cursor-pointer " />
            <Image
            className="w-full"
            src={product1}
              width={300}
              height={250}
              alt="product1"
            />
            <div className="text-xl p-2">
              <div className="font-bold my-2">tailored stretch</div>
              <div className="flex justify-between items-center">
                <p className="font-extralight">turn it up pants</p>
                <p className="font-bold">$180</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-3">
                <span className="w-[24px] h-[24px] bg-black rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-[#7DC3EB] rounded-full "></span>
                <span className="w-[24px] h-[24px] bg-primary rounded-full "></span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BestSaller
