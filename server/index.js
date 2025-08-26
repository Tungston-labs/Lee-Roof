import express from "express";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js"

import dotenv from "dotenv";
const app = express();
dotenv.config();
// Enable CORS
const corsOptions = {
  origin: "http://localhost:5173", // frontend
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // allow cookies/auth headers
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/leeRoof")
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(5000, () =>
      console.log("🚀 Server running on http://localhost:5000")
    );
  })
  .catch((err) => console.log("MongoDB connection error:", err));
