'use client'
import Banner from "@/components/features/shared/banner/Banner";
import HomeProductsComponent from "@/components/features/shared/cards/ProductsContainer";
import { useAllProducts } from "@/hooks/productsHooks/useProductQueries";
import { useGetCategories } from "@/hooks/categoryHooks/useCategoryQueries";
import { Product } from "@/types/CakeTypes";
import { useEffect } from "react";

export default function Home() {
    const { data: allProductsData, isLoading: isProductsLoading } = useAllProducts();
    const { data: allCategoriesData } = useGetCategories();

    const categories = allCategoriesData?.data ?? [];

    interface Category {
        slug: string;
        products: Product[];
    }

    // Utility function to get products by category slug
    const getProductsByCategory = (slug: string) => {
        return categories.find((category: Category) => category.slug === slug)?.products || [];
    };


    useEffect(() => {
        if (typeof window === "undefined") return;

        const sectionId = window.location.hash.substring(1);
        if (!sectionId) return;

        const handleScrollAfterLoad = () => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        // Wait for page load + slider init + images
        window.addEventListener("load", handleScrollAfterLoad);

        return () => {
            window.removeEventListener("load", handleScrollAfterLoad);
        };
    }, []);

    return (
        <div>
            {/* Special Offers Section */}
            <HomeProductsComponent
                discount={true}
                title="This Week’s Special Offers"
                subTitle="Don’t Miss Out — Limited-Time Deals Just for You!"
                link="special-offer"
                data={allProductsData?.products ?? []}
                isLoading={isProductsLoading}
            />

            {/* Birthday Cakes Section */}
            <Banner
                image="/assets/HeroSection/two.png"
                heading="Make Their Day Memorable"
                subtext="Free candles and message card on all birthday cakes"
                buttonText="Shop Birthday Cakes"
                buttonLink="/category/birthday-cake"
            />
            <HomeProductsComponent
                title="Birthday Cakes - Make Their Day Memorable"
                subTitle="Free candles and message card on all birthday cakes"
                link="category/birthday-cake"
                data={getProductsByCategory("birthday-cake")}
            />

            {/* Model Cakes Section */}
            <Banner
                image="/assets/HeroSection/three.png"
                heading="Modal Cakes: Fashionably Delicious"
                subtext="Introducing our exclusive collection of limited-edition, designer-inspired cakes."
                buttonText="Order Limited Edition Now"
                buttonLink="/category/model-cake"
            />
            <HomeProductsComponent
                title="Model Cakes - Trendiest Cakes in Town"
                subTitle="Bold shapes. Artistic finishes. Limited-edition cakes for trendsetters and taste-makers."
                link="category/model-cake"
                data={getProductsByCategory("model-cake")}
            />

            {/* Wedding Cakes Section */}
            <Banner
                image="/assets/HeroSection/five.png"
                heading="Because Every Love Story Deserves a Beautiful Cake"
                subtext="From minimal chic to royal grandeur — we craft your cake, your way."
                buttonText="Design Your Dream Cake"
                buttonLink="/category/wedding-cake"
            />
            <HomeProductsComponent
                title="Wedding Cakes - Say ‘I Do’ with Sweetness 💍"
                subTitle="Elegant, handcrafted wedding cakes made to match the beauty of your big day."
                link="category/wedding-cake"
                data={getProductsByCategory("wedding-cake")}
            />

            {/* Baby Shower Cakes Section */}
            <Banner
                image="/assets/HeroSection/four.png"
                heading="A Slice of Joy for Your Little One"
                subtext="From pastel dreams to tiny toes, our baby shower cakes are as precious as the moment itself."
                buttonText="Celebrate with Cakes"
                buttonLink="/category/baby-shower-cake"
            />
            <HomeProductsComponent
                title="Baby Shower Cakes - Cakes for the Cutest Celebration"
                subTitle="Charming designs, soft pastel colors, and sweet details made for the little one on the way."
                link="category/baby-shower-cake"
                data={getProductsByCategory("baby-shower-cake")}
            />

            {/* Pastries Section */}
            <Banner
                image="/assets/HeroSection/seven.png"
                heading="Pastry Perfection in Every Bite"
                subtext="Sweet, soft, and sensational — just the way pastries should be."
                buttonText="Shop Pasteries Now !"
                buttonLink="/category/pastries-cakes"
            />
            <HomeProductsComponent
                title="Pastries- Tiny Treats, Big Joys"
                subTitle="Craving something sweet? Explore our handcrafted pastries."
                link="category/pastries-cake"
                data={getProductsByCategory("pastries-cake")}
            />

            {/* Bakery Items Section */}
            <Banner
                image="/assets/HeroSection/six.png"
                heading="Your Daily Dose of Delicious"
                subtext="Craving a quick bite or a cozy treat? Our bakery items have something for everyone."
                buttonText="Order Fresh Bakes"
                buttonLink="/category/bakery-items-cakes"
            />
            <HomeProductsComponent
                title="Bakery Items - Baked to Perfection"
                subTitle="Where tradition meets taste — discover our premium bakery range crafted with love and skill."
                link="category/bakery-items-cake"
                data={getProductsByCategory("bakery-items-cake")}
            />

            {/* Other Banners */}
            <Banner
                image="/assets/HeroSection/y.png"
                heading="Your Cake, Your Rules"
                subtext="Stack it high, shape it bold, flavor it your way — custom cakes made just for you."
                buttonText="Create Your Cake Now"
                buttonLink="#customize"
            />
            <Banner
                image="/assets/HeroSection/eight.png"
                heading="Delivered with Love & Care"
                subtext="From oven to doorstep — fresh, safe, and right on time for your celebration."
                buttonText="Schedule a Delivery"
                buttonLink="/"
            />

        </div>
    );
}
