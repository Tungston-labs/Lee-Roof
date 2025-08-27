import express from "express";
import upload from "../middleware/upload.js";
import { createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct} from "../controllers/productController.js";
import { adminAuth } from "../middleware/jwtAuthentication.js";

const router = express.Router();

router.post(
  "/",
upload.single("brandIcon"),
  createProduct
);



router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", adminAuth,deleteProduct);
router.put(
  "/:id",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "brandIcon", maxCount: 1 },
  ]),
  adminAuth, updateProduct
);

export default router;
