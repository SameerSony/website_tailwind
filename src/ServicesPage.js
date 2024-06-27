import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Components/logo.js';
import ServicesPageCardSection from './Components/ServicesPageCardSection.js';
import Clients from './Components/Clients.js';
import Footer from './Components/Footer.js';

const ServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const clients = [
    { name: 'Nescafe', src: 'NESCAFE.png' },
    { name: 'Cashify', src: 'CASHIFY.png' },
    { name: 'Mahindra', src: 'MAHINDRA.png' },
    { name: 'MR.DIY', src: 'MR.DIY.png' },
    { name: 'LOFA', src: 'LOFA.png' },
    { name: 'Le Meridien', src: 'XERO_DEGREE.png' },
    { name: 'Fashion Factory', src: 'FASHION_FACTORY.png' },
    { name: 'KIA', src: 'KIA.png' },
    { name: 'Asian Paints', src: 'TVS.png' },
    { name: 'Theka', src: 'THEKA.png' },
    { name: 'MBA Chai Wala', src: 'MBA_CHAI.png' },
    { name: 'More...', src: 'CAFFEINE.png' },
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
    <div className="bg-white w-full">
      <header className="relative w-full h-auto">
      <nav className="relative z-10 bg-black h-[8vh]">
  <div className="container mx-auto flex justify-between items-center h-full">
    <div className="flex items-center space-x-4">
      <div className="w-auto h-full flex items-center">
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </div>
    <div className="hidden md:flex flex-grow justify-center space-x-4 text-center">
      <Link to="/" className="text-white font-serif">Home</Link>
      <Link to="/about" className="text-white font-serif">About Us</Link>
      <Link to="/services" className="text-white font-serif">Our Services</Link>
      <Link to="/portfolio" className="text-white font-serif">Portfolio</Link>
      <Link to="/contact" className="text-white font-serif">Contact Us</Link>
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
          <Link to="/" className="text-2xl">Home</Link>
          <Link to="/about" className="text-2xl">About Us</Link>
          <Link to="/services" className="text-2xl">Our Services</Link>
          <Link to="/portfolio" className="text-2xl">Portfolio</Link>
          <Link to="/contact" className="text-2xl">Contact Us</Link>
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
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <div className="hidden md:block">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/mr.rahuldongre/?igsh=bnV4Z2lwbWthMmsw" target='_blank' className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-4 items-baseline border-spacing-1 border-orange-800 font-bold">
          <Link to='/about' className="text-center">About</Link>
          <Link to='/contact' className="text-center">Contact</Link>
          <Link to='/services' className="text-center">Career</Link>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-between space-y-8 border border-gray-700 border-spacing-1">
        <div className="flex flex-col items-center space-y-4"></div>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="text-5xl pl-4 pt-2 pb-2">Home</Link>
          <Link to="/about" className="text-5xl pl-4 pt-2 pb-2">About Us</Link>
          <Link to="/services" className="text-5xl pl-4 pt-2 pb-2">Our Services</Link>
          <Link to="/portfolio" className="text-5xl pl-4 pt-2 pb-2">Portfolio</Link>
          <Link to="/contact" className="text-5xl pl-4 pt-2 pb-2">Contact Us</Link>
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
          <p className="mb-1">+91 XXXXXXXXXXXXX</p>
          <p className="mb-1">csquare_media@gmail.com</p>
          <p>Nagpur, Maharashtra, India</p>
        </div>
        <div className="flex flex-col items-center space-y-4"></div>
      </div>
    </div>
  )}
</nav>

      </header>

      <div className="w-full">
        <div className="bg-black text-white p-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-auto text-center md:text-left">
            <h2 className="text-white text-4xl md:text-6xl font-semibold">
              GUIDANCE
            </h2>
            <h2 className="text-white text-4xl md:text-6xl font-semibold">
              WE
            </h2>
            <h2 className="text-white text-4xl md:text-6xl font-semibold">
              PROVIDE
            </h2>
          </div>
          <div className="w-full md:w-2/3 h-auto text-center md:text-left">
            <h2 className="text-white font-mono text-2xl md:text-4xl text-wrap mt-8 md:ml-40 md:mt-32">
              With every single one of our clients we bring forth a deep passion for creative problem solving innovations forward thinking brands boundaries
            </h2>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-black p-4 flex flex-col">
            <div className="h-auto bg-black flex flex-col">
              <div className="bg-black p-6 rounded-lg">
                <ServicesPageCardSection />
                <div className="bg-black text-white py-10 overflow-x-hidden">
                  <h1 className="text-center text-4xl font-bold mb-10">OUR GLOBAL CLIENTS</h1>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center p-4 bg-black rounded-lg opacity-0 animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <img src={client.src} alt={client.name} className="max-h-20" />
                      </div>
                    ))}
                  </div>
                </div>
                    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-black">
                        <div className="flex flex-col items-center gap-8 w-full px-4 md:px-8 lg:px-16">
                            <div className="bg-black p-6 rounded-lg shadow-lg w-full h-full">
                            <div className="text-2xl font-semibold mb-4 text-center border-2 border-gray-500 rounded-full text-white font-serif">Realize Your Potential</div>
                            <h1 className="text-5xl md:text-8xl text-white m-10 text-center font-normal">
                                We Would Love To Hear More About Your Project!
                            </h1>
                            <div className="flex justify-center mt-8 md:mt-32 mb-32">
                                <button
                                ref={buttonRef}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                type='button'
                                className='w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border border-gray-500 rounded-full shadow-xs bg-transparent font-semibold text-white transition-transform duration-300 hover:bg-white hover:text-black text-lg md:text-xl'>
                                Contact Us
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

              </div>
             
            </div>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
