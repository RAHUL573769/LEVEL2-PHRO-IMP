import cors from "cors";
import express, { Application } from "express";
import { CatController } from "./controllers/cat.controller";
const app: Application = express();
app.use(cors());
app.use(express.json());

app.post("/create-cat", CatController.createCatController);

app.get("/get-cat", CatController.findCatController);
app.get("/get-single/:id", CatController.findSingleCatController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
