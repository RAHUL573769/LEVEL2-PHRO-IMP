import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";
import globalRoute from "./constants/globalRouter";
import { globalErrorHandler } from "./middlewares/globalRrrorHandler";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1", globalRoute);
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.originalUrl);
  res.status(404).json({
    success: "False",
    message: "API NOT FOUND",
    error: `There is no route for ${req.originalUrl}`
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
