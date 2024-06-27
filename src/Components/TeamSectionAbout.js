// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: 'Random_Person1.png',
    alt: 'Image 1',
    title: 'Image 1',
    description: 'This is the first image'
  },
  {
    src: 'Random_Person1.png',
    alt: 'Image 2',
    title: 'Image 2',
    description: 'This is the second image'
  },
  {
    src: 'Random_Person1.png',
    alt: 'Image 3',
    title: 'Image 3',
    description: 'This is the third image'
  },
  {
    src: 'Random_Person1.png',
    alt: 'Image 4',
    title: 'Image 4',
    description: 'This is the fourth image'
  },
  {
    src: 'Random_Person1.png',
    alt: 'Image 5',
    title: 'Image 5',
    description: 'This is the fifth image'
  }
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    delay:0,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div classname=" bg-white pr-4 pl-4">
        
        <div classname=" bg-white ">
        
        <div className=" mx-auto py-9 bg-white">
        <h2 className="text-7xl font-bold text-center mb-8 bg-clip-text bg-black text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
        OUR TEAM
      </h2>
      {/* <img src=> </img> */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black text-center">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
        </div>
    </div>
  );
};

export default ImageCarousel;
