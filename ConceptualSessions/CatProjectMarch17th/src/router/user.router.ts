import express, { Application, Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/all-users", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Data Send",
    data: [
      {
        name: "Rahul Rudra",
        email: "rahul@gmail.com"
      }
    ]
  });
});
export default userRouter;
