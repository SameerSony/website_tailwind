// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, icon, mouseX, mouseY, containerRect }) => {
  const tiltStyle = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.2s ease-out', // Smooth transition
  };

  if (containerRect) {
    const x = mouseX - containerRect.left - containerRect.width / 2;
    const y = mouseY - containerRect.top - containerRect.height / 2;
    const rotateX = (y / containerRect.height) * 25;
    const rotateY = (x / containerRect.width) * -25;
    tiltStyle.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  return (
    <div className="relative">
      <div
        className="max-w-md w-full h-96 rounded-3xl overflow-hidden shadow-lg bg-white p-6 relative transition-transform duration-200 group hover:scale-105"
        style={tiltStyle}
      >
        <div className="flex justify-center mb-4">
          <img className="w-36 h-36" src={icon} alt={`${title} icon`} />
        </div>
        <div className="text-center mb-4">
          
          <h2 className="text-xl font-bold mb-2 text-black font-serif">{title}</h2>
          <p className="text-gray-700 text-base font-semibold font-serif">{description}</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
