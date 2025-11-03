import hero from "../public/images/hero.png"
import Link from "next/link";
import Image from "next/image"
import { FaPlus } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative  ">
        <div className="relative w-full h-screen">
        <Image 
            className="object-cover w-full h-full"
            src={hero}
            fill
            priority
            alt="hero"
        />

        </div>
        <div className=" absolute bottom-25 left-25  ">
            <div className="flex flex-col gap-7">
            <p className="leading-loose">
                Elegance in simplicity, <br /> Earth’s harmony
            </p>
            <Link href="/new"> 
                <button className=" cursor-pointer flex justify-center items-center gap-1 text-xl bg-white w-[184px] h-[40px]" ><FaPlus />  New In </button>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
