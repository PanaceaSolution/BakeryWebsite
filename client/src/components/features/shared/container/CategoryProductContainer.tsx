'use client'

import React from "react";
import ProductCards from "../cards/ProductCards";
import { Product } from "@/types/CakeTypes";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryProductContainerProps {
    data: Product[] | null;
    isLoading?: boolean;
}

const ProductSkeleton = () => (
    <div className="max-w-[355px] w-[260px] md:w-[210px] lg:w-[300px] h-[364px] rounded-[10px] shadow-lg relative bg-white p-2 flex flex-col gap-2">
        <Skeleton className="absolute top-0 left-0 w-[97px] h-[27px] rounded-tl-[10px]" />
        <div className="h-[200px] md:w-[200px] lg:w-full flex overflow-hidden rounded-t-[10px] p-2">
            <Skeleton className="w-full h-full object-contain rounded" />
        </div>
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-3/4 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
        </div>
        <Skeleton className="mt-2 w-full h-10 rounded-[10px]" />
    </div>
)

const CategoryProductContainer: React.FC<CategoryProductContainerProps> = ({
    data,
    isLoading = false
}) => {

    // Limit data to max 8 products
    const productsToShow = data?.slice(0, 8) || []

    // If loading, show exactly 8 skeletons
    const renderSkeletons = () =>
        Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex-shrink-0">
                <ProductSkeleton />
            </div>
        ))

    return (
        <div className="my-16 mx-9">
            <div
                className="
                  grid gap-6
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  xl:grid-cols-4
                "
            >
                {isLoading
                    ? renderSkeletons()
                    : productsToShow.map((item) => (
                        <ProductCards
                            key={item.id}
                            name={item.name}
                            price={item.price as number}
                            images={item.images}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default React.memo(CategoryProductContainer);
