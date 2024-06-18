// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, icon, mouseX, mouseY, containerRect }) => {
  const tiltStyle = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  };

  if (containerRect) {
    const x = mouseX - containerRect.left - containerRect.width / 2;
    const y = mouseY - containerRect.top - containerRect.height / 2;
    const rotateX = (y / containerRect.height) * 25;
    const rotateY = (x / containerRect.width) * -25;
    tiltStyle.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4 transition-transform duration-200"
      style={tiltStyle}
    >
      <div className="flex justify-center mb-4">
        <img className="w-24 h-24" src={icon} alt={`${title} icon`} />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
