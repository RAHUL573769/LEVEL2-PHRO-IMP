import express, { Application, Request, Response } from "express";
import userRouter from "./router/user.router";
const app: Application = express();

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
