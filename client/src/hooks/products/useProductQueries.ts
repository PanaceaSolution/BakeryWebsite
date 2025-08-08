
import { GetAllProducts, GetProductById, GetProductsByCategory } from "@/utils/api/CakesApi";
import { useQuery } from "@tanstack/react-query";

// ✅ All products
export const useAllProducts = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: GetAllProducts,
    });

// ✅ Product by ID
export const useProductById = (id: string) =>
    useQuery({
        queryKey: ["product", id],
        queryFn: () => GetProductById(id),
        enabled: !!id,
    });

// ✅ Products by Category
export const useProductsByCategory = (slug: string) =>
    useQuery({
        queryKey: ["products-category", slug],
        queryFn: () => GetProductsByCategory(slug),
        enabled: !!slug,
    });
