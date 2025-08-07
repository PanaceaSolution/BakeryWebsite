import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const FooterBrand: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mb-5">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="w-20 h-20 mb-2 rounded-lg max-w-full"
      />
     <ul className="list-disc list-inside text-black font-poppins text-sm font-normal leading-normal tracking-normal marker:text-black">
  <li className="mb-2 flex items-center text-gray-700">
    <span className="mr-2">🎂</span>Freshly baked cakes made with love
  </li>
  <li className="mb-2 flex items-center text-gray-700">
    <span className="mr-2">👩🏻‍🍳</span>Based in Kathmandu, serving happiness daily
  </li>
  <li className="flex items-center text-gray-700">
    <span className="mr-2">🍰</span>Quality, Creativity, Timely Delivery.
  </li>
</ul>

      <div>
        <p className="font-poppins font-bold text-[16px] leading-[16px] tracking-normal mb-2 lg:text-[16px] md:text-[14px] sm:text-[13px] text-[#000000]">
          Social Media:
        </p>
        <div className="flex space-x-3 text-base">
          <FaFacebookF className="text-blue-700 cursor-pointer transition-colors duration-200 hover:text-blue-800" />
          <FaInstagram className="text-pink-600 cursor-pointer transition-colors duration-200 hover:text-pink-700" />
          <FaTiktok className="text-black cursor-pointer transition-colors duration-200 hover:text-gray-800" />
          <FaWhatsapp className="text-green-600 cursor-pointer transition-colors duration-200 hover:text-green-700" />
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;
