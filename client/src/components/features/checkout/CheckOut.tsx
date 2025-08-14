'use client'

import React, { useMemo } from 'react'
import CheckoutCard from './CheckOutCard'
import { BillingForm } from './BillingForm'
import useCartStore from '@/store/cartStore'

const CheckOut = () => {
    const { cart, checkout } = useCartStore()

    const subtotal = useMemo(
        () => cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0),
        [cart]
    )

    return (
        <div className="flex flex-col md:flex-row mx-9 justify-between mb-16 gap-6">
            <BillingForm />

            <CheckoutCard
                items={cart.map(item => ({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity || 1
                }))}
                discount={0}
                shippingOptions={[
                    { label: "Inside Ringroad KTM", price: 50 },
                    { label: "Outside Ringroad / Bhaktapur / Lalitpur", price: 100 },
                ]}
                onCheckout={checkout}
            />
        </div>
    )
}

export default CheckOut
