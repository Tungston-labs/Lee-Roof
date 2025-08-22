import mongoose from "mongoose";

const ThicknessSchema = new mongoose.Schema({
  value: { type: String, required: true }
});

const ColorSchema = new mongoose.Schema({
  name: { type: String, required: true },
    code: { type: String }, 
      image: { type: String },
  thickness: [ThicknessSchema]
});

const VariantSchema = new mongoose.Schema({
  material: { type: String, required: true },
  colors: [ColorSchema]
});

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },

    // brand details
    brandName: { type: String, required: true },
    brandIcon: { type: String }, // uploaded brand icon

    // product images
    primaryImage: { type: String }, // main product image
    primaryMaterial: { type: String },
    primaryColor: { type: String },
    primaryThickness: { type: String },
    primaryColorCode: { type: String },
    variants: [VariantSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
