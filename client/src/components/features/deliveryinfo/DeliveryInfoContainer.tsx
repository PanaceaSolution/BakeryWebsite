import React from 'react';
import TextBlock from '../shared/textblock/TextBlock';
import Map from './deliveryinfomap/Map';
import DeliveryRightSection from './DeliveryRightSection';

const DeliveryInfoContainer: React.FC = () => {
  return (
    <section
      className="
        w-full
        max-w-[90%] lg:max-w-[1280px] xl:max-w-[1740px]
        mx-auto
        p-4 sm:p-6 md:p-8 lg:p-12
        bg-transparent
        rounded-xl
        flex flex-col
        gap-8
      "
    >
      <TextBlock
        heading="Where we deliver"
        subheading="We cover all major areas of Kathmandu Valley — check your location for free or fast delivery."
      />
      
      {/* Side-by-side layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map section */}
        <div className="w-full lg:w-1/2">
          <Map />
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2">
          <DeliveryRightSection />
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfoContainer;
