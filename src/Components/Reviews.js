import React, { useRef, useEffect, useState } from 'react';
import './WhyChooseUs.css';
import { Button } from "@material-tailwind/react";

const Reviews = () => {
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

  const handleMouseLeave = () => {
    setIsHovered(false);
    const button = buttonRef.current;
    if (button) {
      button.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white">
      <h1 className="text-6xl font-bold mb-8 font-serif text-gray-700">Reviews</h1>
      <div className="flex flex-col items-center gap-8 w-full px-4 md:px-8 lg:px-16">
        
        <div className="bg-white rounded-lg">
          <div className="flex flex-row gap-4 ml-32">
            <div className="pr-8 bg-white rounded-lg">
              <h2 className="text-7xl font-serif font-bold mb-2 -ml-10 mt-20 flex flex-row text-gray-700">300</h2>
              <h4 className="text-3xl font-serif font-semibold mb-2 -ml-10 flex flex-row text-gray-700 my-8 pb-10">
                Brands 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10 -mt-14 flex flex-row text-gray-700 my-8"> 
              Promoted
              </h4>
              <h4 className="text-7xl font-serif font-bold mb-2 flex -ml-10 flex-row text-gray-700 my-8 pl-6 pt-6"> 
                4+
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10 flex flex-row text-gray-700 my-8"> 
                Years 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10 -mt-4 flex flex-row text-gray-700 my-8"> 
               Experience
              </h4>
            </div>
            <div className="pr-8 bg-white p-4 rounded-lg">
              <h2 className="text-7xl font-serif font-bold mb-2 mt-16 flex flex-row text-gray-700">10000</h2>
              <h4 className="text-3xl font-serif font-semibold mb-2 flex flex-row text-gray-700 my-8 pb-10">
                Stories 
              </h4>
              <h4 className="text-3xl font-serif font-semibold mb-2 -mt-14 flex flex-row text-gray-700 my-8 pb-10">
               Created
              </h4>
              <h4 className="text-7xl font-serif font-bold mb-2 -mt-4 flex flex-row text-gray-700 my-8 pl-6 pt-6"> 
                30+
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 flex flex-row text-gray-700 my-8"> 
                Awards 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -mt-4 flex flex-row text-gray-700 my-8"> 
                 Achievements
              </h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-9/10 h-9/10">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-700">Have a project in mind? </h3>
          <h1 className="text-8xl text-gray-700 m-10 text-center font-thin font-normal">
            Looking for elevating your brand visibility!
          </h1>
          <div className="px-4 ml-72 -mr-48 mt-32 mb-32">
            <button 
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              type='button' 
              className='w-40 h-40 border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-transform duration-300 hover:bg-white hover:text-black items-center text-xl'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
