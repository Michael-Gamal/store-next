"use client";
import CollectionImage1 from '../public/images/pic2.png'
import CollectionImage2 from '../public/images/pic1-2.png'
import CollectionImage3 from '../public/images/pic1.png'
import CollectionImage4 from '../public/images/pic1-1.png'
import Image from "next/image"
import Link from 'next/link'

const Collection = () => {
  return (
    <section className="mt-8 mb-10 px-4 sm:px-6 lg:px-12">
      {/* العنوان */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-2xl sm:text-3xl">Collections</h2>
      </div>

      {/* الشبكة الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* العمود الأيسر */}
        <div className="flex flex-col gap-6 lg:gap-10">
          {/* الصورة الأولى */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[500px] lg:h-[600px]">
            <Image 
              src={CollectionImage1}
              alt="Boluses"
              fill
              className="object-cover rounded-md"
              priority
            />
            <Link href="/new">
              <button className="absolute bottom-4 right-4 bg-white text-gray-800 font-medium text-lg sm:text-xl w-[150px] sm:w-[180px] h-[40px] rounded shadow hover:bg-gray-100 transition">
                Boluses
              </button>
            </Link>
          </div>

          {/* الصورة الثانية */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[400px] lg:h-[500px]">
            <Image 
              src={CollectionImage2}
              alt="Dresses"
              fill
              className="object-cover rounded-md"
            />
            <Link href="/new">
              <button className="absolute bottom-4 right-4 bg-white text-gray-800 font-medium text-lg sm:text-xl w-[150px] sm:w-[180px] h-[40px] rounded shadow hover:bg-gray-100 transition">
                Dresses
              </button>
            </Link>
          </div>
        </div>

        {/* العمود الأيمن */}
        <div className="flex flex-col gap-6 lg:gap-10">
          {/* الصورة الثالثة */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[500px] lg:h-[600px]">
            <Image 
              src={CollectionImage3}
              alt="Pants"
              fill
              className="object-cover rounded-md"
            />
            <Link href="/new">
              <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-medium text-lg sm:text-xl w-[150px] sm:w-[180px] h-[40px] rounded shadow hover:bg-gray-100 transition">
                Pants
              </button>
            </Link>
          </div>

          {/* الصورة الرابعة */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[400px] lg:h-[500px]">
            <Image 
              src={CollectionImage4}
              alt="Outwear"
              fill
              className="object-cover rounded-md"
            />
            <Link href="/new">
              <button className="absolute bottom-4 right-4 bg-white text-gray-800 font-medium text-lg sm:text-xl w-[150px] sm:w-[180px] h-[40px] rounded shadow hover:bg-gray-100 transition">
                Outwear
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collection;
