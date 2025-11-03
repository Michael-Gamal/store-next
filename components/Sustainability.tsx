import React from 'react'
import SustainabilityImage from '../public/images/Sustainability.png'
import Image from 'next/image'
import Link from 'next/link'
const Sustainability = () => {
  return (
    <section className='mt-[30px] mb-[30px]'>
      <div className="relative w-full h-[500px]">
        <Image
            className="w-full h-auto object-cover rounded"
            src={SustainabilityImage}
            fill
            alt="Sustainability"
        />
        <div className="absolute right-32 bottom-20 text-2xl">
            <p>Stylish sustainability in clothing promotes eco <br /> -friendly choices for a greater future</p>
        <Link href="/new"> 
            <button className=" absolute  -bottom-12.5 right-2.5 cursor-pointer flex
            justify-center items-center gap-1 text-xl bg-white w-[195px] h-10" >  Sustainability </button>
        </Link>            
        </div>
      </div>
    </section>
  )
}

export default Sustainability
