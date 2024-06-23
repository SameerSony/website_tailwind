
import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Components/Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import './Components/script.js';
import Navbar from './Components/Navbar.js';
import Logo from './Components/logo.js';
import HomePage from './HomePage.js';
import ServicesPage from './ServicesPage.js';
import ServicesPageCardSection from './Components/ServicesPageCardSection.js';
import Clients from './Components/Clients.js';
import Footer from './Components/Footer.js';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const clients = [
    { name: 'IKEA', logo: 'path/to/ikea-logo.png' },
    { name: 'Swiggy', logo: 'path/to/swiggy-logo.png' },
    { name: 'TVS', logo: 'path/to/tvs-logo.png' },
    { name: 'BP', logo: 'path/to/bp-logo.png' },
    { name: 'Nescafe', logo: 'path/to/nescafe-logo.png' },
    { name: 'Cashify', logo: 'path/to/cashify-logo.png' },
    { name: 'Mahindra', logo: 'path/to/mahindra-logo.png' },
    { name: 'MR.DIY', logo: 'path/to/mrdiy-logo.png' },
    { name: 'LOFA', logo: 'path/to/lofa-logo.png' },
    { name: 'Le Meridien', logo: 'path/to/lemeridien-logo.png' },
    { name: 'Fashion Factory', logo: 'path/to/fashionfactory-logo.png' },
    { name: 'KIA', logo: 'path/to/kia-logo.png' },
    { name: 'Asian Paints', logo: 'path/to/asianpaints-logo.png' },
    { name: 'Theka', logo: 'path/to/theka-logo.png' },
    { name: 'MBA Chai Wala', logo: 'path/to/mbachaiwala-logo.png' },
    { name: 'More...', logo: 'path/to/more-logo.png' },
  ];


 

  useEffect(() => {
    const handleMouseMove = (event) => {
      const button = buttonRef.current;
      if (button && isHovered) {
        const { clientX, clientY } = event;
        const { left, top, width, height } = button.getBoundingClientRect();
        const moveX = (clientX - (left + width / 2)) * 0.1;
        const moveY = (clientY - (top + height / 2)) * 0.1;
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const button = buttonRef.current;
    if (button) {
      button.style.transform = 'translate(0, 0)';
    }
  };





  return (
    <div classname="bg-white">
    <header className="relative h-auto">

          <nav className="relative z-10 bg-black  p-4">
              <div className="container mx-auto flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <div className=" w-auto">
                          <Logo />
                      </div>

                  </div>
                  <div className="hidden md:flex flex-grow justify-center space-x-4">
                      <a href={<HomePage />} className="text-white">Home</a>
                      <a href={<ServicesPage />} target={<ServicesPage />} className="text-white">About Us</a>
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
                                      d="M6 18L18 6M6 6l12 12" />
                              ) : (
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7" />
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
                                  className="w-full p-2 mb-4 rounded bg-gray-900 text-white focus:outline-none rounded-full -mt-20 "
                                  placeholder="Search keyword" />
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
      
      <div classname="container mx-auto">
        
        <div className=" bg-black text-white p-4    flex flex-row">
        <div classname="w-1/3 h-auto">
                <h2 className=" text-white  text-6xl font-semibold">
                GUIDANCE
                </h2>
                <h2 className=" text-white  text-6xl font-semibold ">
                WE 
                </h2>
                <h2 className=" text-white  text-6xl  font-semibold">
                    PROVIDE
                </h2>
                

            </div>
            <div classname=" w-2/3 h-auto ">
            <h2 className="text-white font-mono text-4xl text-wrap ml-40 mt-32">
                With every single one of our clients we bring forth a deep passion for creative roblem solving innovations forward thinking brands boundaries
            </h2>
            </div>

        </div>

        <div classname="container mx-auto">
            <div classname="bg-black p-4 flex flex-row">
                <div classname="w-1/3 h-auto bg-black flex flex-row">
                <div className="bg-black p-6 rounded-lg ">
                   
                   
                   
                   
                    <ServicesPageCardSection />

                   
                   
                   
                   
                   
                    <div className=" bg-black text-white py-10 overflow-x-hidden">
                        <h1 className="text-center text-4xl font-bold mb-10">OUR GLOBAL CLIENTS</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
                            {clients.map((client, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center p-4 bg-black  rounded-lg opacity-0 animate-fade-in"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <img src={client.logo} alt={client.name} className="max-h-20" />
                                    </div>
                                ))}
                         </div>
                    </div>



                                    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-black">
                    
                    <div className="flex flex-col items-center gap-8 w-full px-4 md:px-8 lg:px-16">
                        
                        

                        <div className="bg-black p-6 rounded-lg shadow-lg w-9/10 h-9/10">
                        <div className="text-2xl font-semibold mb-4 ml-96 mr-96 text-center border-2 border-gray-500 rounded-full text-white font-serif">Realize Your Potential </div>
                        <h1 className="text-8xl text-white m-10 text-center  font-normal">
                            We Would Love To Hear More About Your Project !
                        </h1>
                        <div className="px-4 ml-72 -mr-48 mt-32 mb-32">
                            <button 
                            ref={buttonRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            type='button' 
                            className='w-40 h-40 ml-80 justify-center border border-gray-500 rounded-full shadow-xs bg-transparent font-semibold text-white transition-transform duration-300 hover:bg-white hover:text-black items-center text-xl'>
                            Contact Us
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>


                    
                    
                 </div>
                 <Footer />

        


        

                </div>
                



        

            </div>

        </div>



         </div>
          
          
          
          
          
          </div>
  );
};

export default Header;
