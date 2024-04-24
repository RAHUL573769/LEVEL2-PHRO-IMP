import { Request, Response } from "express";
import { TourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;

    const result = await TourServices.createTour(tourData);
    console.log(result);
    res.status(200).json({
      message: "Tour Created Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Tour Creation Failed",
      status: "Failed",
      data: error.message
    });
  }
};

const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await TourServices.getSingleTour(id);

    res.status(200).json({
      message: "Single Tour Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Tour Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await TourServices.getAllTour();

    res.status(200).json({
      message: "All Tour Fetched Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Single Tour Fetched Failed",
      status: "Failed",
      data: error
    });
  }
};

const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log("67", req.body);
    const result = await TourServices.updateTour(id, data);
    console.log(result);
    res.status(200).json({
      message: " Tour Updates Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Tour Updates Failed",
      status: "Failed",
      data: error
    });
  }
};

export const TourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour
};
