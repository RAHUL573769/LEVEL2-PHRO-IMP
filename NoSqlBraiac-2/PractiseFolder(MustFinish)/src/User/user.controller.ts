import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { successResponse } from "../helperFunctions/successRespose";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    const { password, ...remainingData } = req.body;
    // console.log("19", remainingData);
    const result = await UserServices.createStudent(password, remainingData);
    successResponse(res, {
      message: "User Created Successfully",
      statusCode: 200,
      data: result
    });
  } catch (error) {
    console.log("Error is Found while creating User");
    next(error);
    // throw new Error(error);
  }
};

export const UserController = { createUser };
