import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-center relative items-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-between items-start w-full  px-2">
          <div className="flex flex-col items-start">
            <Link to='/'>
            <img src="CSQUARE_MEDIA_transparent_resized_croped.png" alt="X Factor Bizz Logo" className="w-32 mb-6" />
            </Link>
            
            <p className="text-left text-lg">CSQUARE MEDIA: Elevating brands through strategic influencer marketing.</p>
          </div>
          <div className="flex flex-col items-start space-y-6 text-lg px-16 ">
            <a href="#youtube" className="hover:text-gray-400">YOUTUBE</a>
            <a href="#linkedin" className="hover:text-gray-400">LINKEDIN</a>
            <a href="https://www.instagram.com/mr.rahuldongre/?igsh=bnV4Z2lwbWthMmsw" target='_balnk'className="hover:text-gray-400">INSTAGRAM</a>
          </div>
          <div className="flex flex-col items-end">
            <Link to='/contact'><h2 className="text-8xl font-bold text-green-400">LET'S TALK !</h2></Link>
            
          </div>
        </div>
        <div className="w-full max-w-7xl px-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-lg">© 2024 | Managed XXXXXXXXXXXXX | Designed by XXXXXXXXXXXXX</p>
          <ul className="flex space-x-8 text-lg">
            <li><Link to="/about" className="hover:text-gray-400">ABOUT US</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">CONTACT</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">CAREER</Link></li>
            <li><Link to="/portfolio" className="hover:text-gray-400">FAQS</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
