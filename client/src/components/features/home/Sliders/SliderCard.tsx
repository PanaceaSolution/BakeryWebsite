"use client";

import React, { memo } from "react";
import Image from "next/image";

interface SliderCardProps {
  id: string | number;
  name: string;
  price?: number;
  categoryImage: string;
  slug: string;
}

const SliderCard: React.FC<SliderCardProps> = ({ id, name, price, categoryImage, slug }) => {
  return (
    <div
      className="w-[140px] sm:w-[160px] md:w-[188px] h-[180px] sm:h-[200px] md:h-[222px] p-2 text-center cursor-pointer"
      key={id}
    >
      {/* Outer Circle */}
      <div className="w-[130px] sm:w-[150px] md:w-[183px] h-[130px] sm:h-[150px] md:h-[183px] mx-auto overflow-hidden rounded-full flex justify-center items-center border border-[#8C1C32]">
        {/* Inner Circle */}
        <div className="w-[120px] sm:w-[140px] md:w-[169px] h-[120px] sm:h-[140px] md:h-[169px] mx-auto overflow-hidden rounded-full bg-white relative group">
          <Image
            // src={`/${categoryImage}`}
            src={`/assets/SliderSection/bakery.png`}
            alt={`${name} category image`}
            fill
            className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 169px"
            priority
          />
        </div>
      </div>

      {/* Title */}
      <div className="mt-2">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold truncate">{name}</h3>
        {price && <p className="text-xs text-gray-600 font-medium">₹{price}</p>}
      </div>
    </div>
  );
};

export default memo(SliderCard);
