"use client"

import React, { useState, useMemo } from "react";

interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}

interface ShippingOption {
    label: string;
    price: number;
}

interface CheckoutCardProps {
    items: OrderItem[];
    discount: number;
    shippingOptions: ShippingOption[];
    onCheckout: () => void;
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({ items, discount, shippingOptions, onCheckout }) => {
    const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].price);

    const subtotal = useMemo(() => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [items]);

    const total = useMemo(() => {
        return subtotal - discount + selectedShipping;
    }, [subtotal, discount, selectedShipping]);

    return (
        <div className="border rounded-lg p-6 shadow-md bg-white h-[514px]">
            <h2 className="font-bold text-lg mb-4">Your Order</h2>
            <table className="w-full mb-4">
                <thead className="border-b">
                    <tr>
                        <th className="text-left py-2">Product</th>
                        <th className="text-right py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => (
                        <tr key={idx} className="border-b">
                            <td className="py-2">{item.name} x{item.quantity}</td>
                            <td className="text-right py-2">Rs {item.price * item.quantity}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="py-2">Discount</td>
                        <td className="text-right py-2">Rs {discount}</td>
                    </tr>
                    <tr className="font-bold">
                        <td className="py-2">Subtotal</td>
                        <td className="text-right py-2">Rs {subtotal}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Shipping</h3>
                {shippingOptions.map((option, idx) => (
                    <label key={idx} className="flex justify-between items-center mb-1 cursor-pointer">
                        <span>{option.label}</span>
                        <span>
                            Rs {option.price}{" "}
                            <input
                                type="radio"
                                name="shipping"
                                className="ml-2"
                                checked={selectedShipping === option.price}
                                onChange={() => setSelectedShipping(option.price)}
                            />
                        </span>
                    </label>
                ))}
            </div>

            <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span>Rs {total}</span>
            </div>

            
        </div>
    );
};

export default CheckoutCard;
