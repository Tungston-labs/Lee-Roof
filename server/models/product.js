import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  colorName: { type: String, required: true },
  colorCode: { type: String }, // e.g. HEX
  image: { type: String }, // URL of the image for this color
});

const thicknessSchema = new mongoose.Schema({
  thickness: { type: String, required: true }, // e.g. "10mm"
  colors: [colorSchema], // multiple colors for each thickness
});

const materialSchema = new mongoose.Schema({
  materialName: { type: String, required: true }, // e.g. "Steel"
  thicknesses: [thicknessSchema], // multiple thickness options under material
});

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    description: { type: String },
    brandName: { type: String, required: true },
    brandIcon: { type: String }, // URL
    materials: [materialSchema], // embedded materials -> thickness -> colors -> images
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
