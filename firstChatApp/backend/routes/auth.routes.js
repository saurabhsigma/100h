import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();


// for writing the function logic inside of the routes we use
// controllers

router.get('/signup', signup)

router.get('/login', login)

router.get('/logout', logout )

export default router;