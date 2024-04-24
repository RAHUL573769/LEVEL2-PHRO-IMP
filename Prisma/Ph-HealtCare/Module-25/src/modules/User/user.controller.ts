import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await UserService.createAdmin(req.body);
  console.log("Result", result);
  res.send(result);
};

export const UserController = { createAdminController };
