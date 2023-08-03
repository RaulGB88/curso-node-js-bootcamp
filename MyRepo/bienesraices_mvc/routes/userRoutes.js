import express from "express";
import { loginForm, registrationForm } from "../controllers/userController.js";

const router = express.Router();

router.get('/login', loginForm);
router.get('/registration', registrationForm);

export default router;