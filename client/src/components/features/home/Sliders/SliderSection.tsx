"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SliderCard from "./SliderCard";
import { useGetCategories } from "@/hooks/categoryHooks/useCategoryQueries";
import { Category } from "@/types/CategoryTypes";
import { Skeleton } from "@/components/ui/skeleton";

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

  const { data, isLoading } = useGetCategories();

  return (
    <section className="relative flex items-center w-full mb-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-[#8C1C32] text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
      >
        <ChevronLeft />
      </button>

      {/* Scrollable Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-12 px-4 sm:px-6 md:px-8 py-4 w-[95%] ml-6 sm:ml-7 hide-scrollbar"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <Skeleton className="w-[150px] h-[150px] rounded-xl" />
              <Skeleton className="w-[100px] h-[16px] mt-2 rounded" />
            </div>
          ))
          : data?.data?.map((cake: Category, index: number) => (
            <div
              key={index}
              onClick={() => router.push(`/category/${cake.slug}`)}
              className="cursor-pointer flex-shrink-0"
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
        <ChevronRight />
      </button>
    </section>
  );
};

export default SliderSection;
