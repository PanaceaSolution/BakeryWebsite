export interface CustomCakeOrder {
    id: string;
    userId: string;
    shape: string;
    flavor: string;
    size: string;
    theme: string;
    messageOnCake: string;
    imageUpload: string | null;
    deliveryDate: string;  // ISO date string
    address: string;
    status: string;  // e.g., "pending"
    createdAt: string;  // ISO date string
}

export interface CustomCakeOrdersResponse {
    message: string;
    data: CustomCakeOrder[];
}

export interface CustomCakeOrderInput {
    userId: string;
    shape: string;
    flavor: string;
    size: string;
    theme: string;
    messageOnCake: string;
    imageUpload?: string | null;
    deliveryDate: string;
    address: string;
    status?: string; // optional when creating, maybe set by backend
}
