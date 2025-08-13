import express from "express";
import {
  approveReview,
  createReview,
  deleteReview,
  getAllReviews,
  getApprovedReviews,
} from "../../controllers/review/reviewController.js";

const router = express.Router();

router.route("/reviews").post(createReview).get(getAllReviews);
router.route("/reviews/approved").get(getApprovedReviews);
router.route("/reviews/:id").delete(deleteReview);
router.route("/reviews/:id/approved").put(approveReview);

export default router;
