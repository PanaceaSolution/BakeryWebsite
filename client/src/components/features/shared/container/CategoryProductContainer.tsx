import React from "react";
import ProductCards from "../cards/ProductCards";
import { Product } from "@/types/CakeTypes";

interface CategoryProductContainerProps {
    data: Product[];
}

const CategoryProductContainer: React.FC<CategoryProductContainerProps> = ({
    data,
}) => {
    return (
        <div className="my-16 mx-9">
            <div
                className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        "
            >
                {data.map((item, index: number) => (
                    <ProductCards
                        key={item.id}
                        name={item.name}
                        price={item.price as number}
                        images={item.images}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryProductContainer;
