import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Components/Footer';
import Logo from './Components/logo.js';

const PortfolioPage = () => {
  const [images, setImages] = useState([
    'media_coverage1.jpg',
    'media_coverage2.jpg',
    'media_coverage1.jpg',
    'media_coverage1.jpg',
  ]);
  const [imageInput, setImageInput] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Change this to control admin access
  const [isOpen, setIsOpen] = useState(false);
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

  const settings = {
    dots: true,
    infinite: images.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: images.length > 3,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: images.length > 2,
          autoplay: images.length > 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: images.length > 1,
          autoplay: images.length > 1,
        }
      }
    ]
  };

  const addImage = () => {
    if (imageInput) {
      setImages([...images, imageInput]);
      setImageInput('');
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageInput(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="fixed w-full z-50">
        <nav className="relative z-10 bg-black h- py-6">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center space-x-4">
              <div className=" w-auto ">
                <Link to='/'>
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-grow justify-center space-x-4 text-center">
              <Link to="/" className="text-white font-serif">Home</Link>
              <Link to="/about" className="text-white font-serif">About Us</Link>
              <Link to="/services" className="text-white font-serif">Our Services</Link>
              <Link to="/portfolio" className="text-white font-serif">Portfolio</Link>
              <Link to="/contact" className="text-white font-serif">Contact Us</Link>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
              <div className="flex flex-col justify-between space-y-8 md:hidden">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-2xl">Home</Link>
                  <Link to="/about" className="text-2xl">About Us</Link>
                  <Link href="/services" className="text-2xl">Our Services</Link>
                  <Link href="/portfolio" className="text-2xl">Portfolio</Link>
                  <Link href="/contact" className="text-2xl">Contact Us</Link>
                </nav>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl focus:outline-none"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <div className="hidden md:flex flex-col justify-between space-y-8">
                <div>
                  <Link to='/'>
                    <Logo />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                  <ul className="space-y-1">
                    <li><a href="https://www.instagram.com/mr.rahuldongre/?igsh=bnV4Z2lwbWthMmsw" target='_blank' className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">YouTube</a></li>
                  </ul>
                </div>
                <div className="flex flex-col items-center space-y-4 items-baseline border-spacing-1 border-orange-800 font-bold">
                  <Link to='/about' className="text-center">About</Link>
                  <Link to='/contact' className="text-center">Contact</Link>
                  <Link to='/services' className="text-center">Career</Link>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-between space-y-8 border border-gray-700 border-spacing-1">
                <div className="flex flex-col items-center space-y-4"></div>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-5xl pl-4 pt-2 pb-2">Home</Link>
                  <Link to="/about" className="text-5xl pl-4 pt-2 pb-2">About Us</Link>
                  <Link to="/services" className="text-5xl pl-4 pt-2 pb-2">Our Services</Link>
                  <Link to="/portfolio" className="text-5xl pl-4 pt-2 pb-2">Portfolio</Link>
                  <Link to="/contact" className="text-5xl pl-4 pt-2 pb-2">Contact Us</Link>
                </nav>
                <div className="mean-container">
                  <div className="mean-push float-left w-full p-0 m-0 clear-both"></div>
                </div>
              </div>
              <div className="hidden md:flex flex-col justify-between space-y-8 border border-gray-700 border-collapse">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl focus:outline-none"
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                </div>
                <div className="mt-[10vh] flex flex-col items-center">
                  <input
                    type="text"
                    className="w-full p-2 mb-4 rounded bg-gray-900 text-white focus:outline-none rounded-full"
                    placeholder="Search keyword"
                  />
                </div>
                <div className="hidden md:block">
                  <h2 className="text-xl font-bold mb-2">Get in touch</h2>
                  <p className="mb-1">+91 XXXXXXXXXXXXX</p>
                  <p className="mb-1">csquare_media@gmail.com</p>
                  <p>Nagpur, Maharashtra, India</p>
                </div>
                <div className="flex flex-col items-center space-y-4"></div>
              </div>
            </div>
          )}
        </nav>
      </header>
      <div className="container mx-auto px-4 py-20 flex-1">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-40">Spotlight: Our Media Coverage, News, and Portfolio</h1>
          <p className="text-lg mt-4">
            Unlock the X Factor Bizz: Explore Our Brand's Latest Buzz, Media Coverage, News Highlights, and Diverse Portfolio.
          </p>
        </div>
      </div>
      <div className={`bg-black py-20 flex-1 flex flex-col justify-center ${isOpen ? 'hidden' : 'block'}`}>
        <h2 className="text-4xl md:text-6xl font-bold font-serif text-center mb-10">MEDIA COVERAGE</h2>
        <div className="container mx-auto px-4 max-h-half-screen">
          {images.length > 0 ? (
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-2 relative">
                  <div className="bg-black p-4 rounded-lg">
                    <img src={image} alt={`Media Coverage ${index + 1}`} className="w-full h-auto rounded-lg max-h-half-screen" />
                    {isAdmin && (
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No media coverage available.
            </div>
          )}
        </div>
        {isAdmin && (
          <div className="text-center mt-10">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block mx-auto mb-4"
            />
            <button
              onClick={addImage}
              className="bg-blue-600 text-white px-4 py-2 rounded"
              disabled={!imageInput}
            >
              Add Image
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
