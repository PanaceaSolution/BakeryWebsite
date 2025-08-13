import React from "react";

interface CartBannerProps {
  image: string;
  heading: string;
  subtext: string;
}

const CartBanner: React.FC<CartBannerProps> = ({ image, heading, subtext }) => {
  return (
    <section className="relative w-full overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[280px]">
      {/* Background Image */}
      <img
        src={image}
        alt={heading}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center text-white w-full max-w-[813px] gap-16 md:gap-20">
          {/* Heading + Subtext */}
          <div className="flex flex-col w-full gap-2 md:gap-3">
            <h2
              className="
                font-poppins font-extrabold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight sm:leading-snug md:leading-tight
                tracking-normal text-center
              "
            >
              {heading}
            </h2>
            <p
              className="
                font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-snug sm:leading-normal md:leading-snug
                tracking-normal text-center text-white/90
              "
            >
              {subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;
