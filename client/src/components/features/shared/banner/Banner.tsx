'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BannerProps = {
  image: string;
  heading: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
};

const Banner: React.FC<BannerProps> = ({
  image,
  heading,
  subtext,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[387px] mb-5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="flex flex-col items-center text-center text-white w-full max-w-[813px] gap-6 md:gap-[60px]">
          {/* Heading + Subtext */}
          <div className="flex flex-col gap-2 md:gap-[7px]">
            <h2 className="font-poppins font-bold text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-tight">
              {heading}
            </h2>
            <p className="font-poppins text-white text-opacity-90 text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px]">
              {subtext}
            </p>
          </div>

          {/* Button */}
          <Link
            href={buttonLink}
            className="w-[160px] sm:w-[180px] md:w-[200px] xl:w-[244px] h-[40px] md:h-[44px] px-[10px] py-[10px] bg-[#D82B5D] text-white text-center rounded-[10px] font-medium hover:bg-[#b02149] transition-colors flex items-center justify-center text-[14px] md:text-[16px]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
