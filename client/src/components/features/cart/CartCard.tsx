'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface CartItem {
    id: string
    name: string
    price: number
    image?: string
    quantity: number
}

interface CartCardProps {
    items: CartItem[]
    onQuantityChange: (id: string, newQuantity: number) => void
    onRemove: (id: string) => void
}

const CartCard: React.FC<CartCardProps> = ({
    items,
    onQuantityChange,
    onRemove
}) => {
    return (
        <div className="overflow-x-auto rounded-md bg-white px-6 border border-none shadow-md">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                    <tr className="">
                        <th className="w-[40px] py-3 px-4"></th>
                        <th className="py-3 px-4 font-bold text-left">Product Name</th>
                        <th className="py-3 px-4 font-bold text-left">Price</th>
                        <th className="py-3 px-4 font-bold text-left">Quantity</th>
                        <th className="py-3 px-4 font-bold text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-b">
                            {/* Remove button */}
                            <td
                                className="py-4 px-4 text-red-500 cursor-pointer text-lg align-middle"
                                onClick={() => onRemove(item.id)}
                            >
                                ×
                            </td>

                            {/* Product image + name */}
                            <td className="py-4 px-4 flex items-center gap-3 align-middle">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 object-cover rounded"
                                />
                                <span className="font-medium">{item.name}</span>
                            </td>

                            {/* Price */}
                            <td className="py-4 px-4 align-middle">Rs {item.price}</td>

                            {/* Quantity controls */}
                            <td className="">
                                <div className="flex items-center gap-2 p-1 w-[90px] border border-[#939393] rounded-full">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="w-6 h-6 rounded-full border bg-[#a1263d] border-[#a1263d] text-white"
                                        onClick={() =>
                                            onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                                        }
                                    >
                                        –
                                    </Button>
                                    <span className="w-6 text-center">{item.quantity}</span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="w-6 h-6 rounded-full border bg-[#a1263d] border-[#a1263d] text-white"
                                        onClick={() =>
                                            onQuantityChange(item.id, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </Button>
                                </div>
                            </td>

                            {/* Subtotal */}
                            <td className="py-4 px-4 font-semibold text-[#a1263d] align-middle">
                                Rs {item.price * item.quantity}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartCard
