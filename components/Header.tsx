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
        <div className="w-[184px] h-[46px]">
          <Link href="./">
            <Image 
              src={logo}
              width={184}
              height={46}
              alt="logo"
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
          <IoSearchSharp />
          <FaRegUser />
          <CiHeart />
          <SlBag />
        </div>
      </nav>
    </header>
  )
}

export default Header
