import express from "express";
import { login } from "../Controllers/AuthController.js";

const router = express.Router();

// POST /login
router.post("/login", login);

export default router;