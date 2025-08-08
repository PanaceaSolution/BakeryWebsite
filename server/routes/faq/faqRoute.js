import express from "express";
import {
  createFaq,
  deleteFaq,
  getAllFaqs,
  updateFaq,
} from "../../controllers/faqs/faqController.js";

const router = express.Router();

router.route("/faqs").get(getAllFaqs).post(createFaq);
router.route("/faqs/:id").put(updateFaq).delete(deleteFaq);

export default router;
