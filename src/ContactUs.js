import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Components/logo.js';
import Footer from './Components/Footer.js';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    console.log('Form submitted:', data);
    alert('Message sent successfully!');
  };

  return (
    <div className='bg-white w-screen'>
      <header className="fixed w-full">
      <nav className="relative z-10 bg-black h-[8vh]">
  <div className="container mx-auto flex justify-between items-center h-full">
    <div className="flex items-center space-x-4">
      <div className="w-auto h-full flex items-center">
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
          <Link to="/services" className="text-2xl">Our Services</Link>
          <Link to="/portfolio" className="text-2xl">Portfolio</Link>
          <Link to="/contact" className="text-2xl">Contact Us</Link>
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <div className='flex flex-col md:flex-row'>
              <div className='w-full md:w-7/10 ml-10'>
                <h1 className="text-4xl md:text-7xl font-bold mb-4 font-serif">Let's get in touch</h1>
              </div>
              <div className='mt-10 md:mt-20'>
                <h1 className="text-xl font-bold mb-4 font-mono text-gray-700">Great! We're excited to hear from you and eager to start something special together. Feel free to call us with any inquiries.</h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-36">
              <div>
                <p className="text-lg mb-2 font-bold font-serif">Don't be afraid man!</p>
                <p className="text-lg mb-2 font-semibold font-serif">Say hello</p>
                <div className='mt-10'>
                  <p className="mb-2">+91 XXXXXXXXXXXXX</p>
                  <p className="mb-2">csquare_media@gmail.com</p>
                  <p className="mb-2">Nagpur, Maharashtra, INDIA</p>
                </div>
              </div>
              <div className='container mx-auto'>
                <form id="contactForm" className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <div className='w-full flex flex-col md:flex-row justify-between'>
                    <div className="w-full md:w-1/2 pr-2">
                      <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
                      <input className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" type="text" id="name" name="name" required />
                    </div>
                    <div className="w-full md:w-1/2 pl-2">
                      <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
                      <input className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" type="email" id="email" name="email" required />
                    </div>
                  </div>
                  <div className='w-full flex flex-col md:flex-row'>
                    <div className="w-full md:w-1/2 pr-2">
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                      <input className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" type="text" id="phone" name="phone" />
                    </div>
                    <div className="w-full md:w-1/2 pl-2">
                      <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject *</label>
                      <input className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" type="text" id="subject" name="subject" required />
                    </div>
                  </div>
                  <div className='w-full'>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
                    <textarea className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" id="message" name="message" rows="4" required></textarea>
                  </div>
                  <div className='w-full'>
                    <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:ring focus:ring-opacity-50" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
