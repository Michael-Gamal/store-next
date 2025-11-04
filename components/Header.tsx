import Image from "next/image"
import logo from '../public/images/Logo.png'
import Link from "next/link"
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  return (
    <header className="">
      <div className="flex justify-center items-center bg-primary h-[30px] text-white text-[14px]">
        <p className="">Enjoy Free Shipping On All Orders</p>
      </div>
      <nav className=" flex justify-between md:justify-center items-center gap-3 px-6 py-2 ">
          <div className="flex flex-1 items-center justify-center text-2xl gap-2 md:hidden">

          <button className="w-[24px] h-[24px]">
            <GiHamburgerMenu  />
          </button>
            <button className="flex cursor-pointer">
            <IoSearchSharp />
          </button>
          </div>
        <div className="flex flex-2 md:flex-1 md:justify-center justify-between  items-center">
          
          <Link href="./" className="block w-[184px] h-[46px] relative">
            <Image 
              src={logo}
              fill
              priority
              alt="logo"
              className="object-contain"  
            />
          </Link>
        </div>
        <div className=" ">
          <ul className="hidden md:flex justify-between items-center gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/collection">Collection</Link>
            </li>
            <li>
              <Link href="/new">New In</Link>
            </li>
            <li>
              <Link href="/modiweek">Modiweek</Link>
            </li>
            <li>
              <Link href="/plus-size">Plus Size</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
          </ul>
        </div>
        <div className="flex text-2xl flex-1 items-center justify-center gap-5">
        <button className="hidden md:flex cursor-pointer">
          <IoSearchSharp />
        </button>
        <button className="hidden md:flex cursor-pointer">
          <FaRegUser />
        </button>
        <button className="cursor-pointer">
          <CiHeart />
        </button>
        <button className="cursor-pointer relative">
          <SlBag />
          {/* مثال لعداد العربة */}
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-[15px] h-[15px]">2</span>
        </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
