import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.createAdmin(req.body);
    console.log("Result", result);
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin Created Succesfully"
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: error,
      message: "Something Went Wrong"
    });
  }
};

export const UserController = { createAdminController };
