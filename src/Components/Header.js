import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import './script.js';
import Navbar from './Navbar.js';
import Logo from './logo.js';
import HomePage from '../HomePage.js';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute w-full h-full object-cover hidden md:block"
          src="desktop_background_video.mp4"
          autoPlay
          loop
          muted
        />
        <div>
      <button type='button' class='py-2.5 px-6 text-sm border border-gray-300 rounded-full shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50 z-20'>Outline</button>
      </div>
        <video
          className="absolute w-full h-full object-cover block md:hidden"
          src="mobile_background_video.mp4"
          autoPlay
          loop
          muted
        />
        <div>
      <button type='button' class='py-2.5 px-6 text-sm border border-gray-300 rounded-full shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50 z-20'>Outline</button>
      </div>
      </div>
      <nav className="relative z-10 bg-black bg-opacity-75 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className=" w-auto">
            <Logo />
            </div>
            
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-4">
            <a href={<HomePage />} target={<HomePage />} className="text-white">Home</a>
            <a href="#about" className="text-white">About Us</a>
            <a href="#services" className="text-white">Our Services</a>
            <a href="#portfolio" className="text-white">Portfolio</a>
            <a href="#blogs" className="text-white">Our Blogs</a>
            <a href="#contact" className="text-white">Contact Us</a>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
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
          <div className="fixed inset-0 z-50 bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
            <div className="flex flex-col justify-between space-y-8 md:hidden">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#home" className="text-2xl">Home</a>
                <a href="#about" className="text-2xl">About Us</a>
                <a href="#services" className="text-2xl">Our Services</a>
                <a href="#portfolio" className="text-2xl">Portfolio</a>
                <a href="#blogs" className="text-2xl">Our Blogs</a>
                <a href="#contact" className="text-2xl">Contact Us</a>
              </nav>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl focus:outline-none"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <div className="hidden md:flex flex-col justify-between space-y-8">
              <div>
                <Logo />
              </div>
              <div className="hidden md:block">
                <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Instagram</a></li>
                  <li><a href="#" className="hover:underline">Facebook</a></li>
                  <li><a href="#" className="hover:underline">Youtube</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 items-baseline border-spacing-1 border-orange-800 font-bold">
                <p className="text-center">About</p>
                <p className="text-center">Contact</p>
                <p className="text-center">Career</p>
                <p className="text-center">Blog</p>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-between space-y-8 border border-gray-700 border-spacing-1">
              <div className="flex flex-col items-center space-y-4"></div>
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#home" className="text-5xl pl-4 pt-2 pb-2">Home</a>
                <a href="#about" className="text-5xl pl-4 pt-2 pb-2">About Us</a>
                <a href="#services" className="text-5xl pl-4 pt-2 pb-2">Our Services</a>
                <a href="#portfolio" className="text-5xl pl-4 pt-2 pb-2">Portfolio</a>
                <a href="#blogs" className="text-5xl pl-4 pt-2 pb-2">Our Blogs</a>
                <a href="#contact" className="text-5xl pl-4 pt-2 pb-2">Contact Us</a>
              </nav>
              <div className="mean-container">
                <div className="mean-push float-left w-full p-0 m-0 clear-both"></div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-between space-y-8 border border-gray-700 border-collapse">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl focus:outline-none"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <div className="mt-[10vh] flex flex-col items-center">
                <input
                  type="text"
                  className="w-full p-2 mb-4 rounded bg-gray-900 text-white focus:outline-none rounded-full"
                  placeholder="Search keyword"
                />
              </div>
              <div className="hidden md:block">
                <h2 className="text-xl font-bold mb-2">Get in touch</h2>
                <p className="mb-1">+91 9226539462</p>
                <p className="mb-1">nagpurxfactorb@gmail.com</p>
                <p>Khamla Square, Nagpur, Maharashtra, India</p>
              </div>
              <div className="flex flex-col items-center space-y-4"></div>
            </div>
          </div>
        )}
      </nav>
      

      
    </header>
  );
};

export default Header;
