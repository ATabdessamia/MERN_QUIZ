import asyncHandler from "express-async-handler";
import Quest from "../models/questionModels.js";

// @desc    Fetch all questions
// @route   GET /api/questions
// @access  Public
const fetchQuestions = asyncHandler(async (req, res) => {
  const questions = await Quest.find({});

  res.json({
    status: "Success",
    data: {
      questions,
    },
  });
});

export { fetchQuestions };
