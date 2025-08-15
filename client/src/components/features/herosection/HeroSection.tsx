'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BannerData } from '@/lib/api/banner'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  data: BannerData
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const customizeRef = useRef<HTMLDivElement | null>(null)

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
              <Button
                asChild={!!data.primaryBtn.link}
                onClick={
                  data.primaryBtn.link
                    ? undefined
                    : () =>
                      customizeRef.current?.scrollIntoView({
                        behavior: 'smooth',
                      })
                }
                className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] bg-[#D12C58] text-white font-medium text-center hover:bg-[#b61946] transition-colors"
              >
                {data.primaryBtn.link ? (
                  <Link href={`${data.primaryBtn.link}`}>{data.primaryBtn.text}</Link>
                ) : (
                  data.primaryBtn.text
                )}
              </Button>

              <Button
                asChild
                className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] border border-white bg-transparent text-white font-medium text-center hover:bg-[#8C1C32] hover:text-white hover:border-none transition-colors flex items-center justify-center"
              >
                <Link href={data.secondaryBtn.link}>
                  {data.secondaryBtn.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div ref={customizeRef} className="mt-20" />
    </>
  )
}

export default HeroSection
