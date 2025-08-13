import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProduct, DelProduct, UpdateProduct } from "@/utils/api/CakesApi";
import toast from "react-hot-toast";

// Add new product
export const useAddProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: AddProduct,
        onSuccess: () => {
            toast.success("Product added successfully!");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (err: any) => toast.error(err?.message || "Failed to add product"),
    });
};

// Update existing product
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: FormData }) =>
            UpdateProduct(id, data),
        onSuccess: () => {  
            toast.success("Product updated successfully!");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (err: any) => toast.error(err?.message || "Failed to update product"),
    });
};

// Delete product
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => DelProduct(id),
        onSuccess: () => {
            toast.success("Product deleted successfully!");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (err: any) => toast.error(err?.message || "Failed to delete product"),
    });
};
