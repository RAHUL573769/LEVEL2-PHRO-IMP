import express, { Request, Response } from "express";
import { UserController } from "./user.controller";
const userRouter = express.Router();
userRouter.get("/get-user", UserController.createAdminController);
userRouter.post("/create-user", UserController.createAdminController);
export const UserRouter = userRouter;
