import express from "express";
import { getDashboardCounts, Login, signUp } from "../controllers/authController.js";
const router=express.Router();

router.post('/signup', signUp)
router.post("/login",Login)
router.get("/count",getDashboardCounts)
export default router;