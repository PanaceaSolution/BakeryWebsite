import TextBlock from '@/components/features/shared/textblock/TextBlock'
import React from 'react'

function page() {
  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-[1739px] w-full mx-auto gap-4">
          <TextBlock
            heading="My Cart - Your Sweet Picks"
            subheading="Everything you’ve added for your celebration is right here!"
          />
        </div>
      </div>
    </div>
  )
}

export default page