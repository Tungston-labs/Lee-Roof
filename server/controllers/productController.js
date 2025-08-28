import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { productName, description, brandName, materials } = req.body;
       console.log("REQ.BODY:", req.body);

    const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

    let brandIcon = null;
    if (req.file) {
      brandIcon = `${BASE_URL}/uploads/${req.file.filename}`;
    }

    let parsedMaterials = [];
    if (materials) {
      parsedMaterials = JSON.parse(materials);

      parsedMaterials.forEach((material) => {
        material.thicknesses.forEach((thickness) => {
          thickness.colors.forEach((color) => {
            color.image = color.image || null;
          });
        });
      });
    }

    const product = new Product({
      productName,
      description,
      brandName,
      brandIcon,
      materials: parsedMaterials,
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("createProduct error:", error);
    res.status(500).json({ error: error.message });
  }
};


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update Product

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, description, brandName, materials } = req.body;

    console.log("REQ.BODY (UPDATE):", req.body);

    const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

    // Handle brand icon (Multer -> req.files.brandIcon[0])
    let brandIcon = null;
    if (req.files?.brandIcon?.[0]) {
      brandIcon = `${BASE_URL}/uploads/${req.files.brandIcon[0].filename}`;
    }

    // Parse materials
    let parsedMaterials = [];
    if (materials) {
      parsedMaterials = JSON.parse(materials);

      parsedMaterials.forEach((material) => {
        material.thicknesses.forEach((thickness) => {
          thickness.colors.forEach((color) => {
            const fieldKey = `colorImage_${material.materialName}_${color.colorName}`;
            if (req.files?.[fieldKey]?.[0]) {
              color.image = `${BASE_URL}/uploads/${req.files[fieldKey][0].filename}`;
            } else {
              color.image = color.image || null;
            }
          });
        });
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        description,
        brandName,
        ...(brandIcon && { brandIcon }),
        materials: parsedMaterials,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "✅ Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("updateProduct error:", error);
    res.status(500).json({ message: "Server error while updating product" });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete product error:", error.message);
    res.status(500).json({ message: "Server error while deleting product" });
  }
};
