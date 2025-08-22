import express from "express";
import upload from "../middleware/upload.js";
import { createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct} from "../controllers/productController.js";

const router = express.Router();

// now you can use .fields()
router.post(
  "/",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "brandIcon", maxCount: 1 },
    // frontend must send color images with unique field names, e.g. colorImage_material_color
  ]),
  createProduct
);

router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put(
  "/:id",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "brandIcon", maxCount: 1 },
  ]),
  updateProduct
);

export default router;
