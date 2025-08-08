import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
} from "../../controllers/product/productController.js";

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/products/category/:slug", getProductsByCategory);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
