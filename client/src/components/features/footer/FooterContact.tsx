import React from 'react';
import { MdCall, MdEmail, MdAccessTime, MdLocationOn } from 'react-icons/md';

const FooterContact: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none sm:px-0 mb-5">
      {/* Call Us */}
      <div className="flex items-start gap-3">
        <MdCall className="text-base sm:text-lg flex-shrink-0 mt-1 text-[#2D2D2D]" />
        <div>
          <p className="font-poppins font-semibold text-[#2D2D2D] text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] mb-1">
            Call Us
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">01-5909911</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <MdEmail className="text-base sm:text-lg flex-shrink-0 mt-1 text-[#2D2D2D]" />
        <div>
          <p className="font-poppins font-semibold text-[#2D2D2D] text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] mb-1">
            Email
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">abc@xyz.com</p>
        </div>
      </div>

      {/* Bakery opening and Closing Time */}
      <div className="flex items-start gap-3">
        <MdAccessTime className="text-base sm:text-lg flex-shrink-0 mt-1 text-[#2D2D2D]" />
        <div>
          <p className="font-poppins font-semibold text-[#2D2D2D] text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] mb-1 whitespace-normal">
            Bakery opening and Closing Time
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">7:00 A.M to 9:00 P.M</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-3">
        <MdLocationOn className="text-base sm:text-lg flex-shrink-0 mt-1 text-[#2D2D2D]" />
        <div>
          <p className="font-poppins font-semibold text-[#2D2D2D] text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] mb-1">
            Shankhamul Marga
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
