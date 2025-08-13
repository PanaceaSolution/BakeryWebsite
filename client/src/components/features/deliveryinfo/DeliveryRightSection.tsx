"use client";

import React from "react";
import DeliveryInfoCard from "./deliveryinfocards/DeliveryInfoCard";
import LongDeliveryInfoCard from "./deliveryinfocards/LongDeliveryInfoCard";
import CheckAreaButton from "./deliveryinfobuttons/CheckAreaButton";

const DeliveryRightSection: React.FC = () => {
  return (
    <section
      className="
        w-full max-w-[743px]
        h-auto md:h-[492px]
        flex flex-col gap-[40px]
      "
    >
      {/* Top two cards side by side */}
      <div className="flex flex-col sm:flex-row gap-[40px]">
        <DeliveryInfoCard
          title="Free Zone"
          bullets={[
            { heading: "Area", text: "Within 5 km of Bakery" },
            { heading: "Delivery Time", text: "1-3 hours" },
          ]}
          boxColor="#04E56D"
        />

        <DeliveryInfoCard
          title="Standard Zone"
          bullets={[
            { heading: "Area", text: "5-10 km range" },
            { heading: "Charge", text: "Rs. 100-150" },
          ]}
          boxColor="#F8AC20"
        />
      </div>

      {/* Long delivery info card below */}
      <LongDeliveryInfoCard
        title="Long Distance"
        bullets={[
          { heading: "Area", text: "Over 10 km" },
          { heading: "Note", text: "Pre-order 24hrs in advance" },
        ]}
      />

      {/* Check your area button */}
      <div>
        <CheckAreaButton />
      </div>
    </section>
  );
};

export default DeliveryRightSection;
