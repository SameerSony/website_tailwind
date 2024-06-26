import React from 'react';
import './Clients.css'; // Import the custom CSS

const clients = [
  { name: 'IKEA', logo: 'IKEA.png' },
  { name: 'Swiggy', logo: '/public/SWIGGY.png' },
  { name: 'TVS', logo: '/public/bird_2.jpg' },
  { name: 'BP', logo: '/public/BP.png' },
  { name: 'Nescafe', logo: '/public/NESCAFE.png' },
  { name: 'Cashify', logo: '/public/CASHIFY.png' },
  { name: 'Mahindra', logo: '/public/MAHINDRA.png' },
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

const Gallery = () => {
  return (
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
  );
};

export default Gallery;
