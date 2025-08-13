import { GetAllCategory } from "@/utils/api/CakesCategoryApi";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: GetAllCategory,
    });
};
