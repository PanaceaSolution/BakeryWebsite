import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <button
      className="
        w-[220px] h-[36px] 
        sm:w-[260px] sm:h-[40px] 
        md:w-[305px] md:h-[42px] 
        flex items-center justify-center gap-2 
        rounded-[10px] px-4 py-2 
        bg-white shadow-md hover:shadow-lg 
        transition-all duration-200
      "
      aria-label="Order via WhatsApp"
    >
      <span className="text-black font-semibold text-xs sm:text-sm md:text-base">ORDER VIA</span>
      <FaWhatsapp className="text-green-500 text-base sm:text-lg md:text-xl" />
      <span className="text-green-500 font-semibold text-xs sm:text-sm md:text-base">WHATSAPP</span>
    </button>
  );
};

export default WhatsAppButton;
