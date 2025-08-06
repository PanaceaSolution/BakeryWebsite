import FaqAccordion from "@/components/features/faq/FAQAccordin";

import HeroSection from "@/components/features/herosection/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   
      <div>  
        <HeroSection/>
        <FaqAccordion/>
      </div>
    
  );
}
