import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import productRoute from "./routes/product/productRoute.js";
import orderRoute from "./routes/order/orderRoute.js";
import reviewRoute from "./routes/review/reviewRoute.js";
import faqRoute from "./routes/faq/faqRoute.js";
import categoryRoute from "./routes/category/categoryRoute.js";
import customeCakeRoute from "./routes/customCakeOrderRoute/customeCakeRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
});
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello!! Server is Here!!");
});

app.use("/api/v1", productRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", reviewRoute);
app.use("/api/v1", faqRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", customeCakeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
