import React from 'react';
import { FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa'; // Import specific icons

const footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden py-4">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
        
        {/* Left Side */}
        <div className="flex justify-start items-center mb-4 lg:mb-0">
          <div className="flex items-center space-x-2">
            {/* Logo and Title */}
            <img src="/VAISHALI TECH.png" alt="company logo" className="w-auto h-12" />
          </div>
        </div>

        {/* Flex container for Contact, Product, Community, and Legal on larger screens */}
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto lg:space-x-20">
          {/* Contact Section */}
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="text-start">
              <li><a href="#!" className="hover:text-gray-400">vaishalitech.info@gmail.com</a></li>
              <li><a href="#!" className="hover:text-gray-400">Vadgao,Pune,411041, Maharashtra</a></li>
              <li><a href="#!" className="hover:text-gray-400">9135867021</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="w-full text-center lg:text-left lg:w-auto">
            <h3 className="font-bold mb-2">PRODUCT</h3>
            <ul className=''>
              <li><a href="#!" className="hover:text-gray-400">Web-designs</a></li>
              <li><a href="#!" className="hover:text-gray-400">App-designs</a></li>
              <li><a href="#!" className="hover:text-gray-400">UI/UX</a></li>
              <li><a href="#!" className="hover:text-gray-400">Digital Marketings</a></li>
              <li><a href="#!" className="hover:text-gray-400">Social media Management</a></li>
              <li><a href="#!" className="hover:text-gray-400">SEO</a></li>
              <li><a href="#!" className="hover:text-gray-400">Digital Marketings</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-full text-center lg:text-right lg:w-auto ">
            <h3 className="font-bold mb-2 ">COMMUNITY</h3>
            <ul >
              <li>
                <a href="#!" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaDiscord className="text-white mr-2" /> Discord
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaTwitter className="text-white mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaEnvelope className="text-white mr-2" /> Email
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mt-4 lg:mt-0 text-center">
            <h3 className="font-bold mb-2">LEGAL</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Terms</a></li>
              <li><a href="#!" className="hover:text-gray-400">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-4 text-sm">
        <p>Copyright © 2022 . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
