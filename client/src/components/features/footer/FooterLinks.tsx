import React from 'react';
import Link from 'next/link';

const FooterLinks: React.FC = () => {
  return (
     <div className="flex flex-col gap-3 max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mb-3">

      {/* Heading */}
      <h4
        className="
          font-poppins font-bold
          text-[#000000]
          mb-3
          text-[16px] sm:text-[18px] md:text-[20px]
          leading-[100%]
          tracking-normal 
        "
      >
        Links
      </h4>

      {/* Links */}
      <ul
        className="
          text-gray-800
          text-[14px] sm:text-[15px] md:text-[16px]
          leading-[100%]
          tracking-normal
          space-y-[14px] sm:space-y-[18px] md:space-y-[23px]
        "
      >
        {[
          { href: '/', label: 'Home' },
          { href: '#about-us', label: 'About Us' },
          { href: '#custom-cake', label: 'Customize your Cake' },
          { href: '/', label: 'Shop / Order Online' },
          { href: '#bakery-items', label: 'Bakery Items' },
          { href: '#faqs', label: 'FAQs' },
          { href: '#about-us', label: 'Contact Us' },
        ].map(({ href, label },index) => (
          <li key={index}>
            <Link
              href={href}
              className="
                font-poppins font-normal
                hover:text-[#c71544]
                transition-colors duration-200
              "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
