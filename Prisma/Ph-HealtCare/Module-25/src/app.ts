import express, { Application, Request, Response } from "express";

import cors from "cors";
import { userRouter } from "./modules/User/userRoute";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
