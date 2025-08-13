import { Order } from "@/types/OrdersTypes";
import ApiInstance from ".";

export const GetAllOrders = async () => {

    try {

        const response = await ApiInstance.get('/orders')
        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}

export const GetOrderDetailById = async (id: string) => {

    try {

        const response = await ApiInstance.get(`/orders/${id}`)

        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}

export const AddOrder = async (data: Order) => {

    try {

        const response = await ApiInstance.post(`/orders`,data)

        return response?.data

    } catch (error: any) {

        throw error?.response?.data
    }
}