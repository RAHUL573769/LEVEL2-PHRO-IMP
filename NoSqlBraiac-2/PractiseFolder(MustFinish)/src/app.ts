import express, { Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./User/user.route";
import { StudentRouter } from "./Student/student.route";
import { globalErrorHandler } from "./errorHandlers/globalErrorHandler";
import { AcademicSemesterRoute } from "./AcademicSemester/AcademicSemester.route";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", UserRouter);
app.use("/api", StudentRouter);
app.use("/api", AcademicSemesterRoute);
app.use(globalErrorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
