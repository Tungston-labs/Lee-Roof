import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// Get all enquiries
router.get("/", async (req, res) => {
  const enquiries = await Enquiry.find();
  res.json(enquiries);
});

// Get single enquiry
router.get("/:id", async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ message: "Not found" });
    res.json(enquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create enquiry
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const saved = await enquiry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update enquiry (status or details)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete enquiry
router.delete("/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
