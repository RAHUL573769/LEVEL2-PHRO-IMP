import { Request, Response } from "express";
import { ReviewServices } from "../services/review.services";

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;

    const result = await ReviewServices.createReview(reviewData);
    console.log(result);
    res.status(200).json({
      message: "Review Created Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Review Creation Failed",
      status: "Failed",
      data: error.message
    });
  }
};

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await ReviewServices.getSingleReview(id);

    res.status(200).json({
      message: "Single Review Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Review Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const getAllReview = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReview();

    res.status(200).json({
      message: "All Review Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Single Review Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const updateReview = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log("67", req.body);
    const result = await ReviewServices.updateReview(id, data);
    console.log(result);
    res.status(200).json({
      message: " Review Updates Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Review Updates Failed",
      status: "Failed",
      data: error
    });
  }
};

export const ReviewController = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview
};
