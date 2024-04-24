import express, { Application, Request, Response } from "express";
import { UserRouter } from "./routes/user.route";
import cors from "cors";
import { TourRouter } from "./routes/tour.route";
import { ReviewRouter } from "./routes/review.route";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/api/vi/users", UserRouter);
app.use("/api/vi/tours", TourRouter);
app.use("/api/vi/review", ReviewRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
