import React, { useState } from 'react';
// import Logo from './assets/images/logo.jpeg';
import Logo from './logo.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gray-700 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex items-center space-x-4">
          <Logo />
        </div>
        <div className="hidden md:flex flex-grow  justify-center space-x-4 ">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About Us</a>
          <a href="#services" className="text-white">Our Services</a>
          <a href="#portfolio" className="text-white">Portfolio</a>
          <a href="#blogs" className="text-white">Our Blogs</a>
          <a href="#contact" className="text-white">Contact Us</a>
        </div>
        <div >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 z-50 flex flex-col items-center justify-center p-2">
          <a href="#home" className="block text-white p-2 font-bold">Home</a>
          <a href="#about" className="block text-white p-2 font-bold">About Us</a>
          <a href="#services" className="block text-white p-2 font-bold">Our Services</a>
          <a href="#portfolio" className="block text-white p-2 font-bold">Portfolio</a>
          <a href="#blogs" className="block text-white p- font-bold">Our Blogs</a>
          <a href="#contact" className="block text-white p- font-bold">Contact Us</a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl p-7 border border-white mt-5 rounded-full  hover:text-gray-800 font-semibold hover:border-gray-800" >
             X 
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
