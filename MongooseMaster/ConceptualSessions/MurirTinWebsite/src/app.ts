import express, { Request, Response } from "express";
import { userRotes } from "./routes/userRouter";
import cors from "cors";
import { tourRotes } from "./routes/tour.route";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRotes);
app.use("/tours", tourRotes);
app.use("/post", userRotes);
app.use("/update", userRotes);

app.use("/single", userRotes);

// app.use("/", userRouter.getRoute);

// console.log(process.cwd());

export default app;
