'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-stone-700 p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-2xl pl-[50px]">Mutaiba Munawar</div>

        {/* Icon (Mobile Menu) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 pr-[100px]">
          <Link href="/" className="text-white hover:text-[#e3874f]">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-[#e3874f]">
            About
          </Link>
          <Link href="#portfolio" className="text-white hover:text-[#e3874f]">
            Project
          </Link>
          <Link href="#skill" className="text-white hover:text-[#e3874f]">
            Skill
          </Link>
          <Link href="#contact" className="text-white hover:text-[#e3874f]">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4`}>
        <a href="#" className="block text-white py-2 hover:text-[#e3874f]">Home</a>
        <a href="#about" className="block text-white py-2 hover:text-[#e3874f]">About</a>
        <a href="#portfolio" className="block text-white py-2 hover:text-[#e3874f]">Project</a>
        <a href="#skill" className="block text-white py-2 hover:text-[#e3874f]">Skill</a>
        <a href="#contact" className="block text-white py-2 hover:text-[#e3874f]">Contact</a>
      </div>
    </nav>
  );
}
