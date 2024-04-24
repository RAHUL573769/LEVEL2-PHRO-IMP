import { Request, Response } from "express";
import { TourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const TourData = req.body;
    console.log(TourData);
    // const result = await Tour.create(TourData);
    const result = await TourServices.createTour(TourData);
    console.log("Daata Added");
    res.status(201).json({
      message: "Tour Created",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log(error);
  }
};

const getAllTour = async (req: Request, res: Response) => {
  try {
    // const TourData = req.body;
    // const result = await Tour.create(TourData);
    const result = await TourServices.getAllTour();
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
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const TourId = req.params.id;
    // const result = await Tour.create(TourData);
    const result = await TourServices.getSingleTour(TourId);
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
const updateTour = async (req: Request, res: Response) => {
  try {
    const TourData = req.body;
    const TourId = req.params.id;
    // const result = await Tour.create(TourData);
    const result = await TourServices.updateTour(TourId, TourData);
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
const getNextSchedule = async (req: Request, res: Response) => {
  try {
    // const TourData = req.body;
    const TourId = req.params.id;
    // const result = await Tour.create(TourData);
    const result = await TourServices.updateTour(TourId, TourData);
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
const deleteTour = async (req: Request, res: Response) => {
  try {
    // const TourData = req.body;
    // const result = await Tour.create(TourData);
    const result = await TourServices.getAllTour();
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
export const TourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule
};
