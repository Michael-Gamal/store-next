import React from 'react'
import product1 from "../public/images/Frame 427319383.png"
import follow1 from "../public/images/follow1.png"
import follow2 from "../public/images/follow2.png"
import follow3 from "../public/images/follow3.png"
import follow4 from "../public/images/follow4.png"

import Image from 'next/image'
const FollowUs = () => {
  return (
    <section className='mt-[60px] mb-[40px] px-15'>
      <div className="flex  items-center px-15">
        <h2 className="font-medium mb-5">Follow us @modimal</h2>
      </div>
      <div className="flex justify-center items-stretch">
        <div className="flex-1">
            <Image 
                className='w-full'
                src={product1}
                width={603}
                height={705}
                alt="follow us"
            />
        </div>
        <div className="flex-1 items-stretch grid grid-cols-2">
            <Image 
                className='w-full '
                src={follow1}
                width={310.5}
                height={375.5}
                alt="follow us"
            />
            <Image 
                className='w-full'
                src={follow2}
                width={310.5}
                height={375.5}
                alt="follow us"
            />
            <Image 
                className='w-full'
                src={follow3}
                width={310.5}
                height={375.5}
                alt="follow us"
            />
            <Image 
                className='w-full'
                src={follow4}
                width={310.5}
                height={375.5}
                alt="follow us"
            />
        </div>
      </div>
    </section>
  )
}

export default FollowUs
