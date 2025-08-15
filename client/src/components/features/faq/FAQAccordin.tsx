'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqs } from '@/lib/api/faq';
import TextBlock from '../shared/textblock/TextBlock';

const FaqAccordion = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndices((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };

  return (
   <div
  className="
    mx-auto
    w-full max-w-[90%] lg:max-w-[1280px] xl:max-w-[1740px] 2xl:max-w-[1740px]
    min-h-screen
    p-4 sm:p-6 md:p-8 lg:p-12
    bg-transparent
    rounded-xl
   
    flex flex-col gap-8
    overflow-y-auto
  "
>

       <TextBlock
      heading="FAQs - Frequently Asked Questions"
      subheading="Find quick answers to the most common questions."
    />

      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);

        return (
          <div
            key={index}
            className={`
              rounded-xl
              bg-white
              transition-all duration-300 shadow-sm
              ${isOpen ? 'pb-6' : ''}
            `}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="
                w-full
                flex justify-between items-center
                p-4 sm:p-6
                text-left
                cursor-pointer
                focus:outline-none 
                select-none
              "
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-header-${index}`}
            >
              <span
                className={`font-medium ${
                  isOpen ? 'text-[#8C1C32]' : 'text-[#0000008C]'
                } text-base sm:text-lg`}
              >
                {faq.question}
              </span>
              <div className="ml-2 h-8 rounded-full  flex items-center justify-center">
                {isOpen ? (
                  <FaChevronUp className="text-white text-sm rounded- w-[53px] h-[53px] p-4 bg-[#8C1C32] rounded-full" />
                ) : (
                    <FaChevronDown className="text-[#0000008C] text-sm  w-[53px] h-[53px] p-4 rounded-ful" />
                )}
              </div>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className="px-4 sm:px-6 pb-6 text-gray-900 font-normal text-sm sm:text-base"
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
