import express from "express";

import {
  createCategory,
  deleteCategory,
  findAllCategory,
  updateCategory,
} from "../../controllers/category/categoryController.js";

const router = express.Router();

router.route("/categories").post(createCategory).get(findAllCategory);
router.route("/categories/:id").put(updateCategory).delete(deleteCategory);

export default router;
