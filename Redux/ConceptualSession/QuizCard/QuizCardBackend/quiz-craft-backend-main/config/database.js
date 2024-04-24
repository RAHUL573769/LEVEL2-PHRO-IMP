import mongoose from "mongoose";
import { env } from "./env.js";
import express from "express";

const app = express();
const port = 3000;

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tea");
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${env.port}`);
    });

    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};

connectDatabase().catch((error) => console.log(error));
