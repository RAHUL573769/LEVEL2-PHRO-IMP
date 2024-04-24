import cors from "cors";
import express, { Request, Response } from "express";
import { UserRoute } from "./user/user.route";
import globalHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import { StudentRoute } from "./student/student.route";
import { AcademicSemesterRoute } from "./academicSemester/academic.semester.route";
const app = express();

app.use(express.json());
app.use(cors());
app.use(globalHandler);
app.use(notFound);
app.use("/user", UserRoute);
app.use("/student", StudentRoute);
app.use("/academic", AcademicSemesterRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
