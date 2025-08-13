// import prisma from "../../config/prismaClient.js";
import prisma from "../../config/prismaClient.js";

export const getAllFaqs = async (req, res) => {
  try {
    const faqs = await prisma.faq.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({
      message: "faq fetched successfully",
      data: faqs,
    });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
};
export const createFaq = async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({
      message: "Question and Answer are required",
    });
  }

  try {
    const faq = await prisma.faq.create({
      data: {
        question,
        answer,
      },
    });
    res.status(201).json({
      message: "faq created successfully",
      data: faq,
    });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ message: "Failed to create FAQ" });
  }
};

export const updateFaq = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res
      .status(400)
      .json({ message: "Question and Answer are required" });
  }

  try {
    const existingFaq = await prisma.faq.findUnique({ where: { id } });

    if (!existingFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    const updatedFaq = await prisma.faq.update({
      where: { id },
      data: { question, answer },
    });

    res.status(200).json({
      message: "faq updated successfully",
      data: updatedFaq,
    });
  } catch (error) {
    console.error("Error updating FAQ:", error);
    res.status(500).json({ message: "Failed to update FAQ" });
  }
};

export const deleteFaq = async (req, res) => {
  const { id } = req.params;

  try {
    const existingFaq = await prisma.faq.findUnique({ where: { id } });

    if (!existingFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    await prisma.faq.delete({ where: { id } });
    res.status(200).json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ message: "Failed to delete FAQ" });
  }
};
