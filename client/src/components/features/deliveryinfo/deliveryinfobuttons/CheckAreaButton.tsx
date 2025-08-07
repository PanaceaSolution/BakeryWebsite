"use client";

import React from "react";
import { Button } from "@/components/ui/button"; 
import { HiLocationMarker } from "react-icons/hi";

const CheckAreaButton: React.FC = () => {
  return (
    <Button
      className="
        w-full max-w-[263px] h-[44px] rounded-[10px]
        bg-[#8C1C32] hover:bg-[#7a192a]
        flex items-center justify-center gap-2.5
        px-2.5
        text-white font-medium text-base
        transition-colors duration-200
      "
    >
      <HiLocationMarker size={20} />
      Check your area
    </Button>
  );
};

export default CheckAreaButton;
