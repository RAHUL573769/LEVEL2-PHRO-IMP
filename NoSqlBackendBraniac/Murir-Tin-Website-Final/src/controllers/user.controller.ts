import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserServices } from "../services/user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const result = await UserServices.createUser(userData);

    res.status(200).json({
      message: "User Created Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "User Creation Failed",
      status: "Failed",
      data: error
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await UserServices.getSingleUser(id);

    res.status(200).json({
      message: "Single User Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "User Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUser();

    res.status(200).json({
      message: "All User Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Single User Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log("67", req.body);
    const result = await UserServices.updateUser(id, data);
    console.log(result);
    res.status(200).json({
      message: " User Updates Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "User Updates Failed",
      status: "Failed",
      data: error
    });
  }
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser
};
