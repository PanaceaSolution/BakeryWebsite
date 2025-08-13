export interface Order {
    id: string;
    userId: string;
    orderItems: string[]; // Adjust if orderItems are objects instead of strings
    totalAmount: number;
    paymentStatus: 'pending' | 'completed' | 'failed'; // Add more statuses if needed
    paymentMethod: 'COD' | 'Online' | string; // Adjust enum if needed
    deliveryAddress: string;
    orderStatus: 'pending' | 'processing' | 'delivered' | 'cancelled' | string;
    createdAt: string;
}

export interface OrderResponse {
    message: string;
    data: Order[];
}
