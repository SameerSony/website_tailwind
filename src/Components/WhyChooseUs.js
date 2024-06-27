import React, { useRef, useEffect, useState } from 'react';
import './WhyChooseUs.css';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-customGray">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 font-serif text-white text-center">WHY CHOOSE US</h1>
      <div className="flex flex-col items-center gap-8 w-full px-4 md:px-8 lg:px-16">

        <div className="bg-black p-6 rounded-lg shadow-lg w-full lg:w-9/10 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-xs sm:text-sm md:text-base font-serif font-semibold mb-2 text-gray-500">CHOOSE US FOR SUCCESS IN INFLUENCER MARKETING</h2>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-2 text-gray-500 my-4">
              YOUR GUIDE IN INFLUENCER MARKETING
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-serif text-gray-500 my-4">Unlock The potential of your business with carefully curated influencers by our team</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <button type='button' className='py-1 px-4 text-xs sm:text-sm border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black my-2 sm:my-0'>
                Influencer Marketing
              </button>
              <button type='button' className='py-1 px-4 text-xs sm:text-sm border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black my-2 sm:my-0'>
                Creative Promotion
              </button>
              <button type='button' className='py-1 px-4 text-xs sm:text-sm border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black my-2 sm:my-0'>
                Business Growth Consultancy
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 p-4">
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-full border-2 border-white bg-black text-white text-lg lg:text-2xl flex justify-center items-center mr-4 transition-transform duration-500 hover:bg-white hover:text-black hover:border-gray-600">
                STEP 1
              </div>
              <div>
                <div className="text-gray-200 text-xl lg:text-2xl font-serif mb-3">Brainstorming</div>
                <p className="text-gray-200 text-xs lg:text-base font-serif">Understand, strategize & visualize success.</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-full border-2 border-white bg-black text-white text-lg lg:text-2xl flex justify-center items-center mr-4 transition-transform duration-500 hover:bg-white hover:text-black hover:border-gray-600">
                STEP 2
              </div>
              <div>
                <div className="text-gray-200 text-xl lg:text-2xl font-serif mb-3">Influence Right</div>
                <p className="text-gray-200 text-xs lg:text-base font-serif">Crafting perfect stories & engage audiences with the right influencers.</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-full border-2 border-white bg-black text-white text-lg lg:text-2xl flex justify-center items-center mr-4 transition-transform duration-500 hover:bg-white hover:text-black hover:border-gray-600">
                STEP 3
              </div>
              <div>
                <div className="text-gray-200 text-xl lg:text-2xl font-serif mb-3">Drive Engagement</div>
                <p className="text-gray-200 text-xs lg:text-base font-serif">Engage customers with unique storytelling, reaching the right audience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg w-full lg:w-9/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="p-4 lg:w-1/2">
              <h2 className="text-6xl lg:text-7xl font-serif font-bold text-gray-100">300</h2>
              <p className="text-xl lg:text-3xl font-serif font-semibold text-gray-100 mt-2">Brands Promoted</p>
              <h2 className="text-6xl lg:text-7xl font-serif font-bold text-gray-100 mt-4">4+</h2>
              <p className="text-xl lg:text-3xl font-serif font-semibold text-gray-100 mt-2">Years Experience</p>
            </div>
            <div className="p-4 lg:w-1/2">
              <h2 className="text-6xl lg:text-7xl font-serif font-bold text-gray-100">10000</h2>
              <p className="text-xl lg:text-3xl font-serif font-semibold text-gray-100 mt-2">Stories Created</p>
              <h2 className="text-6xl lg:text-7xl font-serif font-bold text-gray-100 mt-4">30+</h2>
              <p className="text-xl lg:text-3xl font-serif font-semibold text-gray-100 mt-2">Awards Achievements</p>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <img src="WhyChooseUsGroup.png" alt='' className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg w-full lg:w-9/10">
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-400">Have a project in mind?</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-100 m-10 text-center font-thin">Looking for elevating your brand visibility!</h1>
          <div className="flex justify-center mt-8">
            <Link to='/contact'>
              <button
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                type='button'
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-transform duration-300 hover:bg-white hover:text-black text-base sm:text-lg md:text-xl lg:text-2xl'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
