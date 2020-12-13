import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import data from "./data/data.js";
import Questions from "./models/questionModels.js";
import connectDb from "./utils/db.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Questions.deleteMany();

    await Questions.insertMany(data);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Questions.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
