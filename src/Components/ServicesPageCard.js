// Card.js
import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 flex-1">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc ml-4 text-black">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
