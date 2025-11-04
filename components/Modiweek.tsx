"use client";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import product1 from "../public/images/Frame 427319383.png";

const Modiweek = () => {
  const products = [
    { id: 1, name: "Sunday1", image: product1 },
    { id: 2, name: "Sunday2", image: product1 },
    { id: 3, name: "Sunday3", image: product1 },
    { id: 4, name: "Sunday4", image: product1 },
    { id: 5, name: "Sunday5", image: product1 },
    { id: 6, name: "Sunday6", image: product1 },
    { id: 7, name: "Sunday7", image: product1 },
  ];

  return (
    <section className="mt-10 mb-10">
      {/* العنوان */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12">
        <h2 className="font-semibold text-2xl sm:text-3xl mb-3">Modiweek</h2>
      </div>

      {/* الـ Slider (تمرير أفقي يدوي باللمس) */}
      <div className="overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-12">
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%] flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative">
                <FaHeart className="absolute top-4 right-4 text-2xl text-red-500 cursor-pointer hover:scale-110 transition" />
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-auto"
                  width={300}
                  height={250}
                />
              </div>
              <div className="p-3">
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modiweek;
