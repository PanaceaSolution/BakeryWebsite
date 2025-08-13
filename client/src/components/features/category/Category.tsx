"use client"

import React from "react";
import CategoryProductContainer from "@/components/features/shared/container/CategoryProductContainer";
import { Product } from "@/types/CakeTypes";
import { useParams } from "next/navigation";
import { useProductsByCategory } from "@/hooks/productsHooks/useProductQueries";

function Category() {
    const { id } = useParams()
    console.log(id)


    const { data, isLoading } = useProductsByCategory(id as string)
    console.log("category data", data)
    const products: Product[] = data?.products;

    return (
        <React.Fragment>
            <CategoryProductContainer data={products} isLoading={isLoading} />
        </React.Fragment>
    );
}

export default Category;
