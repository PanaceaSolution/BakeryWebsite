'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { fetchBanner, BannerData } from '@/lib/api/banner'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  slug?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ slug }) => {
  const { data, isLoading, error } = useQuery<BannerData>({
    queryKey: ['banner', slug],
    queryFn: () => fetchBanner(slug),
  })


  const customizeRef = useRef<HTMLDivElement | null>(null)

  if (isLoading)
    return <div className="h-[400px] flex items-center justify-center">Loading...</div>
  if (error || !data)
    return (
      <div className="h-[400px] flex items-center justify-center text-red-600">
        Failed to load banner
      </div>
    )

  return (
    <>
      <section className="relative w-full h-[400px] md:h-[494px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={data.image}
          alt={data.heading}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="flex flex-col items-center text-center text-white w-full max-w-[813px] gap-10 sm:gap-[78px]">
            {/* Heading and Subtext */}
            <div className="space-y-[7px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                {data.heading}
              </h1>
              <p className="text-base sm:text-lg md:text-[20px] leading-[1] tracking-normal font-poppins font-normal text-white/90">
                {data.subtext}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-[48px] mb-6 sm:mb-0">
              {/* Primary Button */}
              <Button
                onClick={() => {
                  customizeRef.current?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] bg-[#D12C58] text-white font-medium text-center hover:bg-[#b61946] transition-colors"
              >
                {data.primaryBtn.text}
              </Button>

              {/* Secondary Button */}
              <Button
                asChild
                className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] border border-white bg-transparent text-white font-medium text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              >
                <Link href={data.secondaryBtn.link}>{data.secondaryBtn.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      
      <div ref={customizeRef} id="customize" className="mt-20" />
    </>
  )
}

export default HeroSection
