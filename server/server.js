import express from "express";

import dotenv from "dotenv";
import cors from "cors";

import productRoute from "./routes/product/productRoute.js";
import orderRoute from "./routes/order/orderRoute.js";
import reviewRoute from "./routes/review/reviewRoute.js";
import faqRoute from "./routes/faq/faqRoute.js";
import categoryRoute from "./routes/category/categoryRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!! Server is Here!!");
});

app.use("/api/v1", productRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", reviewRoute);
app.use("/api/v1", faqRoute);
app.use("/api/v1", categoryRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
