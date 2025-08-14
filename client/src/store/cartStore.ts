import { create } from "zustand";
import toast from "react-hot-toast";

export interface Product {
    id: string | number | undefined;
    name: string;
    price: number;
    images: string[];
    quantity?: number;
}

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    updateQuantity: (id: string, quantity: number) => void;
    getTotal: () => number;
    checkout: () => Promise<void>;
}

const useCartStore = create<CartState>((set, get) => ({
    cart: [],

    addToCart: (product) => {
        const { cart } = get();
        const exists = cart.find((p) => p.id === product.id);
        if (exists) {
            toast.error("Product already exists in cart!");
            return;
        }

        toast.success("Product added to cart!");
        set({ cart: [...cart, { ...product, quantity: 1 }] });
    },

    removeFromCart: (id) => {
        set((state) => ({
            cart: state.cart.filter((item) => String(item.id) !== id)
        }));
    },

    clearCart: () => set({ cart: [] }),

    updateQuantity: (id, quantity) => {
        if (quantity < 1) return; // prevent quantity < 1
        set((state) => ({
            cart: state.cart.map((item) =>
                String(item.id) === id ? { ...item, quantity } : item
            )
        }));
    },

    getTotal: () => {
        const { cart } = get();
        const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
        return Number(total.toFixed(2));
    },

    checkout: async () => {
        const { cart, clearCart, getTotal } = get();

        if (cart.length === 0) {
            toast.error("Cart is empty!");
            return;
        }

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cart, total: getTotal() }),
            });

            if (!response.ok) throw new Error("Checkout failed");

            toast.success("Checkout successful!");
            clearCart();
        } catch (error) {
            console.error(error);
            toast.error("Checkout failed. Please try again.");
        }
    }
}));

export default useCartStore;
