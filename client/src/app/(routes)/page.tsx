import SliderSection from "@/components/features/home/Sliders/SliderSection";
import HomeProductsComponent from "@/components/features/shared/cards/ProductsContainer";

export default function Home() {
  return (
    <div className="">
      <div className="mx-4">

        <SliderSection />
        <HomeProductsComponent title="This Week’s Special Offers" subTitle="Don’t Miss Out — Limited-Time Deals Just for You!" link="babycake"/>
      </div>
    </div>
  );
}
