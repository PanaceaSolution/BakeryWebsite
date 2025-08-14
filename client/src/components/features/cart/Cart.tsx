'use client'

import React, { useMemo } from 'react';
import CartCard from './CartCard';
import CheckoutCard from './CartCheckoutCard';
import useCartStore from '@/store/cartStore';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart } = useCartStore();

    const handleQuantityChange = (id: string, newQuantity: number) => {
        updateQuantity(id, newQuantity);
    };

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const subtotal = useMemo(
        () => cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0),
        [cart]
    );

    const navigate = useRouter()


    return (
        <div className="p-6 flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
                <CartCard
                    items={cart.map(item => ({
                        id: String(item.id),
                        name: item.name,
                        price: Math.ceil(item.price),
                        image: item.images[0],
                        quantity: item.quantity || 1
                    }))}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                />
            </div>

            <div className="w-full lg:w-[350px]">
                <CheckoutCard
                    subtotal={subtotal}
                    discount={0}
                    shippingOptions={[
                        { label: 'Inside Ringroad KTM', price: 50 },
                        { label: 'Outside Ringroad / Bhaktapur / Lalitpur', price: 150 }
                    ]}
                    onCheckout={() => navigate.push('/checkout')}
                />
            </div>
        </div>
    );
}
