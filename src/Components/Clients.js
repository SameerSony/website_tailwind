import React from 'react';
import './Clients.css'; // Import the custom CSS

const clients = [
  { name: 'IKEA', src: 'IKEA.png' },
  { name: 'Swiggy', src: 'SWIGGY.png' },
  { name: 'TVS', src: 'bird_2.jpg' },
  { name: 'BP', src: 'BP.png' },
  { name: 'Nescafe', src: 'NESCAFE.png' },
  { name: 'Cashify', src: '/CASHIFY.png' },
  { name: 'Mahindra', src: 'MAHINDRA.png' },
  { name: 'MR.DIY', src: 'path/to/mrdiy-logo.png' },
  { name: 'LOFA', src: 'path/to/lofa-logo.png' },
  { name: 'Le Meridien', src: 'path/to/lemeridien-logo.png' },
  { name: 'Fashion Factory', src: 'path/to/fashionfactory-logo.png' },
  { name: 'KIA', src: 'path/to/kia-logo.png' },
  { name: 'Asian Paints', src: 'path/to/asianpaints-logo.png' },
  { name: 'Theka', src: 'path/to/theka-logo.png' },
  { name: 'MBA Chai Wala', src: 'path/to/mbachaiwala-logo.png' },
  { name: 'More...', src: 'path/to/more-logo.png' },
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
            <img src={client.src} alt={client.name} className="max-h-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
