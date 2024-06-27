import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Components/logo.js';
import Clients from './Components/Clients.js';
import TeamSection from './Components/TeamSectionAbout';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer.js';

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clients = [
    { name: 'IKEA', src: 'IKEA.png' },
  { name: 'Swiggy', src: 'SWIGGY.png' },
  { name: 'TVS', src: 'bird_2.jpg' },
  { name: 'BP', src: 'BP.png' },
  { name: 'Nescafe', src: 'NESCAFE.png' },
  { name: 'Cashify', src: 'CASHIFY.png' },
  { name: 'Mahindra', src: 'MAHINDRA.png' },
  { name: 'MR.DIY', src: 'MR.DIY.png' },
  { name: 'LOFA', src: 'LOFA.png' },
  { name: 'Le Meridien', src: 'path/to/lemeridien-logo.png' },
  { name: 'Fashion Factory', src: 'FASHION_FACTORY.png' },
  { name: 'KIA', src: 'KIA.png' },
  { name: 'Asian Paints', src: 'NPM.png' },
  { name: 'Theka', src: 'THEKA.png' },
  { name: 'MBA Chai Wala', src: 'MBA_CHAI.png' },
  { name: 'More...', src: 'NPM.png' },
  ];

  return (
    <div className='bg-white'>
      <header className="relative">
        <nav className="relative z-10 bg-black py-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-auto">
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
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white text-white p-4 border-2 border-customWhite -mt-16 md:ml-20 lg:ml-44 md:mr-20 lg:mr-44">
          <div className="w-full h-full">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-mono text-gray-900 mt-24">
              Global Creative Agency:
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-mono text-gray-900 mt-2">
              Shaping Success for Top Brands
            </h2>
          </div>
          <div className='flex flex-col md:flex-row w-full h-auto mt-10 md:mt-20 lg:mt-40'>
            <div className="flex-1 px-4 flex flex-col items-center md:items-start">
              <button
                type='button'
                className='py-4 px-8 text-sm border border-gray-700 rounded-full shadow-xs bg-transparent font-semibold mt-10 md:mt-20 text-gray-700 transition-all duration-500 hover:bg-green-700 hover:text-black'>
                <Link to='/portfolio'>
                  <h2>Influencers &</h2>
                  <h2>Marketing</h2>
                </Link>
              </button>
              <div className='bg-white p-4 mt-4 md:ml-10 md:mt-20 text-gray-700 font-mono'>
                Empowering brands worldwide, we're your premier full-service creative and digital agency, dedicated to delivering unparalleled success through innovative strategies and impactful solutions.
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full h-auto mt-10 md:mt-20 lg:mt-40'>
            <div className="flex-1 px-4 flex flex-col items-center md:items-start">
              <h1 className="text-gray-600 text-center md:text-left">CSQUARE MEDIA</h1>
              <h1 className="text-black mt-10 text-3xl md:text-5xl lg:text-7xl font-bold text-center md:text-left">
                Our Story
              </h1>
            </div>
            <div className="flex-1 px-4">
              <div className='bg-white p-4 text-gray-700 font-mono'>
                Your brand is the lifeblood of your business. At CSQUARE MEDIA, we recognize the crucial role it plays in influencing perceptions and driving success. Our dedication to excellence and innovation allows us to develop tailored strategies that elevate your brand above the competition.
              </div>
              <div className='bg-white p-4 text-gray-700 font-mono'>
                Our experienced team of professionals offers a rich blend of expertise and creativity. Through thorough research, strategic planning, and impeccable execution, we strive to ensure your brand's message connects with your target audience.
              </div>
              <div className='bg-white p-4 text-gray-700 font-mono'>
                At CSQUARE MEDIA, we take pride in our ability to adapt to the constantly changing business and technology landscape. Our dynamic approach enables us to stay ahead of trends and deliver innovative solutions that propel your brand forward.
              </div>
              <div className='bg-white p-4 text-gray-700 font-mono'>
                From concept to creation, we are committed to bringing your vision to life. Whether you're launching a new product, revamping your brand identity, or expanding your digital presence, CSQUARE MEDIA is your trusted partner every step of the way.
              </div>
              <div className='bg-white p-4 text-gray-700 font-mono'>
                Discover the CSQUARE MEDIA advantage and unlock your brand's full potential with our expertise.
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full h-auto'>
            <div className="w-full md:w-1/3 mt-10 lg:mt-40">
              <img src='about_img1.jpg' alt="" className='scale-75 mx-auto' />
            </div>
            <div className="w-full md:w-1/3 mt-10 lg:mt-10">
              <img src='about_img2.jpg' alt="" className='scale-110 overflow-hidden mt-10 lg:mt-20 mx-auto' />
            </div>
            <div className="w-full md:w-1/3 mt-10 lg:mt-10">
              <img src='about_img3.jpg' alt="" className='mt-10 lg:mt-20 mx-auto' />
              <img src='about_img4.jpg' alt="" className='mt-10 lg:mt-20 mx-auto' />
            </div>
          </div>
          <div className='w-full h-full'>
            <div className='px-4 flex w-1/3'>
              <img src="#" alt='' className='' />
            </div>
          </div>
          <TeamSection />
          <div className="bg-white text-black py-10 overflow-x-hidden">
            <h1 className="text-center text-4xl font-bold mb-10">OUR GLOBAL CLIENTS</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center p-4 bg-white rounded-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img src={client.src} alt={client.name} className="max-h-20" />
                </div>
              ))}
            </div>
          </div>
          <Reviews />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
