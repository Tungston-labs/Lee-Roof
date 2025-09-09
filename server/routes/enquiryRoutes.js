import express from "express";
import Enquiry from "../models/Enquiry.js";
import  sendEmail  from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {
    const { name, email, phone, address, location, notes, items } = req.body;

    const enquiry = new Enquiry({
      name,
      email,
      phone,
      address,
      location,
      notes,
      items,
    });

    await enquiry.save();

    await sendEmail({
      to: process.env.EMAIL_USER, 
      from: email,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Notes:</b> ${notes || "None"}</p>
        <h3>Items:</h3>
        <ul>
          ${items
            .map(
              (i) => `
              <li>
                ${i.name} (${i.color || "N/A"}) - Qty: ${i.quantity || 1} 
                ${i.size ? `, Size: ${i.size}` : ""}
                <br/>
                <img src="${i.img}" width="80"/>
              </li>
            `
            )
            .join("")}
        </ul>
      `,
    });
   res.status(201).json({ message: "Enquiry created & emails sent", enquiry });
  } catch (err) {
    console.error("Error creating enquiry:", err);
    res.status(500).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ message: "Enquiry not found" });

    res.json(enquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const saved = await enquiry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.patch("/:enquiryId/status", async (req, res) => {
  try {
    console.log("patch")
    const { enquiryId } = req.params;
    const { status } = req.body;

    if (!["Pending", "Open", "Closed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      enquiryId,
      { status },
      { new: true }
    );

    if (!updatedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    // Notify customer via email
    await sendEmail({
      to: updatedEnquiry.email,
      subject: "Enquiry Status Updated",
      html: `
        <h2>Hello ${updatedEnquiry.name},</h2>
        <p>Your enquiry status has been updated to: <b>${status}</b></p>
      `,
    });

    res.status(200).json({
      message: `Enquiry status updated to ${status} & email sent`,
      enquiry: updatedEnquiry,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating enquiry status", error });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
export default router;
