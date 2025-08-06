import express from "express";
import {
  createOrder,
  getAllOrder,
  getOrderById,
} from "../../controllers/order/orderController.js";

const router = express.Router();

router.route("/orders").post(createOrder).get(getAllOrder);
router.route("/orders/:id").get(getOrderById);

export default router;
