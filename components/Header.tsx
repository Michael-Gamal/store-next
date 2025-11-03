import Image from "next/image"
import logo from '../public/images/Logo.png'
import Link from "next/link"
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";

const Header = () => {

  return (
    <header className="">
      <div className="flex justify-center items-center bg-primary h-[30px] text-white text-[14px]">
        <p className="">Enjoy Free Shipping On All Orders</p>
      </div>
      <nav className=" flex justify-between items-center px-15 py-2 ">
        <div className="">
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
        <div className="">
          <ul className="flex justify-between items-center gap-10">
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
        <div className="flex items-center justify-center gap-5">
        <button className="cursor-pointer">
          <IoSearchSharp />
        </button>
        <button className="cursor-pointer">
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
