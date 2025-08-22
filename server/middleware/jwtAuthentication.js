// middleware/adminAuth.js
import jwt from "jsonwebtoken"
export const adminAuth = (req, res, next) => {
const authHeader = req.headers["authorization"];
const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Admins only" });
    }

    req.admin = decoded; 
    next();
  });
};


