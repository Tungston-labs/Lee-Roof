import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  color: String,
  size: String,
  img: String,
  quantity: Number,
});

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
    location: String,
    status: { type: String, enum: ["Pending", "Open", "Closed"], default: "Pending" },
    items: [itemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);
