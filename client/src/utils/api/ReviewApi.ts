import { Review, ReviewResponse } from "@/types/ReviewTypes";
import ApiInstance from ".";

// Get all reviews
export const GetAllReviews = async (): Promise<ReviewResponse> => {
    try {
        const response = await ApiInstance.get<ReviewResponse>('/reviews');
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

// Add a review (input type)
export interface ReviewInput {
    userId: string;
    message: string;
    rating: number;
    image: string;
}

export const AddReview = async (data: ReviewInput): Promise<ReviewResponse> => {
    try {
        const response = await ApiInstance.post<ReviewResponse>('/reviews', data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

export const UpdateReview = async (id: string, data: ReviewInput): Promise<ReviewResponse> => {
    try {
        const response = await ApiInstance.put<ReviewResponse>(`/reviews/${id}`, data);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};

// Delete a review
export const DeleteReview = async (id: string): Promise<ReviewResponse> => {
    try {
        const response = await ApiInstance.delete<ReviewResponse>(`/reviews/${id}`);
        return response.data;
    } catch (error: any) {
        throw error?.response?.data;
    }
};
