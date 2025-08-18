import express from "express";

import {
  createCategory,
  deleteCategory,
  findAllCategory,
  updateCategory,
} from "../../controllers/category/categoryController.js";
import upload from "../../config/multer.js";

const router = express.Router();

router
  .route("/categories")
  .post(
    upload.fields([
      { name: "categoryImage", maxCount: 1 },
      { name: "cakeImage", maxCount: 1 },
    ]),
    createCategory
  )

  .get(findAllCategory);
router.route("/categories/:id").put(updateCategory).delete(deleteCategory);

export default router;
