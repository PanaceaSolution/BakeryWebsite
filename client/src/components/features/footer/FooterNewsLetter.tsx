import React from 'react';

const FooterNewsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  submit logic here
  };

  return (
    <div className="flex flex-col gap-4 lg:w-[350px] w-full">
      {/* Heading */}
      <h4 className="font-[600] font-poppins text-[20px] sm:text-[24px] leading-[28px] text-[#8B1732]">
        Stay in the Loop
      </h4>

      {/* Subtext with responsive line break */}
      <p className="font-poppins font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-[0.2px] text-gray-600">
        Get 10% off your first order — sign up{' '}
        <span className="block sm:inline">for exclusive deals!</span>
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[612px] mt-2 flex flex-col sm:flex-row gap-2 sm:gap-0 relative"
      >
        <div className="flex items-center w-full h-[42px] border border-gray-300 rounded-[20px] px-[10px] bg-white">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 h-full text-[14px] border-none focus:outline-none bg-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="sm:absolute sm:right-[1px] sm:top-1/2 sm:transform sm:-translate-y-1/2 bg-[#8C1C32] text-white w-full sm:w-[146px] h-[42px] text-[14px] rounded-[20px] px-[10px] hover:bg-[#731628] transition-colors shadow-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
