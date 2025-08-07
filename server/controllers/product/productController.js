import prisma from "../../config/prismaClient.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      categoryId,
      images,
      tags,
      available,
      isFeatured,
    } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
      return res
        .status(400)
        .json({ message: "Price must be a valid number greater than 0" });
    }

    const categoryExists = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found" });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        categoryId,
        images: images ?? [],
        tags: tags ?? [],
        available: available ?? true,
        isFeatured: isFeatured ?? false,
      },
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found !!" });
    }

    res
      .status(200)
      .json({ message: "Product fetched successfully !!", data: product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      categoryId,
      images,
      tags,
      available,
      isFeatured,
    } = req.body;

    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (price !== undefined && (isNaN(price) || parseFloat(price) <= 0)) {
      return res
        .status(400)
        .json({ message: "Price must be a valid number greater than 0" });
    }

    if (categoryId) {
      const categoryExists = await prisma.category.findUnique({
        where: { id: categoryId },
      });
      if (!categoryExists) {
        return res.status(404).json({ message: "Category not found" });
      }
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: name ?? product.name,
        description: description ?? product.description,
        price: price !== undefined ? parseFloat(price) : product.price,
        categoryId: categoryId ?? product.categoryId,
        images: images ?? product.images,
        tags: tags ?? product.tags,
        available: available ?? product.available,
        isFeatured: isFeatured ?? product.isFeatured,
      },
    });

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    console.log("Fetching products for category:", slug);
    if (!slug) {
      return res.status(400).json({
        message: "Category slug is required",
      });
    }
    const category = await prisma.category.findFirst({
      where: { slug },
      include: { products: true },
    });
    if (!category) {
      return res.status(404).json({
        message: "incorrect Slug or Category not found",
      });
    }
    res.status(200).json({
      message: "Products fetched successfully",
      products: category.products,
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
