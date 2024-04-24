import { Request, Response } from "express";
import { ReviewServices } from "../services/review.service";

const createReview = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    // const result = await Tour.create(tourData);
    const result = await ReviewServices.createReview(tourData);
    console.log("Daata Added");
    res.status(201).json({
      message: "Tour Created",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};

const getAllReview = async (req: Request, res: Response) => {
  try {
    // const tourData = req.body;
    // const result = await Tour.create(tourData);
    const result = await ReviewServices.getAllReview();
    console.log(result);
    res.status(201).json({
      message: "Tour Received",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};
const getSingleReview = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.id;
    // const result = await Tour.create(tourData);
    const result = await ReviewServices.getSingleReview(tourId);
    console.log(result);
    res.status(201).json({
      message: "Single Tour Received",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};
const updateReview = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const tourId = req.params.id;
    // const result = await Tour.create(tourData);
    const result = await ReviewServices.updateReview(tourId, tourData);
    console.log(result);
    res.status(201).json({
      message: "Tour Updated ",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};
const deleteReview = async (req: Request, res: Response) => {
  try {
    // const tourData = req.body;
    // const result = await Tour.create(tourData);
    const result = await ReviewServices.deleteReview();
    console.log(result);
    res.status(201).json({
      message: "Tour Received",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};
export const reviewController = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview
};
