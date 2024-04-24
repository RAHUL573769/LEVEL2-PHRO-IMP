import express, { Request, Response } from "express";
import { UserController } from "./user.comtroler";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.status(202).json({
    message: "UserRoute wORKING"
  });
});
userRouter.post("/user", UserController.createUserController);
export const UserRouter = userRouter;
