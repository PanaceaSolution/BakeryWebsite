'use client';

import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsLetter';
import FooterBottom from './FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer
      className="
        bg-white text-gray-900 font-poppins text-sm border-t border-gray-200
        max-w-screen-l w-full mx-auto 
        pt-16 pr-6 pb-16 pl-6
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-4 
      "
    >
      <FooterBrand />
      <FooterLinks />
      <FooterContact />
      <FooterNewsletter />
      {/* Horizontal line spanning all columns */}
  <div className="lg:col-span-4 w-full">
    <hr className="border-t border-black mb-4" />
  </div>

  {/* Footer bottom text */}
  <div className="lg:col-span-4 flex flex-col items-center w-full">
    <FooterBottom />
  </div>

    </footer>
  );
};

export default Footer;
