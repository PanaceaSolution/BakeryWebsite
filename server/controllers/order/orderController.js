import prisma from "../../config/prismaClient.js";

export const createOrder = async (req, res) => {
  const {
    userId,
    orderItems,
    totalAmount,
    paymentStatus,
    paymentMethod,
    deliveryAddress,
    orderStatus,
  } = req.body;

  if (!userId || !orderItems || !totalAmount || !deliveryAddress) {
    return res.status(400).json({
      message:
        "Please provide userId, orderItems, totalAmount, and deliveryAddress",
    });
  }
  if (Array.isArray(orderItems) && orderItems.length === 0) {
    return res.status(400).json({
      message: "Order must contain at least one item",
    });
  }

  if (totalAmount <= 0) {
    return res.status(400).json({
      message: "Total amount must be greater than zero",
    });
  }
  try {
    const order = await prisma.order.create({
      data: {
        userId,
        orderItems,
        totalAmount,
        paymentStatus,
        paymentMethod,
        deliveryAddress,
        orderStatus,
      },
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const findOrder = await prisma.order.findMany();

    if (findOrder.length === 0) {
      return res.status(404).json({
        message: "No orders found",
      });
    }

    res.status(200).json({
      message: "Orders fetched successfully",
      data: findOrder,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Order ID is required",
    });
  }

  try {
    const findOrder = await prisma.order.findUnique({
      where: {
        id: id,
      },
    });

    if (!findOrder) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order fetched successfully",
      order: findOrder,
    });
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
