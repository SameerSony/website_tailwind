import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';
import TeamSection from './Components/TeamSectionHome';
import Clients from './Components/ClientsGrayBg';
import WhyChooseUs from './Components/WhyChooseUs';
import Logo from './Components/logo';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <header className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute w-full h-full object-cover hidden md:block"
            src="desktop_background_video.mp4"
            autoPlay
            loop
            muted
          />
          <video
            className="absolute w-full h-full object-cover block md:hidden"
            src="mobile_background_video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <nav className="relative z-10 bg-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-auto">
                <Logo />
              </div>
            </div>
            <div className="hidden md:flex flex-grow justify-center space-x-4">
              <Link to="/" className="text-white">Home</Link>
              <Link to="/about" className="text-white">About Us</Link>
              <Link to="/services" className="text-white">Our Services</Link>
              <Link to="/portfolio" className="text-white">Portfolio</Link>
              <Link to="/contact" className="text-white">Contact Us</Link>
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
              {/* Mobile menu */}
            </div>
          )}
        </nav>
      </header>
        <div className='w-full bg-customGray flex flex-row'>

        <div className='  bg-customGray justify-center'>
        <img src='Brand_Icon.svg' alt='Brand ' className=' scale-50 '></img>
        
      {/* Button */}
      <div className="flex justify-center mt-4">
        <div className='px-10 py-4  rounded-full shadow-md bg-white scale-75 '>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black  font-serif px-9 py-3 rounded-full shadow-md hover:bg-orange-600 scale-110"
          style={{
            backgroundImage: 'url(/path/to/I_am_a_brand.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          I'M A BRAND
        </button>
        </div>
       
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <h2 className="text-xl mb-4">Do you want to discuss your Influencer Marketing needs?</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">BRAND/COMPANY NAME</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your brand/company name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">PHONE</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter the contact number" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">EMAIL ID</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email ID" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CITY</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your city name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">YOUR MARKETING BUDGET</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your marketing budget" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">TELL US MORE ABOUT YOUR REQUIREMENT</label>
                <textarea className="w-full p-2 border rounded" placeholder="Describe your business"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
            </form>
          </div>
        </div>
      )}


      </div>



      <div className='  bg-customGray justify-center'>
        <img src='Influencer.png' alt='Brand ' className=' h-auto max-w-44 mt-20 '></img>
        
      {/* Button */}
      <div className="flex justify-center mt-4">
        <div className='px-10 py-4  rounded-full shadow-md bg-white '>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black px-8 py-2 rounded-full shadow-md hover:bg-orange-600"
          style={{
            backgroundImage: 'url(/path/to/I_am_a_brand.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          I'M A BRAND
        </button>
        </div>
       
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              &times;
            </button>
            <h2 className="text-xl mb-4">Do you want to discuss your Influencer Marketing needs?</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">BRAND/COMPANY NAME</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your brand/company name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">PHONE</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter the contact number" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">EMAIL ID</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email ID" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">CITY</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your city name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">YOUR MARKETING BUDGET</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your marketing budget" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">TELL US MORE ABOUT YOUR REQUIREMENT</label>
                <textarea className="w-full p-2 border rounded" placeholder="Describe your business"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
            </form>
          </div>
        </div>
      )}


      </div>

        </div>
      


      <ServicesSection />
      <Clients />
      <TeamSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default HomePage;
