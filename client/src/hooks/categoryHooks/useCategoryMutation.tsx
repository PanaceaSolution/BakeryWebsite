import { DelCategory, UpdateCategory } from "@/utils/api/CakesCategoryApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// export const useAddCategory = () => {
//     const queryClient = useQueryClient();
//     return useMutation({
//         mutationFn: AddCategory,
//         onSuccess: () => {
//             toast.success("Category added successfully!");
//             queryClient.invalidateQueries({ queryKey: ["categories"] });
//         },
//         onError: (error: any) => {
//             toast.error(error?.message || "Failed to add category");
//         },
//     });
// };

export const useUpdateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: FormData }) =>
            UpdateCategory(id, data),
        onSuccess: () => {
            toast.success("Category updated successfully!");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError: (error: any) => {
            toast.error(error?.message || "Failed to update category");
        },
    });
};

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: DelCategory,
        onSuccess: () => {
            toast.success("Category deleted successfully!");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError: (error: any) => {
            toast.error(error?.message || "Failed to delete category");
        },
    });
};
