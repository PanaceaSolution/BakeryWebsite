import React from "react";
import InfoTileCard from "./InfoTileCard";
import {
  BsCheckCircleFill,
  BsClockFill,
  BsGeoAltFill,
  BsBoxSeamFill,
} from "react-icons/bs";
import TextBlock from "../shared/textblock/TextBlock";

const InfoTiles = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">  {/* common padding wrapper */}
      <div className="w-full max-w-[1741px]">
        <TextBlock
          heading="Sweet Delivery, Right On Time"
          subheading="Enjoy freshly baked happiness delivered straight to your doorstep — safe, fast, and always on time."
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 mt-6"
        >
          <InfoTileCard
            icon={BsCheckCircleFill}
            title="Free Delivery"
            description="Within 5km — No extra charge on orders over Rs. 500."
          />
          <InfoTileCard
            icon={BsClockFill}
            title="Same-Day Delivery"
            description="Order before 3 PM and get your cake the same day!"
          />
          <InfoTileCard
            icon={BsGeoAltFill}
            title="Live Tracking"
            description="Track your cake from oven to your doorstep in real time."
          />
          <InfoTileCard
            icon={BsBoxSeamFill}
            title="Safe Packaging"
            description="Handled with care, hygienically packed, and sealed fresh."
          />
        </div>
      </div>
    </div>
  );
};


export default InfoTiles;
