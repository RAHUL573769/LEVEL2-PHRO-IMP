import { ITour } from "../interface/tour.interface";
import { Tour } from "../models/tour.model";

const createTour = async (data: ITour): Promise<ITour> => {
  const result = await Tour.create(data);
  return result;
};
const getAllTour = async (): Promise<ITour[]> => {
  const result = await Tour.find();
  return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id);
  return result;
};

const getNextSchedule = async (id: string): Promise<any> => {
  const result = await Tour.findById(id);
  const nextSchedule = result?.getNextNearestStartAndEndDate();
  return { result, nextSchedule };
};

const updateTour = async (id: string, data: ITour): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
  return result;
};
const deleteTour = () => {};
export const TourServices = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule
};
