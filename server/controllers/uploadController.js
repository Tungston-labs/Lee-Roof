const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

export const uploadImages = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const files = req.files.map((file) => ({
    relativePath: `uploads/${file.filename}`,
    url: `${BASE_URL}/uploads/${file.filename}`,
  }));

  res.status(200).json({
    message: "Images uploaded successfully",
    images: files,
  });
};

