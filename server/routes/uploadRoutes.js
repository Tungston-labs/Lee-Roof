// const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/upload");

// router.post("/", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   res.json({
//     message: "File uploaded successfully",
//     filePath: `/uploads/${req.file.filename}`,
//   });
// });

// module.exports = router;
