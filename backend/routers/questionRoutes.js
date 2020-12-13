import express from "express";
import { fetchQuestions } from "../controllers/questionControllers.js";

const router = express.Router();

router.route("/").get(fetchQuestions);

export default router;
