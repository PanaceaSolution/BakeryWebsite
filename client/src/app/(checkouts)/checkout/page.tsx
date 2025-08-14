import CheckoutCard from '@/components/features/cart/CartCheckoutCard'
import { BillingForm } from '@/components/features/checkout/BillingForm'
import CheckOut from '@/components/features/checkout/CheckOut'
import TextSection from '@/components/features/checkout/TextSection'
import React from 'react'

function page() {
    return (
        <React.Fragment>

            <TextSection />
            <CheckOut />
        </React.Fragment>
    )
}

export default page