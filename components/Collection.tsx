"use client"
import CollectionImage1 from '../public/images/pic2.png'
import CollectionImage2 from '../public/images/pic1-2.png'
import CollectionImage4 from '../public/images/pic1-1.png'
import CollectionImage3 from '../public/images/pic1.png'
import Image from "next/image"
import Link from 'next/link'
const Collection = () => {
  return (
    <section className="mt-8 mb-5">
      <div className="flex  items-center px-15">
        <h2 className="font-medium mb-5">Collections</h2>
      </div>
      <div className="flex px-15 gap-10">
      <div className="flex-1 flex flex-col gap-10">
        <div className="relative w-full h-[600px]">
        <Image 
          src={CollectionImage1}
          fill
          alt='pic'
          className="object-cover w-full h-full"
        />
        <Link href="/new"> 
            <button className=" absolute bottom-[20px] right-[20px] cursor-pointer flex
            justify-center items-center gap-1 text-xl bg-white w-[195px] h-[40px]" >  Boluses </button>
        </Link>
        </div>
      <div className='w-full h-full relative'>
        <Image
          className="object-cover w-full h-full"
          src={CollectionImage2}
          fill
          alt='pic'
        />
        <Link href="/new"> 
            <button className=" absolute bottom-[20px] right-[20px] cursor-pointer flex
            justify-center items-center gap-1 text-xl bg-white w-[195px] h-[40px]" >  Dresses </button>
        </Link>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-32 ">
        <div className="relative w-full h-[810] ">
        <Image
          className="object-cover w-full h-full"     
          src={CollectionImage3}
          fill
          alt='pic'
        />
        <Link href="/new"> 
            <button className=" absolute bottom-[20px] left-[20px] cursor-pointer flex
            justify-center items-center gap-1 text-xl bg-white w-[195px] h-[40px]" >  Pants </button>
        </Link>
        </div>
        <div className="relative w-full h-[500px]">
          <Image
          className="object-cover w-full h-full"     
            src={CollectionImage4}
            fill
            alt='pic'
          />
          <Link href="/new"> 
            <button className=" absolute bottom-[20px] right-[18px] cursor-pointer flex
            justify-center items-center gap-1 text-xl bg-white w-[189px] h-[42px]" >  Outwear </button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}
export default Collection
