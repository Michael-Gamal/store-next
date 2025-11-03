"use client"
import Image from "next/image"
import { FaHeart } from "react-icons/fa6";
import product1 from "../public/images/Frame 427319383.png"
const BestSaller = () => {

  const products = [
  { name: "tailored stretch", subtitle: "turn it up pants", price: 180, colors: ["black","[#7DC3EB]","primary"], image: product1 },
  { name: "tailored stretch", subtitle: "turn it up pants", price: 180, colors: ["black","[#7DC3EB]","primary"], image: product1 },
  { name: "tailored stretch", subtitle: "turn it up pants", price: 180, colors: ["black","[#7DC3EB]","primary"], image: product1 },
  { name: "tailored stretch", subtitle: "turn it up pants", price: 180, colors: ["black","[#7DC3EB]","primary"], image: product1 },
];

  return (
    <section className="mt-8 mb-5">
      <div className="flex justify-between items-center px-15">
        <h2 className="font-medium">Best Sellers</h2>
        <button className="cursor-pointer text-xl text-primary font-extralight hover:underline transition">view all</button>
      </div>
        <div className="px-15 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="shadow relative">
              <FaHeart className="absolute top-5 right-5 text-2xl text-white cursor-pointer" />
              <Image src={product.image} alt={product.name} width={300} height={250} className="w-full" />
              <div className="text-xl p-2">
                <div className="font-bold my-2">{product.name}</div>
                <div className="flex justify-between items-center">
                  <p className="font-extralight">{product.subtitle}</p>
                  <p className="font-bold">${product.price}</p>
                </div>
                <div className="flex gap-2 justify-start items-center mt-3">
                  {product.colors.map((color, i) => (
                    <span key={i} className={`w-6 h-6 rounded-full bg-${color}`}></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default BestSaller
