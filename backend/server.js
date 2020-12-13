import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import connectDb from "./utils/db.js";
import questionsRoutes from "./routers/questionRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();
connectDb();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/questions", questionsRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  );
});
