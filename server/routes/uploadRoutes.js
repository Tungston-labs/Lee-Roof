import express from "express";
import upload from "../middleware/upload.js";
import {  uploadImages } from "../controllers/uploadController.js";
import { adminAuth } from "../middleware/jwtAuthentication.js";

const router = express.Router();

router.post("/", upload.array("images", 10), adminAuth,uploadImages);
export default router;