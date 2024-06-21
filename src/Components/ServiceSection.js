// src/components/ServicesSection.js
import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Influencer Marketing',
    description: 'X Factor army know exactly how to discover and track the right influencer for you to maximize engagement and visibility.',
    icon: 'Influencer_Marketing.png', // Replace with your icon paths
  },
  {
    title: 'Business Growth Consultancy',
    description: 'Unlock your business’s full potential with tailored strategies and expert guidance.',
    icon: 'Business_Growth_Consultancy.png',
  },
  {
    title: 'Social Media Management',
    description: 'Transforming brands through strategic social media (Insta, YT and FB) and management tailored for maximum impact.',
    icon: 'Social_Media_Management.png',
  },
  {
    title: 'Marketing Campaign / New Launches / Event Promotion',
    description: 'Empowering brands through expertly crafted campaigns, event launches, and dynamic marketing strategies.',
    icon: 'Marketing_Campaign.png',
  },
  {
    title: 'IT Solutions',
    description: 'Revolutionize your business with bespoke IT solutions, driving efficiency, innovation, and growth in a dynamic digital landscape.',
    icon: 'IT_Solutions.png',
  },
  {
    title: 'Creative Instagram reels for Business / Corporate Events / Weddings',
    description: 'Unleash creativity with dynamic shots, vibrant edits, and engaging storytelling. Elevate your brand with captivating videos.',
    icon: 'Creative_Instagram_Reels_For_Business.png',
  },
];

const ServicesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const containerRect = containerRef.current?.getBoundingClientRect();

  return (

    
    <div
      className=" bg-customGray text-white py-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
        OUR SERVICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-4">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            containerRect={containerRect}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
