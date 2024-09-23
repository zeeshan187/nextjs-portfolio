"use client"
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent w-full">
      <div className="flex items-center justify-between py-5 fixed top-0 w-full">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] md:text-white text-3xl font-bold">
            <span className="text-pink-600">Zeeshan</span> <span className="text-white md:text-[#16f2b3]">Tahir</span>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className=" md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`${
            isOpen ? "block " : "hidden"
          } absolute right-[25%] top-16 z-10 h-[50vh] bg-black md:bg-transparent w-[50%] flex flex-col items-center md:static md:flex md:h-auto md:w-auto md:flex-row md:space-x-1 md:border-0`}
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/about"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/experience"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/skills"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/education"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/portfolio"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                PORTFOLIO
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/contact"
            >
              <div onClick={()=>setIsOpen(false)} className="text-sm text-[#16f2b3] md:text-white transition-colors duration-300 hover:text-pink-600">
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
