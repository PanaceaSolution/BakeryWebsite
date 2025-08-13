"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id?: string | number;
    name: string;
    description?: string;
    price: number;
    category?: string;
    tags?: string[];
    images?: string[];
    isFeatured?: boolean;
    available?: boolean;
    isDiscounted?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    description,
    price,
    category,
    tags,
    images,
    isFeatured,
    available,
    isDiscounted
}) => {
    const [isDiscount] = useState(isDiscounted);
    const [discount] = useState(7);

    const discountedPrice = price - price * (discount / 100);

    return (
        <div className="max-w-[355px] w-[260px] md:w-[210px] lg:w-[300px] h-max-[364px] rounded-[10px] shadow-lg relative bg-white tracking-wide">
            {/* Discount badge */}
            {isDiscount && (
                <div className="absolute bg-red-600 text-white px-2 rounded-tl-[10px] w-[97px] h-[27px] flex items-center justify-center text-sm font-medium">
                    {discount}% OFF
                </div>
            )}

            {/* Product Image */}
            <div className="h-[200px] md:w-[200px] lg:w-full flex overflow-hidden rounded-t-[10px] p-2">
                {images && images.length > 0 ? (
                    <Image
                        src={images[0]}
                        alt={name}
                        width={355}
                        height={200}
                        className="h-full object-contain min-w-full"
                    />
                ) : (
                        <div className="h-[200px] md:w-[200px] lg:w-full flex overflow-hidden rounded-t-[10px] p-2">
                            <Image
                                src='/assets/SliderSection/baby.png' // path in public folder
                                alt={name}
                                width={355}
                                height={200}
                                className="h-full object-contain min-w-full"
                            />
                        </div>
                )}
            </div>

            {/* Info */}
            <div className="p-2">
                <div className="flex justify-between items-center text-sm font-medium">
                    <span className="truncate">{name}</span>
                    {isDiscount ? (
                        <span className="text-gray-400 line-through">Rs. {price}</span>
                    ) : (
                        <span className="font-semibold">Rs. {price}</span>
                    )}
                </div>

                {/* Price (discounted if applicable) */}
                {isDiscount && (
                    <div className="text-right font-semibold">
                        Rs. {discountedPrice.toFixed(2)}
                    </div>
                )}

                {/* Button */}
                <Button className="mt-2 w-full bg-[#8C1C32] rounded-[10px] px-4 py-2 text-white hover:bg-[#a1263d] transition cursor-pointer">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);
