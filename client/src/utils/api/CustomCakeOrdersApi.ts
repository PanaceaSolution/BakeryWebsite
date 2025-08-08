import { CustomCakeOrder, CustomCakeOrderInput, CustomCakeOrdersResponse } from "@/types/CustomCakeOrdersTypes";
import ApiInstance from ".";

export const GetAllCustomOrders = async (): Promise<CustomCakeOrdersResponse> => {
    try {
        const response = await ApiInstance.get('/custom-orders');
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const GetCustomOrderById = async (id: string): Promise<{ message: string; data: CustomCakeOrder }> => {
    try {
        const response = await ApiInstance.get(`/custom-orders/${id}`);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const AddCustomOrder = async (data: CustomCakeOrderInput): Promise<{ message: string; data: CustomCakeOrder }> => {
    try {
        const response = await ApiInstance.post('/custom-orders', data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}

export const UpdateCustomOrder = async (id: string, data: Partial<CustomCakeOrderInput>): Promise<{ message: string; data: CustomCakeOrder }> => {
    try {
        const response = await ApiInstance.put(`/custom-orders/${id}`, data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
}