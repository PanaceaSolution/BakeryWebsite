"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SliderCard from "./SliderCard";

interface Cake {
  id: string;
  name: string;
  image: string;
}

const cakes: Cake[] = [
  { id: "mini-cake", name: "Mini Cake", image: "/SliderSection/mini.png" },
  { id: "birthday-cake", name: "Birthday Cake", image: "/SliderSection/birthday.png" },
  { id: "wedding-cake", name: "Wedding Cake", image: "/SliderSection/wedding.png" },
  { id: "model-cake", name: "Model Cake", image: "/SliderSection/model.png" },
  { id: "baby-shower-cake", name: "Baby Shower Cake", image: "/SliderSection/baby.png" },
  { id: "mini-cake", name: "Mini Cake", image: "/SliderSection/mini.png" },
  { id: "birthday-cake", name: "Birthday Cake", image: "/SliderSection/birthday.png" },
  { id: "wedding-cake", name: "Wedding Cake", image: "/SliderSection/wedding.png" },
  { id: "model-cake", name: "Model Cake", image: "/SliderSection/model.png" },
  { id: "baby-shower-cake", name: "Baby Shower Cake", image: "/SliderSection/baby.png" },
];

const SliderSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth =
        (scrollRef.current.firstChild as HTMLElement)?.offsetWidth || 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex items-center w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-[#8C1C32] text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
      >
        <ChevronLeft  />
      </button>

      {/* Scrollable Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-11 px-4 sm:px-6 md:px-8 py-4 w-[95%] ml-6 sm:ml-7 hide-scrollbar"
      >
        {cakes.map((cake,index) => (
          <div
            key={index}
            onClick={() => router.push(`/category/${cake.id}`)}
            className="cursor-pointer flex-shrink-0 bg-yellow"
          >
            <SliderCard {...cake} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-[#8C1C32] text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
      >
        <ChevronRight  />
      </button>
    </section>
  );
};

export default SliderSection;
