import DeliveryInfoContainer from '@/components/features/deliveryinfo/DeliveryInfoContainer'
import FaqAccordion from '@/components/features/faq/FAQAccordin'
import Home from '@/components/features/home/Home'
import InfoTiles from '@/components/features/infotiles/InfoTiles'
import React from 'react'

const page = () => {
  return (
    <>
      <Home />

      {/* Info & Footer Sections */}
      <InfoTiles />
      <DeliveryInfoContainer />

      <div id="faqs">
        <FaqAccordion />
      </div>


    </>
  )
}

export default page