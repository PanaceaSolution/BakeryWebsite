import { Product } from "@/types/CakeTypes";
import ApiInstance from ".";

export const GetAllProducts = async () => {

    try {

        const response = await ApiInstance.get('/products')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}

export const GetProductsByCategory = async (slug: string) => {
    try {
        const response = await ApiInstance.get(`/products/category/${slug}`);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};


export const AddProduct = async (data: Product) => {

    try {

        const response = await ApiInstance.post(`/products`, data)
        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}

export const GetProductById = async (id: string) => {
    try {
        const response = await ApiInstance.get(`/products/${id}`)
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const UpdateProduct = async (id: string, data: FormData) => {
    try {
        const response = await ApiInstance.put(`/products/${id}`, data, {
            headers: data instanceof FormData ? {
                'Content-Type': 'multipart/form-data',
            } : undefined
        });
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const DelProduct = async (id: string) => {

    try {

        const response = await ApiInstance.delete(`/products/${id}`)
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}
