import React, { useRef, useEffect, useState } from 'react';
import './WhyChooseUs.css';
import { Button } from "@material-tailwind/react";
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
      <h1 className="text-6xl font-bold mb-8 font-serif text-white">WHY CHOOSE US</h1>
      <div className="flex flex-col items-center gap-8 w-full px-4 md:px-8 lg:px-16">
        
        <div className="bg-black p-6 rounded-lg shadow-lg w-9/10 h-9/10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-500"></h3>
          <div className="flex flex-row gap-4">
            <div className="w-1/3 pr-8 bg-black p-4 rounded-lg">
              <h2 className="text-xs font-serif font-semibold mb-2 flex flex-row text-gray-500">CHOOSE US FOR SUCCESS IN INFLUENCER MARKETING</h2>
              <h4 className="text-4xl font-serif font-semibold mb-2 flex flex-row text-gray-500 my-8">
                YOUR GUIDE IN INFLUENCER MARKETING
              </h4>
              <h4 className="text-xl font-serif font-semibold mb-2 flex flex-row text-gray-500 my-8 pl-6 pt-6"> 
              Unlock The potential of your business with carefully curated influencers by our team
              </h4>
              <div className="flex items-center mb-0 flex-row pt-6">
                <div className="px-4"> 
                  <button 
                    type='button' 
                    className='py-1 px-4 text-xs border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black flex flex-row'>
                    Influencer Marketing
                  </button>
                </div>
                <div className="px-4"> 
                  <button 
                    type='button' 
                    className='py-1 px-4 text-xs border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black'>
                    Creative Promotion
                  </button>
                </div>
              </div>
              <div className="px-4">
                <button 
                  type='button' 
                  className='py-1 px-4 text-xs border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-all duration-500 hover:bg-white hover:text-black'>
                  Business Growth Consultancy
                </button>
              </div>
            </div>
            <div className="bg-black pb-4 pt-4 pl-8 rounded-lg pr-10">
              <div className="flex items-center mb-4 pl-8">
                <div className="flex justify-center items-center w-40 h-40 rounded-full border-2 font-mono border-white bg-black text-white text-2xl mr-4 hover:bg-white transition-flex-grow duration-500 hover:grow hover:text-black hover:border-gray-600">
                  STEP 1
                </div>
                <div>
                  <div className="text-gray-200 flex flex-col text-4xl mb-3 font-serif">
                    Brianstorming
                  </div>
                  <div className="text-gray-200 text-m flex flex-col text-wrap font-semibold font-serif">
                    Understand, strategize & visualize success. 
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4 pl-8">
                <div className="flex justify-center items-center w-40 h-40 rounded-full border-2 font-mono border-white bg-black text-white text-2xl mr-4 hover:bg-white transition-flex-grow duration-500 hover:grow hover:text-black hover:border-gray-600">
                  STEP 2
                </div>
                <div>
                  <div className="text-gray-200 flex flex-row text-4xl mb-3 font-serif">
                    Influence Right
                  </div>
                  <div className="text-gray-200 text-m flex flex-col text-wrap font-semibold font-serif">
                    Crafting perfect stories & 
                  </div>
                  <div className="text-gray-200 text-m flex flex-col text-wrap font-semibold font-serif">
                    engage audiences with the right influencers
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4 pl-8">
                <div className="flex justify-center items-center w-40 h-40 rounded-full border-2 font-mono border-white bg-black text-white text-2xl mr-4 hover:bg-white transition-flex-grow duration-500 hover:grow hover:text-black hover:border-gray-600">
                  STEP 3
                </div>
                <div>
                  <div className="text-gray-200 flex flex-col text-4xl mb-3 font-serif">
                    Drive Engagement
                  </div>
                  <div className="text-gray-200 text-m flex flex-col text-wrap font-semibold font-serif">
                    Engage customers with unique storytelling, 
                  </div>
                  <div className="text-gray-200 text-m flex flex-col text-wrap font-semibold font-serif">
                    reaching the right audience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg w-9/10 h-9/10">
          <div className="flex flex-row gap-4 ml-32">
            <div className="pr-8 bg-black rounded-lg">
              <h2 className="text-7xl font-serif font-bold mb-2 -ml-10 mt-20 flex flex-row text-gray-100">300</h2>
              <h4 className="text-3xl font-serif font-semibold mb-2 -ml-10 flex flex-row text-gray-100 my-8 pb-10">
                Brands 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10  -mt-14 flex flex-row text-gray-100 my-8"> 
              Promoted
              </h4>
              <h4 className="text-7xl font-serif font-bold mb-2 flex -ml-10 flex-row text-gray-100 my-8 pl-6 pt-6"> 
                4+
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10 flex flex-row text-gray-100 my-8"> 
                Years 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -ml-10 -mt-4 flex flex-row text-gray-100 my-8"> 
               Experience
              </h4>
            </div>
            <div className="pr-8 bg-black p-4 rounded-lg">
              <h2 className="text-7xl font-serif font-bold mb-2 mt-16 flex flex-row text-gray-100">10000</h2>
              <h4 className="text-3xl font-serif font-semibold mb-2 flex flex-row text-gray-100 my-8 pb-10">
                Stories 
              </h4>
              <h4 className="text-3xl font-serif font-semibold mb-2 -mt-14 flex flex-row text-gray-100 my-8 pb-10">
               Created
              </h4>
              <h4 className="text-7xl font-serif font-bold mb-2 -mt-4 flex flex-row text-gray-100 my-8 pl-6 pt-6"> 
                30+
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 flex flex-row text-gray-100 my-8"> 
                Awards 
              </h4>
              <h4 className="text-3xl font-serif font-bold mb-2 -mt-4 flex flex-row text-gray-100 my-8"> 
                 Achievements
              </h4>
            </div>
            <div className="w-1/2 bg-black p-4 rounded-lg ml-20 mr-20">
              <img src="WhyChooseUsGroup.png" alt='' className="w-full h-full">
              </img>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg w-9/10 h-9/10">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-400">Have a project in mind? </h3>
          <h1 className="text-8xl text-gray-100 m-10 text-center font-thin font-normal">
            Looking for elevating your brand visibility!
          </h1>
          <div className="px-4 ml-64 pl-auto mt-32 mb-32">
          <Link to='/contact'>
            <button 
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              type='button' 
              className='w-40 h-40 border border-gray-300 rounded-full shadow-xs bg-transparent font-semibold text-gray-400 transition-transform duration-300 hover:bg-white hover:text-black items-center text-xl'>
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
