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

    console.log(items.map((e) => (e)))
    return (
        <div className="overflow-x-auto rounded-md px-6 border-none shadow-md w-full">
            <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                <thead className=" hidden md:table-header-group border-b-gray-300 border-b-1">
                    <tr>
                        <th className="py-3 px-4"></th>
                        <th className="py-3 px-4 font-bold text-left text-[20px]">Product Name</th>
                        <th className="py-3 px-4 font-bold text-left text-[20px]">Price</th>
                        <th className="py-3 px-4 font-bold text-left text-[20px]">Quantity</th>
                        <th className="py-3 px-4 font-bold text-left text-[20px]">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr
                            key={item.id}
                            className={`md:table-row block md:border-none mb-4 md:mb-0 
                ${index !== items.length - 1 ? 'border-b border-gray-300' : ''}`}
                        >
                            {/* Remove button */}
                            <td
                                className="py-4 px-4 text-red-500 cursor-pointer text-lg align-middle md:table-cell"
                                onClick={() => onRemove(item.id)}
                            >
                                ×
                            </td>

                            {/* Product image + name */}
                            <td className="py-4 px-4 flex md:items-center gap-3 align-middle flex-col sm:flex-row md:table-cell">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 object-cover rounded"
                                />
                                <span className="font-medium">{item.name}</span>
                            </td>

                            {/* Price */}
                            <td className="py-4 px-4 align-middle md:table-cell">
                                Rs {item.price}
                            </td>

                            {/* Quantity controls */}
                            <td className="py-4 px-4 align-middle md:table-cell">
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
                            <td className="py-4 px-4 font-semibold text-[#a1263d] align-middle md:table-cell">
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
