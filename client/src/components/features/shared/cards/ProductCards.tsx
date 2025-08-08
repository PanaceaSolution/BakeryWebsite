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
    images?: string[] | '/SliderSection/mini.png';
    isFeatured?: boolean;
    available?: boolean;
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
}) => {
    const [isDiscount] = useState(true);
    const [discount] = useState(7);

    const discountedPrice = price - price * (discount / 100);

    return (
        <div className="max-w-[355px] w-[260px] md:w-[300px] h-[364px] rounded-[10px] shadow-lg relative bg-white tracking-wide">
            {/* Discount badge */}
            {isDiscount && (
                <div className="absolute bg-red-600 text-white px-2 rounded-tl-[10px] w-[97px] h-[27px] flex items-center justify-center text-sm font-medium">
                    {discount}% OFF
                </div>
            )}

            {/* Product Image */}
            <div className="h-[200px] flex overflow-hidden rounded-t-[10px]">
                <Image
                    src={
                        // images?.[0] ||
                        "/SliderSection/mini.png"
                    }
                    alt={name}
                    width={355}
                    height={200}
                    className="h-full object-contain min-w-full"
                />
            </div>

            {/* Info */}
            <div className="mt-3 flex flex-col p-2">
                <h2 className="text-lg flex justify-between font-medium">
                    {name}
                    {isDiscount && (
                        <span className="font-[400] text-gray-400">
                            Rs. <span className="line-through">{price}</span>
                        </span>
                    )}
                </h2>

                <div className="mt-2 flex justify-end">
                    <span className="text-xl font-medium">
                        Rs. {isDiscount ? discountedPrice.toFixed(2) : price}
                    </span>
                </div>

                <Button
                    className="mt-2 bg-[#8C1C32] rounded-[10px] px-4 py-2 text-white hover:bg-[#a1263d] transition
                    cursor-pointer
                    "
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
