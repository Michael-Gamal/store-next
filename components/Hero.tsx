import hero from "../public/images/hero.png"
import Link from "next/link";
import Image from "next/image"
import { FaPlus } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative">

        <Image  className="w-full"
            src={hero}
            width={1440}
            height={600}
            alt="hero"
        />
        <div className=" absolute bottom-[100px] left-[100px]  ">
            <div className="flex flex-col gap-7">
            <p className="leading-loose">
                Elegance in simplicity, <br /> Earth’s harmony
            </p>
            <Link href="/new"> 
                <button className=" cursor-pointer flex justify-center items-center gap-1 text-xl bg-white w-[184px] h-[40px]" ><FaPlus />  New In </button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
