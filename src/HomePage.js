import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServiceSection';
import TeamSection from './Components/TeamSectionHome';
import Clients from './Components/ClientsGrayBg';
import WhyChooseUs from './Components/WhyChooseUs';
import Logo from './Components/logo';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "565622ff-7326-4311-b841-032149288a69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setIsModalOpen(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className=' bg-customGray'>
      <header className="relative h-screen">
        
        <nav className="relative z-10 bg-black h- py-6">
          <div className="container mx-auto flex justify-between items-center">
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

      <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute w-full h-full object-cover hidden md:block"
            src="desktop_background_video.mp4"
            autoPlay
            loop
            muted
          />
          <video
            className="absolute w-full h-full object-cover block md:hidden"
            src="mobile_background_video.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      <div className='w-full bg-customGray flex flex-row'>
        <div className='bg-customGray justify-center'>
          <img src='Brand_Icon.svg' alt='Brand' className='scale-50'></img>
          <div className="flex justify-center mt-4">
            <div className='px-10 py-4 rounded-full shadow-md bg-white scale-75'>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black font-serif px-9 py-3 rounded-full shadow-md hover:bg-orange-600 scale-110"
                style={{
                  backgroundImage: 'url(/path/to/I_am_a_brand.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                I'M A BRAND
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-gray-500"
                >
                  &times;
                </button>
                <h2 className="text-xl mb-4">Do you want to discuss your Influencer Marketing needs?</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700">BRAND/COMPANY NAME</label>
                    <input type="text" name="brand_name" className="w-full p-2 border rounded" placeholder="Enter your brand/company name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">PHONE</label>
                    <input type="text" name="phone" className="w-full p-2 border rounded" placeholder="Enter the contact number" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">EMAIL ID</label>
                    <input type="email" name="email" className="w-full p-2 border rounded" placeholder="Enter your email ID" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">CITY</label>
                    <input type="text" name="city" className="w-full p-2 border rounded" placeholder="Enter your city name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">YOUR MARKETING BUDGET</label>
                    <input type="text" name="budget" className="w-full p-2 border rounded" placeholder="Enter your marketing budget" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">TELL US MORE ABOUT YOUR REQUIREMENT</label>
                    <textarea name="requirements" className="w-full p-2 border rounded" placeholder="Describe your business"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
                </form>
                <span>{result}</span>
              </div>
            </div>
          )}
        </div>
        <div className='bg-customGray justify-center'>
          <img src='Influencer.png' alt='Brand' className='h-auto max-w-36 mt-20 ml-10 mb-14'></img>
          <div className="flex justify-center mt-4">
            <div className='px-10 py-4 rounded-full shadow-md bg-white scale-75'>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black px-8 py-2 font-serif rounded-full shadow-md hover:bg-orange-600 scale-110"
                style={{
                  backgroundImage: 'url(/path/to/I_am_a_brand.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                I'M A INFLUENCER
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-gray-500"
                >
                  &times;
                </button>
                <h2 className="text-xl mb-4">Let's Influence Together! Start your Journey today.</h2>
                <p className="mb-4">Fields marked with an <span className="text-red-500">*</span> are required</p>
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" className="w-full p-2 border rounded" placeholder="Enter your Name" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                    <input type="text" name="contact_number" className="w-full p-2 border rounded" placeholder="Contact Number" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Instagram Profile link <span className="text-red-500">*</span></label>
                    <input type="text" name="instagram_profile" className="w-full p-2 border rounded" placeholder="Instagram Profile URL" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Number of Followers <span className="text-red-500">*</span></label>
                    <input type="text" name="followers" className="w-full p-2 border rounded" placeholder="Number of Followers" required />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Influencer category <span className="text-red-500">*</span></label>
                    <select name="category" className="w-full p-2 border rounded" required>
                      <option value="" disabled selected>Select</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">YouTube Channel link</label>
                    <input type="text" name="youtube_channel" className="w-full p-2 border rounded" placeholder="YouTube URL" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Number of Subscribers on YouTube</label>
                    <input type="text" name="subscribers" className="w-full p-2 border rounded" placeholder="Number of Subscribers" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">City</label>
                    <input type="text" name="city" className="w-full p-2 border rounded" placeholder="Enter the City Name" />
                  </div>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBMIT</button>
                </form>
                <span>{result}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <ServicesSection />
      <Clients />
      <TeamSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default HomePage;
