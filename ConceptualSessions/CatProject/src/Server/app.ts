import express, { Application, Request, Response } from "express";
const app: Application = express();
import path from "path";
import cors from "cors";
import { catRoutes } from "./modules/Cat/Cat.route";
app.use(express.json());
app.use(cors());

app.use("/create", catRoutes);
app.use("/get", catRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
