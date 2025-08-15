'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CheckoutCardProps {
    subtotal: number
    discount?: number
    shippingOptions: { label: string; price: number }[]
    onCheckout: () => void
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({
    subtotal,
    discount = 0,
    shippingOptions,
    onCheckout
}) => {
    const [selectedShipping, setSelectedShipping] = useState(0)

    const total = subtotal - discount + shippingOptions[selectedShipping]?.price

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full  border">
            <h2 className="text-lg font-bold mb-4">CARD TOTAL</h2>

            {/* Subtotal */}
            <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-semibold">Rs {subtotal}</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span>Rs {discount}</span>
            </div>

            <hr className="my-3" />

            {/* Shipping */}
            <div className="mb-4">
                <span className="block mb-2">Shipping</span>
                <div className="space-y-2">
                    {shippingOptions.map((option, index) => (
                        <label key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="shipping"
                                    checked={selectedShipping === index}
                                    onChange={() => setSelectedShipping(index)}
                                />
                                <span>{option.label}</span>
                            </div>
                            <span className="text-[#a1263d] font-medium">Rs {option.price}</span>
                        </label>
                    ))}
                </div>
            </div>

            <hr className="my-3" />

            {/* Total */}
            <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total</span>
                <span className='text-[#861c31]'>Rs {total}</span>
            </div>

            <Button
                className="bg-[#a1263d] hover:bg-[#861c31] w-full rounded-[6px] py-2 text-white font-semibold cursor-pointer"
                onClick={onCheckout}
            >
                PROCEED TO CHECKOUT
            </Button>
        </div>
    )
}

export default CheckoutCard
