import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./ErrorHandlers/globalErrorHandler";
import { notFound } from "./middlewares/notFound";
import globalRouter from "./utils";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", globalRouter);
//no Found

//global error handler

app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(notFound);
export default app;
