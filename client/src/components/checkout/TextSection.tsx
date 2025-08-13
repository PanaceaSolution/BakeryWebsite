import React from 'react'
import TextBlock from '../features/shared/textblock/TextBlock'
import WhatsAppButton from './WhatsAppButton'

const TextSection: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-[1739px] w-full mx-auto gap-4">
        <TextBlock
          heading="Checkout - Time to Bake It Official!"
          subheading="Confirm your details and place your delicious order."
        />
        <WhatsAppButton />
      </div>
    </div>
  )
}

export default TextSection
