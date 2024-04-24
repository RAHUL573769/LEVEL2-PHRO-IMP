import { Request, Response } from "express";
import { catServices } from "./Cat.service";

const createCatController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const catDataAdded = await catServices.addCat(data);
    res.status(200).json({
      success: true,
      message: "Data Added"
    });
    console.log(data);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong"
    });
  }
};

const getCatController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const catDataAdded = await catServices.getCat();
    res.status(200).json({
      success: true,
      message: "Data Fetched Successfully"
    });
    console.log(data);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong"
    });
  }
};
export const CatController = { createCatController, getCatController };
