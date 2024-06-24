import React, { useState } from 'react';
import './Components/Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import './Components/script.js';
import './Components/Clients.css'; 


import Logo from './Components/logo.js';
import Clients from './Components/Clients.js';
import TeamSection from './Components/TeamSectionAbout.js'
import Reviews from './Components/Reviews.js';


const About = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className='bg-white'>
    <header className="relative ">
          <nav className="relative z-10 bg-white bg-opacity-75 p-4 ">
              <div className="container mx-auto flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                      <div className=" w-auto">
                          <Logo />
                      </div>

                  </div>
                  <div className="hidden md:flex flex-grow justify-center space-x-4">
                      <a href="#home" className="text-gray-700">Home</a>
                      <a href="#about" className="text-gray-700">About Us</a>
                      <a href="#services" className="text-gray-700">Our Services</a>
                      <a href="#portfolio" className="text-gray-700">Portfolio</a>
                      <a href="#blogs" className="text-gray-700">Our Blogs</a>
                      <a href="#contact" className="text-gray-700">Contact Us</a>
                  </div>
                  <div>
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="text-gray-700 focus:outline-none"
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
                  <div className="fixed inset-0 z-50 bg-gray-700 bg-opacity-4 text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
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
      
      
      
      <div classname=" container mx-auto">
        <div className="bg-white text-white p-4  border-2 border-customWhite -mt-16  ml-44 mr-44">
            <div classname="w-full h-full">
                <h2 className="text-7xl font-mono   text-gray-900 mt-24 flex text-wrap ">
                Global Creative Agency: 
                </h2>
                <h2 className="text-7xl   font-mono text-gray-900 mt-24 flex text-wrap  -mt-2">
                 Shaping Success for Top Brands
                 </h2>

            </div>

            <div className='flex w-full h-auto'>
            <div className="px-4 flex w-1/2 flex-grow">
                <button 
                  type='button' 
                  className=' py-20 px-20 text-s border border-gray-700 rounded-full shadow-xs bg-transparent font-semibold mt-20 text-gray-700 transition-all duration-500 hover:bg-green-700 hover:text-black'>
                  <h2>
                  Influencers & 
                    </h2>
                    <h2>
                    Marketing
                    </h2>
                </button>
               <div className='w-1/2 bg-white p-4 ml-20 mt-32 text-gray-700 text-wrap font-mono'>
               
               Empowering brands worldwide, we're your premier full-service creative and digital agency, dedicated to delivering unparalleled success through innovative strategies and impactful solutions.
                
               </div>
                
              </div>

              
              

            </div>



            <div className='flex w-full h-auto mt-40'>
            <div className="px-4 flex w-1/2 flex-grow">
                <h1 className="text-gray-600 text-center">
                    CSQUARE MEDIA

                </h1>

                <h1 className="text-black mt-10 -ml-36 font-bold text-7xl text-center pr-10 ">
                    Our Story 

                </h1>
                
               
                
              



               

              </div>

              <div className="px-4  w-1/2 ">
              <div className='w-full bg-white p-4  -ml-40 text-gray-700  font-mono '>
               
               
                    Your brand is the lifeblood of your business. At CSQUARE MEDIA, we recognize the crucial role it plays in influencing perceptions and driving success. Our dedication to excellence and innovation allows us to develop tailored strategies that elevate your brand above the competition.
                
               </div>
              <div className='w-full bg-white p-4 -ml-40 text-gray-700 text-wrap font-mono'>
               
               
               Our experienced team of professionals offers a rich blend of expertise and creativity. Through thorough research, strategic planning, and impeccable execution, we strive to ensure your brand's message connects with your target audience.

          </div>
          <div className='w-full bg-white p-4 -ml-40 text-gray-700 text-wrap font-mono'>
               
               At CSQUARE MEDIA, we take pride in our ability to adapt to the constantly changing business and technology landscape. Our dynamic approach enables us to stay ahead of trends and deliver innovative solutions that propel your brand forward.

          </div>
          <div className='w-full bg-white p-4 -ml-40 text-gray-700 text-wrap font-mono'>
               
               
          From concept to creation, we are committed to bringing your vision to life. Whether you're launching a new product, revamping your brand identity, or expanding your digital presence, CSQUARE MEDIA is your trusted partner every step of the way.

          </div>
          <div className='w-full bg-white p-4  -ml-40 text-gray-700 text-wrap font-mono'>
               
               
          Discover the CSQUARE MEDIA advantage and unlock your brand's full potential with our expertise.

          </div>


         


        </div>

              
              

            </div>

            <div className='flex w-full h-auto '>
                <div className="w-1/3  mt-40">
                <img src='about_img1.jpg'  alt=""  className='scale-75' />
                

                </div>

                <div className="w-1/3 mt-10 ">
                <div classname="">
                <img src='about_img2.jpg'  alt=""  className=' scale-110 overflow-hidden mt-20' />
                </div>
                
                </div>

                <div className="w-1/3  mt-10 ">
                <img src='about_img3.jpg'  alt=""  className=' mt-20 ' />
                <img src='about_img4.jpg'  alt=""  className=' mt-20 ' />
                </div>
            </div>

            

            <div className='w-full h-full'>
                <div className='px-4 flex  w-1/3' >
                <img src="#" alt='' className=''         />
                

                </div>


            </div>

            <div>

            </div>
            <TeamSection />
            
            <div className=" bg-white text-black py-10 overflow-x-hidden">
      <h1 className="text-center text-4xl font-bold mb-10">OUR GLOBAL CLIENTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-lg opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={client.logo} alt={client.name} className="max-h-20" />
          </div>
        ))}
      </div>
    </div>


            <Reviews />


        </div>

      </div>

        

              







       

      



          
    </div>

      
  );
};

export default About;