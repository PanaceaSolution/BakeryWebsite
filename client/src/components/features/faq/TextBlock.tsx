import React from "react";

interface TextBlockProps {
  heading: string;
  subheading: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ heading, subheading }) => {
  return (
    <div className="w-full max-w-screen-xl px-4 py-4 flex flex-col justify-center items-start">
      <h2 className="font-poppins font-semibold text-[24px] leading-[36px] text-black">
        {heading}
      </h2>
      <p className="font-poppins font-normal text-[20px] leading-[30px] text-black mt-1">
        {subheading}
      </p>
    </div>
  );
};

export default TextBlock;
