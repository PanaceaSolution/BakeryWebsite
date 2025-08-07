export interface Review {
    id: string;
    userId: string;
    message: string;
    rating: number;
    image: string;
    createdAt?: string;
}

export interface ReviewResponse {
    message: string;
    data: Review[];
}