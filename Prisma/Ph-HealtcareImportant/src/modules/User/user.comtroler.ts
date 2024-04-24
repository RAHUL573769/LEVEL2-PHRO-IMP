import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createUserController = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await UserServices.createAdmin(data);
  res.status(202).json({
    message: "User Created",
    status: "Success",
    data: result
  });
  // console.log(data);
};

export const UserController = { createUserController };
