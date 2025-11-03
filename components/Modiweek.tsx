"use client"
import { useEffect,useState} from 'react'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import product1 from "../public/images/Frame 427319383.png"

const Modiweek = () => {
  const [leftItem, setLeftItem] = useState('0');
  const products = [
    { id: 1, name: "Sunday1", image: product1 },
    { id: 2, name: "Sunday2", image: product1 },
    { id: 3, name: "Sunday3", image: product1 },
    { id: 4, name: "Sunday4", image: product1 },
    { id: 5, name: "Sunday5", image: product1 },
    { id: 6, name: "Sunday6", image: product1 },
    { id: 7, name: "Sunday7", image: product1 },
  ];
  useEffect(() => {
  const positions = [0, 270, 540, 890];
  let index = 0;
  const interval = setInterval(() => {
    index = (index + 1) % positions.length;
    setLeftItem(`${positions[index]}px`);
  }, 3500);
  return () => clearInterval(interval);
}, []);

  return (
    <section className='mt-[30px] mb-5 overflow-x-hidden'>
        <div className="flex items-center px-15">
            <h2 className="font-medium mb-5">Modiweek</h2>
        </div>
        {/* slider */}
        <div style={{right : leftItem }} className="transition-all duration-300 ease-in-out relative px-15 mt-5  grid grid-flow-col auto-cols-[22%] gap-8   ">
        {
          products.map((product) => (
            <div key={product.id} className="shadow relative">
            <FaHeart className="absolute top-5 right-5 text-2xl text-white cursor-pointer " />
            <Image
            className="w-full"
            src={product.image}
              width={300}
              height={250}
              alt={product.name}
            />
            <div className="text-xl p-2">
              <p className="font-bold my-2">{product.name}</p>
            </div>
          </div>
          ))
        }
        </div>
    </section>
  )
}

export default Modiweek
