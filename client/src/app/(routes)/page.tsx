import DeliveryInfoContainer from "@/components/features/deliveryinfo/DeliveryInfoContainer";
import FaqAccordion from "@/components/features/faq/FAQAccordin";

import HeroSection from "@/components/features/herosection/HeroSection";
import InfoTiles from "@/components/features/infotiles/InfoTiles";
import Banner from "@/components/features/shared/banner/Banner";
import HomeProductsComponent from "@/components/features/shared/cards/ProductsContainer";

//dynamically data will be fetched here
const data = {
  "products": [
    {
      "id": "89b708ba-fe67-4f96-ade3-104e85691a7a",
      "name": "ORANGE",
      "description": "Black forest",
      "price": "200",
      "images": [],
      "tags": [
        "Cakes"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-08-05T07:04:34.991Z",
      "categoryId": "b49c87ce-0418-4318-8fce-4becd5f442c6"
    },
    {
      "id": "89b708ba-fe67-4f96-ade3-104e85691a7a",
      "name": "ORANGE",
      "description": "Black forest",
      "price": "200",
      "images": [],
      "tags": [
        "Cakes"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-08-05T07:04:34.991Z",
      "categoryId": "b49c87ce-0418-4318-8fce-4becd5f442c6"
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
    {
      "id": "a0eadb0a-0a72-4b7d-9900-0035bd1e8a43",
      "name": "mango cake",
      "description": "This is testing",
      "price": "200",
      "images": [],
      "tags": [
        "groceries"
      ],
      "available": true,
      "isFeatured": false,
      "createdAt": "2025-07-21T10:14:33.605Z",
      "categoryId": null
    },
  ]
}


export default function Home() {
  return (

    <div>
      <HomeProductsComponent title={"This Week’s Special Offers"} subTitle="Don’t Miss Out — Limited-Time Deals Just for You!" link="special-offer" data={data.products} />

      {/* First Banner */}
      <Banner
        image="/assets/HeroSection/two.png"
        heading="Make Their Day Memorable"
        subtext="Free candles and message card on all birthday cakes"
        buttonText="Shop Birthday Cakes"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Birthday Cakes - Make Their Day Memorable"} subTitle="Free candles and message card on all birthday cakes" link="category/birthday-cake" data={data.products} />

      {/* Second Banner */}
      <Banner
        image="/assets/HeroSection/three.png"
        heading="Modal Cakes: Fashionably Delicious"
        subtext="Introducing our exclusive collection of limited-edition, designer-inspired cakes."
        buttonText="Order Limited Edition Now"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Modal Cakes - Trendiest Cakes in Town"} subTitle="Bold shapes. Artistic finishes. Limited-edition cakes for trendsetters and taste-makers." link="category/model-cake" data={data.products} />


      {/* Third Banner */}

      <Banner
        image="/assets/HeroSection/five.png"
        heading="Because Every Love Story Deserves a Beautiful Cake"
        subtext="From minimal chic to royal grandeur — we craft your cake, your way."
        buttonText="Design Your Dream Cake"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Wedding Cakes - Say ‘I Do’ with Sweetness 💍"} subTitle="Elegant, handcrafted wedding cakes made to match the beauty of your big day." link="category/wedding-cake" data={data.products} />

      <Banner
        image="/assets/HeroSection/four.png"
        heading="A Slice of Joy for Your Little One"
        subtext="From pastel dreams to tiny toes, our baby shower cakes are as precious as the moment itself."
        buttonText="Celebrate with Cakes"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Baby Shower Cakes - Cakes for the Cutest Celebration"} subTitle="Charming designs, soft pastel colors, and sweet details made for the little one on the way." link="category/baby-shower-cake" data={data.products} />

      {/* Fourth Banner */}
      <Banner
        image="/assets/HeroSection/seven.png"
        heading="Pastry Perfection in Every Bite"
        subtext="Sweet, soft, and sensational — just the way pastries should be."
        buttonText="Shop Pasteries Now !"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Pastries- Tiny Treats, Big Joys"} subTitle="Craving something sweet? Explore our handcrafted pastries." link="category/pastries-cake" data={data.products} />

      {/* Fifth Banner */}
      <Banner
        image="/assets/HeroSection/six.png"
        heading="Your Daily Dose of Delicious"
        subtext="Craving a quick bite or a cozy treat? Our bakery items have something for everyone."
        buttonText="Order Fresh Bakes"
        buttonLink="/birthday-cakes"
      />
      <HomeProductsComponent title={"Bakery Items - Baked to Perfection"} subTitle="Where tradition meets taste — discover our premium bakery range crafted with love and skill." link="category/bakery-items-cake" data={data.products} />

      {/*Sixth Banner*/}

      {/*Seventh Banner*/}
      <Banner
        image="/assets/HeroSection/y.png"
        heading="Your Cake, Your Rules"
        subtext="Stack it high, shape it bold, flavor it your way — custom cakes made just for you."
        buttonText="Create Your Cake Now"
        buttonLink="/birthday-cakes"
      />

      {/*Seventh Banner*/}
      <Banner
        image="/assets/HeroSection/eight.png"
        heading="Delivered with Love & Care"
        subtext="From oven to doorstep — fresh, safe, and right on time for your celebration."
        buttonText="Schedule a Delivery"
        buttonLink="/birthday-cakes"
      />

      <InfoTiles />
      <DeliveryInfoContainer />
      <FaqAccordion />

    </div>

  );
}
