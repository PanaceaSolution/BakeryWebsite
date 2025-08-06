import express from "express";
import {
  createCustomCakeOrder,
  getAllCustomeCakeOrders,
  getSingleCustomOrder,
  updateCustomCakeOrderStatus,
} from "../../controllers/customCakeOrder/customeCakeOrderController.js";

const router = express.Router();

router
  .route("/custom-orders")
  .post(createCustomCakeOrder)
  .get(getAllCustomeCakeOrders);

router
  .route("/custom-orders/:id")
  .get(getSingleCustomOrder)
  .put(updateCustomCakeOrderStatus);

export default router;
