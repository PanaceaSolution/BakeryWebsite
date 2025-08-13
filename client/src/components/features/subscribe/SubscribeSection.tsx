'use client';

import React, { FormEvent } from 'react';

const SubscribeSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future logic here
  };

  return (
    <section className="w-full bg-[#F8F8F8] flex flex-col items-center justify-center px-4 md:px-20 py-[59px] gap-4 mx-auto overflow-hidden">
      {/* Heading & Subheading */}
      <div className="w-full max-w-[612px] flex flex-col items-center gap-2 text-center">
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-gray-900 leading-tight">
          Get 10% Off Your First Order!
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-snug">
          Join our community for exclusive deals, updates & more.
        </p>
      </div>

      {/* Form Wrapper with Input and Overlapping Button */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[612px] mt-4"
      >
        <div className="flex items-center w-full h-[42px] border border-gray-300 rounded-[20px] pr-[10px] pl-[10px] gap-[17px] bg-white">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 h-full text-[14px] border-none focus:outline-none bg-transparent pr-[140px]"
            required
          />

          {/* Button - Absolutely positioned */}
          <button
            type="submit"
            className="absolute right-[1px] top-1/2 transform -translate-y-1/2 bg-[#8C1C32] text-white w-[146px] h-[42px] text-[14px] rounded-[20px] px-[10px] hover:bg-[#731628] transition-colors shadow-md"
          >
            Subscribe
          </button>
        </div>
      </form>

      {/* Note */}
      <p className="text-[12px] text-gray-500 mt-4 text-center">
        Note: We promise not to spam!
      </p>
    </section>
  );
};

export default SubscribeSection;
