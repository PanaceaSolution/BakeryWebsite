import { FAQResponse } from "@/types/FaqTypes";
import ApiInstance from ".";

// Fetch all FAQs
export const GetAllFAQs = async (): Promise<FAQResponse> => {
    try {
        const response = await ApiInstance.get<FAQResponse>("/faqs");
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

export interface FAQInput {
    question: string;
    answer: string;
}

export const AddFAQ = async (data: FAQInput): Promise<FAQResponse> => {
    try {
        const response = await ApiInstance.post<FAQResponse>("/faqs", data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

// Update an existing FAQ
export const UpdateFAQ = async (
    id: string,
    data: FAQInput
): Promise<FAQResponse> => {
    try {
        const response = await ApiInstance.put<FAQResponse>(`/faqs/${id}`, data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

// Delete an FAQ
export const DelFAQ = async (id: string): Promise<FAQResponse> => {
    try {
        const response = await ApiInstance.delete<FAQResponse>(`/faqs/${id}`);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};
