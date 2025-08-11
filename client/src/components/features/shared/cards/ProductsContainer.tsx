'use client'

import React from 'react'
import ProductCard from './ProductCards'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string | number;
    images: string[];
    tags: string[];
    available: boolean;
    isFeatured: boolean;
    createdAt: string;
    categoryId: string | null;
}
interface IProps {
    title: string
    subTitle: string
    link?: string
    data: Product[]
    discount?: boolean
}

const HomeProductsComponent: React.FC<IProps> = ({ title, subTitle, link, data, discount }) => {
    const router = useRouter()

    return (
        <div className="flex flex-col gap-10 mx-4 sm:mx-6 lg:mx-9 mb-15">
            {/* Header */}
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
                    <Button
                        onClick={() => router.push(`/${link}`)}
                        className="bg-[#CF294A] cursor-pointer w-full sm:w-[153px] rounded-[10px] px-4 py-2 text-base font-semibold text-white hover:bg-[#a1263d] transition"
                    >
                        View All
                    </Button>
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-gray-700">{subTitle}</h2>
            </div>
            <div className='flex justify-center md:justify-between items-center content-center'>


                {/* Product Grid */}
                <div
                    className="
          grid gap-22 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        "
                >
                    {data.map((item, index) => (
                        <ProductCard
                            key={index}
                            isDiscounted={discount}
                            name={item.name}
                            price={item.price as number}
                            images={item.images}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default React.memo(HomeProductsComponent)
