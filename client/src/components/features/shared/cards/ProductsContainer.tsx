'use client'

import React from 'react'
import ProductCard from './ProductCards'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'

export interface Product {
  id: string
  name: string
  description: string
  price: string | number
  images: string[]
  tags: string[]
  available: boolean
  isFeatured: boolean
  createdAt: string
  categoryId: string | null
}

interface IProps {
  title: string
  subTitle: string
  link?: string
  data: Product[] | null
  discount?: boolean
  isLoading?: boolean
}

const ProductSkeleton = () => (
  <div className="max-w-[355px] w-[260px] md:w-[210px] lg:w-[300px] h-max-[364px] rounded-[10px] shadow-lg relative bg-white tracking-wide">
    {/* Image skeleton */}
    <div className="h-[200px] md:w-[200px] lg:w-full flex overflow-hidden rounded-t-[10px] p-2">
      <Skeleton className="w-full h-full object-contain rounded" />
    </div>

    {/* Info skeleton */}
    <div className="p-2">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-3/4 rounded" /> {/* Name */}
        <Skeleton className="h-4 w-1/4 rounded" /> {/* Price */}
      </div>

      {/* Button skeleton */}
      <Skeleton className="mt-2 w-full h-10 rounded-[10px]" />
    </div>
  </div>
);


const HomeProductsComponent: React.FC<IProps> = ({
  title,
  subTitle,
  link,
  data,
  discount,
  isLoading = false
}) => {
  const router = useRouter()
  const totalSlots = 8

  // Slice data to 8 items max
  const productsToShow = data?.slice(0, totalSlots) || []

  // Number of skeletons to render (for loading or if data < 8)
  const skeletonCount = totalSlots - productsToShow.length

  return (
    <div className="flex flex-col gap-10 mx-4 sm:mx-6 lg:mx-9 mb-15">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
          <div className='pt-8'>

            <Button
              onClick={() => link && router.push(`/${link}`)}
              className="bg-[#CF294A] cursor-pointer w-full sm:w-[153px] rounded-[10px]
            px-4 py-2 text-base font-semibold text-white hover:bg-[#a1263d]
            transition
            "
              disabled={isLoading}
            >
              View All
            </Button>
          </div>
        </div>
        <h2 className="text-sm sm:text-base font-semibold text-gray-700">{subTitle}</h2>
      </div>

      <div className="flex justify-center md:justify-between items-center content-center">
        <div className="
  w-full
  grid
  gap-6
  md:gap-22
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  xl:grid-cols-4
  justify-items-center
">
          {isLoading ? (
            Array.from({ length: totalSlots }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : (
            <>
              {productsToShow.length > 0 ? (
                productsToShow.map(item => (
                  <ProductCard
                    key={item.id}
                    isDiscounted={discount}
                    name={item.name}
                    price={Number(item.price)}
                    images={item.images}
                    id={item.id}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">No products available</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(HomeProductsComponent)
