import React from 'react';
import './Clients.css'; // Import the custom CSS

const clients = [
  { name: 'IKEA', src: 'IKEA.png' },
  { name: 'Swiggy', src: 'SWIGGY.png' },
  { name: 'TVS', src: 'bird_2.jpg' },
  { name: 'BP', src: 'BP.png' },
  { name: 'Nescafe', src: 'NESCAFE.png' },
  { name: 'Cashify', src: 'CASHIFY.png' },
  { name: 'Mahindra', src: 'MAHINDRA.png' },
  { name: 'MR.DIY', src: 'MR.DIY.png' },
  { name: 'LOFA', src: 'LOFA.png' },
  { name: 'Le Meridien', src: 'XERO_DEGREE.png' },
  { name: 'Fashion Factory', src: 'FASHION_FACTORY.png' },
  { name: 'KIA', src: 'KIA.png' },
  { name: 'Asian Paints', src: 'TVS.png' },
  { name: 'Theka', src: 'THEKA.png' },
  { name: 'MBA Chai Wala', src: 'MBA_CHAI.png' },
  { name: 'More...', src: 'CAFFEINE.png' },
];

const Gallery = () => {
  return (
    <div className=" bg-customGray text-white py-10 overflow-x-hidden">
      <h1 className="text-center text-4xl font-bold mb-10">OUR GLOBAL CLIENTS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-screen-lg">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-customGray rounded-lg opacity-0 animate-fade-in scale-150"
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
