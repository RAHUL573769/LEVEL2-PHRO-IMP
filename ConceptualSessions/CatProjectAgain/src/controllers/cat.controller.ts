import { Request, Response } from "express";
import mongoose from "mongoose";

import { CatServices } from "../services/cat.service";
import { Cat } from "../model/cat.model";
const ObjectId = mongoose.Types.ObjectId;

const createCatController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;

    console.log(data);
    const result = await CatServices.createCat(data);
    res.status(200).json({
      message: "Cat Data Created Successfully",
      status: "Success",
      data: result
    });
  } catch (error) {}
};

const findCatController = async (req: Request, res: Response) => {
  try {
    const result = await CatServices.findCat();
    res.status(200).json({
      message: "Cat Data Fetched Successfully",
      status: "Success",
      data: result
    });
  } catch (error) {}
};

const findSingleCatController = async (req: Request, res: Response) => {
  try {
    const catId = req.params.id;
    const result = await CatServices.findSingleCat(catId);
    // const searchCatId = await Cat.isCatExists(req.params.id);
    // console.log("SearchCatId from Find Controller", searchCatId);
    // if (!searchCatId) {
    //   throw new Error("User not found").message;
    // }

    res.status(200).json({
      message: "Single Cat Data Fetched Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    console.log("46", error.message);
  }
};

export const CatController = {
  createCatController,
  findCatController,
  findSingleCatController
};
