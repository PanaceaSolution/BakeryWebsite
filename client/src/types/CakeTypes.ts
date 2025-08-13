export interface Product {
    id: string;
    name: string;
    description: string;
    price: string | number;
    images: string[]; // Assuming images are URLs or paths (string). Adjust if different.
    tags: string[];
    available: boolean;
    isFeatured: boolean;
    createdAt: string;
    categoryId: string;
}

export interface ProductResponse {
    products: Product[];
}
