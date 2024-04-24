import e from "express";
import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
app.use(express.text());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Changes Ne1!");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is Post Route");
});
export default app;
