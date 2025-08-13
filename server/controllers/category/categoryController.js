import prisma from "../../config/prismaClient.js";

export const createCategory = async (req, res) => {
  const { name, slug, image, categoryImage, description } = req.body;
  if (!name || !slug || !image || !description) {
    return res.status(400).json({
      message: "Please provide name, slug, and image of category",
    });
  }

  try {
    const existingCategory = await prisma.category.findFirst({
      where: {
        OR: [{ name }, { slug }],
      },
    });

    if (existingCategory) {
      return res.status(400).json({
        message:
          "This category already exists. Please choose a unique category name or slug.",
      });
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        image,
        categoryImage,
        description,
      },
    });

    res.status(201).json({
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const findAllCategory = async (req, res) => {
  try {
    const allCategory = await prisma.category.findMany({
      include: {
        products: true,
      },
    });

    if (allCategory.length === 0) {
      return res.status(404).json({
        message: "No categories found",
      });
    }

    res.status(200).json({
      message: "Categories fetched successfully",
      data: allCategory,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, slug, image } = req.body;

  if (!id) {
    return res.status(400).json({
      message: "Please provide a category ID",
    });
  }

  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });

    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found with that ID",
      });
    }

    if (!name && !slug && !image) {
      return res.status(400).json({
        message: "Please provide at least one field to update",
      });
    }

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: { name, slug, image },
    });

    res.status(200).json({
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const foundCategory = await prisma.category.findUnique({
      where: { id },
    });

    if (!foundCategory) {
      return res.status(404).json({
        message: "No category found to delete",
      });
    }

    await prisma.category.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
