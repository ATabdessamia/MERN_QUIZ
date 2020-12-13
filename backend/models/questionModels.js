import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  questionText: { type: String, required: true },
  answerOptions: [
    {
      answerText: { type: String, required: true },
      isCorrect: { type: Boolean, required: true, default: false },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
