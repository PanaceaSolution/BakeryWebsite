"use client";

import React from "react";

interface BulletItem {
  heading: string;
  text: string;
}

interface LongDeliveryInfoCardProps {
  title: string;
  bullets: BulletItem[];
}

const LongDeliveryInfoCard: React.FC<LongDeliveryInfoCardProps> = ({
  title,
  bullets,
}) => {
  return (
    <div
      className="
        w-full
        max-w-[743px]
        h-auto md:h-[191px]
        rounded-[10px]
        p-[21px] pt-[26px] pb-[26px]
        flex flex-col gap-[10px]
        bg-white shadow-md
      "
    >
      {/* Title with fixed color square box */}
      <div className="flex items-center gap-3">
        <div
          className="w-5 h-5 rounded-sm"
          style={{ backgroundColor: "#CD1200" }}
        ></div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Bulleted list */}
      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
        {bullets.map(({ heading, text }, idx) => (
          <li key={idx}>
            <span className="font-bold text-gray-800">{heading}:</span> {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LongDeliveryInfoCard;
