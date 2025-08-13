import { CategoryResponse } from "@/types/CategoryTypes";
import ApiInstance from ".";

export const GetAllCategory = async () => {

    try {

        const response = await ApiInstance.get('/categories')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}
// this function api needs to be reconsidered and need maintenance
// export const AddCategory = async (data: CategoryResponse) => {

//     try {

//         const response = await ApiInstance.post('/categories',data)
//         return response?.data

//     } catch (error: any) {

//         throw error?.response?.data
//     }
// }


export const UpdateCategory = async (id: string, data: FormData) => {
    try {
        const response = await ApiInstance.put(`/categories/${id}`, data, {
            headers: data instanceof FormData ? {
                'Content-Type': 'multipart/form-data',
            } : undefined
        });
        return response?.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}



export const DelCategory = async (id: string) => {

    try {

        const response = await ApiInstance.delete(`/categories/${id}`)
        return response?.data

    } catch (error: any) {

        throw error?.response?.data

    }
}
