import prisma from "../../config/prismaClient.js";

export const createCustomCakeOrder = async (req, res) => {
  const {
    userId,
    shape,
    flavor,
    size,
    theme,
    messageOnCake,
    imageUpload,
    deliveryDate,
    status,
    address,
  } = req.body;

  if (!userId || !shape || !flavor || !size || !deliveryDate || !address) {
    return res.status(400).json({
      message:
        "Please provide all required fields: userId, shape, flavor, size, deliveryDate, address",
    });
  }

  if (isNaN(new Date(deliveryDate))) {
    return res.status(400).json({
      message: "Invalid delivery date",
    });
  }

  try {
    const order = await prisma.customCakeOrder.create({
      data: {
        userId,
        shape,
        flavor,
        size,
        theme,
        messageOnCake,
        imageUpload,
        deliveryDate: new Date(deliveryDate),
        status,
        address,
      },
    });

    res.status(201).json({
      message: "Custom cake order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating custom cake order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCustomeCakeOrders = async (req, res) => {
  try {
    const allCustomeOrder = await prisma.customCakeOrder.findMany();

    if (allCustomeOrder.length === 0) {
      return res.status(404).json({
        message: "No custom cake orders found",
      });
    }

    res.status(200).json({
      message: "Custom cake orders fetched successfully",
      data: allCustomeOrder,
    });
  } catch (error) {
    console.error("Error fetching all custom cake orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getSingleCustomOrder = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Order ID is required",
    });
  }

  try {
    const findCake = await prisma.customCakeOrder.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCake) {
      return res.status(404).json({
        message: "No order found with the provided ID",
      });
    }

    res.status(200).json({
      message: "Custom cake order fetched successfully",
      data: findCake,
    });
  } catch (error) {
    console.error("Error fetching custom cake order by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCustomCakeOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!id || !status) {
    return res.status(400).json({
      message: "Please provide id and status",
    });
  }

  try {
    const order = await prisma.customCakeOrder.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const updatedOrder = await prisma.customCakeOrder.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      message: "Custom cake order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating custom cake order status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
