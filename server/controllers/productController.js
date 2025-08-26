import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { productName, description, brandName, materials } = req.body;

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

    const {
      name,
      description,
      brandName,
      variants,
      primaryMaterial,
      primaryColor,
      primaryThickness,
      primaryColorCode,
    } = req.body;

    const primaryImage = req.files?.primaryImage?.[0]?.path || undefined;
    const brandIcon = req.files?.brandIcon?.[0]?.path || undefined;

    let parsedVariants = [];
    if (variants) {
      parsedVariants = JSON.parse(variants);

      parsedVariants.forEach((variant) => {
        variant.colors.forEach((color) => {
          const fieldKey = `colorImage_${variant.material}_${color.name}`;
          if (req.files?.[fieldKey]) {
            color.image = req.files[fieldKey][0].path;
          }
        });
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        brandName,
        ...(brandIcon && { brandIcon }),
        ...(primaryImage && { primaryImage }),
        primaryMaterial,
        primaryColor,
        primaryThickness,
        primaryColorCode,
        variants: parsedVariants,
      },
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
